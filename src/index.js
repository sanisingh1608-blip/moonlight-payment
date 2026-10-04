export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Website files
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return env.ASSETS.fetch(
        new Request(new URL("/index.html", request.url), request)
      );
    }

    // Razorpay order creation
    if (url.pathname === "/api/create-order" && request.method === "POST") {
      try {
        const body = await request.json();
        const amount = Number(body.amount);

        if (!amount || amount < 100) {
          return Response.json(
            { success: false, error: "Invalid amount" },
            { status: 400 }
          );
        }

        if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET) {
          return Response.json(
            { success: false, error: "Razorpay keys are not configured" },
            { status: 500 }
          );
        }

        const auth = btoa(
          `${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`
        );

        const response = await fetch(
          "https://api.razorpay.com/v1/orders",
          {
            method: "POST",
            headers: {
              Authorization: `Basic ${auth}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              amount: Math.round(amount),
              currency: "INR",
              receipt: `moonlight_${Date.now()}`
            })
          }
        );

        const data = await response.json();

        if (!response.ok) {
          return Response.json(
            {
              success: false,
              error:
                data.error?.description ||
                "Razorpay order creation failed"
            },
            { status: 500 }
          );
        }

        return Response.json({
          success: true,
          keyId: env.RAZORPAY_KEY_ID,
          orderId: data.id,
          amount: data.amount,
          currency: data.currency
        });

      } catch (error) {
        return Response.json(
          { success: false, error: error.message },
          { status: 500 }
        );
      }
    }

    // Razorpay payment verification
    if (
      url.pathname === "/api/verify-payment" &&
      request.method === "POST"
    ) {
      try {
        const body = await request.json();

        const orderId = body.razorpay_order_id;
        const paymentId = body.razorpay_payment_id;
        const signature = body.razorpay_signature;

        if (
          !orderId ||
          !paymentId ||
          !signature ||
          !env.RAZORPAY_KEY_SECRET
        ) {
          return Response.json(
            {
              success: false,
              verified: false,
              orderConfirmed: false
            },
            { status: 400 }
          );
        }

        const encoder = new TextEncoder();

        const key = await crypto.subtle.importKey(
          "raw",
          encoder.encode(env.RAZORPAY_KEY_SECRET),
          {
            name: "HMAC",
            hash: "SHA-256"
          },
          false,
          ["sign"]
        );

        const signatureBuffer = await crypto.subtle.sign(
          "HMAC",
          key,
          encoder.encode(`${orderId}|${paymentId}`)
        );

        const expectedSignature = [...new Uint8Array(signatureBuffer)]
          .map(b => b.toString(16).padStart(2, "0"))
          .join("");

        const verified = expectedSignature === signature;

        return Response.json({
          success: true,
          verified,
          orderConfirmed: verified,
          paymentId: verified ? paymentId : null,
          orderId: verified ? orderId : null
        });

      } catch (error) {
        return Response.json(
          {
            success: false,
            verified: false,
            orderConfirmed: false,
            error: error.message
          },
          { status: 500 }
        );
      }
    }

    // Other static files
    return env.ASSETS.fetch(request);
  }
};
