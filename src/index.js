const ALLOWED_ORIGIN = "https://moonlightbiryani.in";

const CORS_HEADERS = {
"Access-Control-Allow-Origin": ALLOWED_ORIGIN,
"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
"Access-Control-Allow-Headers": "Content-Type",
"Content-Type": "application/json"
};

function response(data, status = 200) {
return new Response(JSON.stringify(data), {
status,
headers: CORS_HEADERS
});
}

async function createHmacSHA256(secret, message) {
const key = await crypto.subtle.importKey(
"raw",
new TextEncoder().encode(secret),
{
name: "HMAC",
hash: "SHA-256"
},
false,
["sign"]
);

const signature = await crypto.subtle.sign(
"HMAC",
key,
new TextEncoder().encode(message)
);

return Array.from(new Uint8Array(signature))
.map(byte => byte.toString(16).padStart(2, "0"))
.join("");
}

function safeCompare(a, b) {
if (typeof a !== "string" || typeof b !== "string") {
return false;
}

if (a.length !== b.length) {
return false;
}

let result = 0;

for (let i = 0; i < a.length; i++) {
result |= a.charCodeAt(i) ^ b.charCodeAt(i);
}

return result === 0;
}

async function razorpayAPI(env, path, method = "GET", body = null) {
if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET) {
throw new Error("Razorpay credentials are not configured");
}

const credentials = btoa(
"${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}"
);

const options = {
method,
headers: {
"Authorization": "Basic ${credentials}",
"Content-Type": "application/json"
}
};

if (body !== null) {
options.body = JSON.stringify(body);
}

const res = await fetch(
"https://api.razorpay.com/v1${path}",
options
);

const text = await res.text();

let data;

try {
data = JSON.parse(text);
} catch {
data = {
error: text
};
}

if (!res.ok) {
throw new Error(
data?.error?.description ||
data?.error?.message ||
"Razorpay API request failed"
);
}

return data;
}

export default {
async fetch(request, env) {
if (request.method === "OPTIONS") {
return new Response(null, {
status: 204,
headers: CORS_HEADERS
});
}

const url = new URL(request.url);

if (request.method === "GET" && url.pathname === "/") {
  return response({
    success: true,
    service: "Moonlight Payment Worker",
    status: "online"
  });
}

if (request.method !== "POST") {
  return response(
    {
      success: false,
      error: "Method not allowed"
    },
    405
  );
}

try {
  if (url.pathname === "/api/create-order") {
    const body = await request.json();

    const amount = Number(body.amount);

    if (!Number.isInteger(amount) || amount < 100) {
      return response(
        {
          success: false,
          error: "Invalid payment amount"
        },
        400
      );
    }

    if (amount > 10000000) {
      return response(
        {
          success: false,
          error: "Payment amount is too large"
        },
        400
      );
    }

    const order = await razorpayAPI(
      env,
      "/orders",
      "POST",
      {
        amount: amount,
        currency: "INR",
        receipt:
          `ML-${Date.now()}`
      }
    );

    return response({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: env.RAZORPAY_KEY_ID
    });
  }

  if (url.pathname === "/api/verify-payment") {
    const body = await request.json();

    const razorpayOrderId =
      String(body.razorpay_order_id || "");

    const razorpayPaymentId =
      String(body.razorpay_payment_id || "");

    const razorpaySignature =
      String(body.razorpay_signature || "");

    if (
      !razorpayOrderId ||
      !razorpayPaymentId ||
      !razorpaySignature
    ) {
      return response(
        {
          success: false,
          verified: false,
          orderConfirmed: false,
          error: "Payment details are incomplete"
        },
        400
      );
    }

    const message =
      `${razorpayOrderId}|${razorpayPaymentId}`;

    const expectedSignature =
      await createHmacSHA256(
        env.RAZORPAY_KEY_SECRET,
        message
      );

    const verified =
      safeCompare(
        expectedSignature,
        razorpaySignature
      );

    if (!verified) {
      return response(
        {
          success: false,
          verified: false,
          orderConfirmed: false,
          error: "Invalid payment signature"
        },
        400
      );
    }

    return response({
      success: true,
      verified: true,
      orderConfirmed: true,
      paymentId: razorpayPaymentId,
      orderId: razorpayOrderId,
      message:
        "Payment verified and order confirmed"
    });
  }

  return response(
    {
      success: false,
      error: "Unknown API endpoint"
    },
    404
  );

} catch (error) {
  return response(
    {
      success: false,
      error:
        error?.message ||
        "Server error"
    },
    500
  );
}

}
};
