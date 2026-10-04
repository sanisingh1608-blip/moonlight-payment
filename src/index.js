const SHOP_LAT = 22.3454;
const SHOP_LNG = 82.6967;

const WHATSAPP_NUMBER = "918873420907";

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Moonlight Biryani N Snacks | Korba</title>
<style>
*{box-sizing:border-box}
body{margin:0;font-family:Arial,sans-serif;background:#fff8f0;color:#222}
header{background:#54142b;color:#fff;text-align:center;padding:20px 14px}
header h1{margin:0;font-size:27px}
header p{margin:7px 0 0}
.banner{background:#ffd84d;color:#54142b;text-align:center;padding:12px;font-weight:bold}
.container{max-width:900px;margin:auto;padding:12px}
.card{background:#fff;margin:12px 0;padding:16px;border-radius:14px;box-shadow:0 2px 9px #ddd}
h2{margin-top:0;color:#54142b}
h3{color:#54142b;margin:18px 0 5px}
.item{display:flex;align-items:center;justify-content:space-between;gap:10px;border-bottom:1px solid #eee;padding:12px 0}
.item-name{flex:1}
.price{font-weight:bold;color:#54142b}
.add{background:#54142b;color:#fff;border:0;border-radius:8px;padding:10px 15px;font-weight:bold}
.qty{display:flex;align-items:center;gap:8px}
.qty button{border:0;border-radius:6px;padding:5px 10px;font-size:17px}
input{width:100%;padding:12px;margin:6px 0;border:1px solid #ccc;border-radius:8px;font-size:15px}
.total{font-size:17px;font-weight:bold;margin:7px 0}
.grand{font-size:22px;color:#54142b}
.pay,.whatsapp{width:100%;border:0;border-radius:9px;padding:14px;margin-top:9px;font-size:17px;font-weight:bold;color:#fff}
.pay{background:#16803c}
.whatsapp{background:#25D366}
.success{display:none;background:#e8f7ed;color:#176b35;padding:13px;border-radius:9px;margin-top:10px}
.small{font-size:13px;color:#666}
.empty{text-align:center;color:#777;padding:12px}
.notice{background:#fff3cd;padding:12px;border-radius:9px;font-size:14px}
.category{border-top:1px solid #eee;margin-top:12px;padding-top:8px}
hr{border:0;border-top:1px solid #ddd;margin:12px 0}
</style>
</head>

<body>

<header>
<h1>🌙 Moonlight Biryani N Snacks</h1>
<p>Fresh • Tasty • Desi Flavours • Korba, Chhattisgarh</p>
<p>📍 Ravishankar Shukla Nagar, beside Bus Stop, Korba</p>
</header>

<div class="banner">
🔥 DIRECT ORDER KARNE PAR ZOMATO / SWIGGY SE 20–25% TAK BACHAT 🔥
</div>

<div class="container">

<div class="card">
<h2>🍽️ Our Full Menu</h2>
<div id="menu"></div>
</div>

<div class="card">
<h2>🛒 Your Order</h2>
<div id="cart" class="empty">Cart empty</div>
</div>

<div class="card">
<h2>📍 Delivery Location</h2>

<button class="add" onclick="getLocation()">
📍 Calculate My Delivery Charge
</button>

<p id="locationStatus" class="small">
Allow location access to calculate your distance from Moonlight Biryani N Snacks.
</p>

<input id="address" placeholder="Full delivery address / landmark">

<div class="total">📍 Distance: <span id="distance">--</span></div>
<div class="total">🚚 Delivery Charge: ₹<span id="delivery">0</span></div>
<div class="total">🍽️ Food Total: ₹<span id="foodTotal">0</span></div>

<hr>

<div class="total grand">
Grand Total: ₹<span id="grandTotal">0</span>
</div>

<p class="small">
0–5 KM: ₹50 | 5.1–10 KM: ₹80 | Above 10 KM: Contact us
</p>
</div>

<div class="card">

<h2>👤 Customer Details</h2>

<input id="name" placeholder="Your Name">

<input id="phone"
placeholder="Mobile Number"
type="tel"
inputmode="numeric"
maxlength="10">

<div id="paymentStatus" class="success"></div>

<button class="pay" onclick="payNow()">
💳 Pay Online & Confirm Order
</button>

<button class="whatsapp" onclick="whatsappOrder()">
📲 Order on WhatsApp
</button>

<p class="small">
Online payment verify होने के बाद ही order confirmed माना जाएगा.
</p>

</div>

<div class="card">
<div class="notice">
📞 <b>Home Delivery • Takeaway</b><br>
Direct order ke liye WhatsApp:
<b>8873420907</b><br>
💳 UPI:
<b>S4142B5074@mairtel</b>
</div>
</div>

</div>

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

<script>

const WORKER_URL = location.origin;

const menuData = [

{
category:"🍚 Rice and Biryani",
items:[
["Paneer Dum Biryani",130],
["Veg Dum Biryani",120],
["Egg Dum Biryani",120],
["Kolkata Dum Biryani — Half",140],
["Kolkata Dum Biryani — Full",260],
["Hyderabadi Dum Biryani — Half",130],
["Hyderabadi Dum Biryani — Full",250],
["Mutton Biryani — Half",180],
["Mutton Biryani — Full",350],
["Chicken Roast Biryani",160],
["Biryani Rice",90]
]
},

{
category:"🍗 Starters",
items:[
["Paneer Chilli",150],
["Paneer 65",150],
["Manchurian",100],
["Chana Roast — Full",120],
["Chicken Tikka — 8 Pieces",250],
["Tandoori Chicken — Half",190],
["Tandoori Chicken — Full",350],
["Chicken Chilli",150],
["Boneless Chicken Chilli",170],
["Fish Fry — Half",120],
["Fish Fry — Full",230],
["Egg Chilli",140],
["Chicken Pakoda — 10 Pieces",150]
]
},

{
category:"🍛 Main Course",
items:[
["Paneer Do Pyaaza",190],
["Paneer Masala",190],
["Paneer Mushroom Masala",220],
["Mushroom Masala",200],
["Mixed Veg",150],
["Paneer Chatpata",180],
["Paneer Tikka Masala",199],
["Egg Bhurji",90],
["Egg Masala — 2 Pieces",110],
["Egg Curry — 2 Eggs",99],
["Chicken Curry — Half 3P",160],
["Chicken Curry — Full 6P",199],
["Chicken Do Pyaaza — Half 3P",170],
["Chicken Do Pyaaza — Full 6P",299],
["Chicken Masala — Half 3P",170],
["Chicken Masala — Full 6P",299],
["Chicken Butter Masala — Half 3P",190],
["Chicken Butter Masala — Full 6P",319],
["Chicken Bharta",199],
["Chicken Bhuna — Half 3P",170],
["Chicken Bhuna — Full 6P",299],
["Special Chicken Gharwali — 8 Pieces",349],
["Fish Curry — Half",169],
["Fish Curry — Full",299],
["Egg Bhurji Curries",109]
]
},

{
category:"🫓 Breads",
items:[
["Plain Tandoori Roti",15],
["Butter Tandoori Roti",20],
["Garlic Naan",40],
["Butter Naan",50],
["Aloo Paratha",49],
["Paneer Paratha",59],
["Tawa Roti",15],
["Butter Tawa Roti",20]
]
}

];

let cart=[];
let deliveryCharge=0;
let distanceKm=0;
let customerLat=null;
let customerLng=null;

function renderMenu(){

document.getElementById("menu").innerHTML=

menuData.map(section=>`

<div class="category">
<h3>${section.category}</h3>

${section.items.map(item=>`

<div class="item">

<div class="item-name">
${item[0]}<br>
<span class="price">₹${item[1]}</span>
</div>

<button class="add"
onclick='addItem(${JSON.stringify(item[0])},${item[1]})'>
ADD
</button>

</div>

`).join("")}

</div>

`).join("");

}

function addItem(name,price){

let existing=cart.find(x=>x.name===name);

if(existing) existing.qty++;
else cart.push({name,price,qty:1});

renderCart();
}

function changeQty(index,change){

cart[index].qty+=change;

if(cart[index].qty<=0)
cart.splice(index,1);

renderCart();
}

function getFoodTotal(){

return cart.reduce(
(sum,item)=>sum+(item.price*item.qty),0
);

}

function renderCart(){

const box=document.getElementById("cart");

if(!cart.length){

box.innerHTML="Cart empty";
box.className="empty";

}else{

box.className="";

box.innerHTML=cart.map((item,index)=>`

<div class="item">

<div>
<b>${item.name}</b><br>
₹${item.price} × ${item.qty}
=
<b>₹${item.price*item.qty}</b>
</div>

<div class="qty">

<button onclick="changeQty(${index},-1)">−</button>

<span>${item.qty}</span>

<button onclick="changeQty(${index},1)">+</button>

</div>

</div>

`).join("");

}

updateTotals();
}

function updateTotals(){

const food=getFoodTotal();
const delivery=Number(deliveryCharge)||0;

document.getElementById("foodTotal").textContent=food;
document.getElementById("delivery").textContent=delivery;
document.getElementById("grandTotal").textContent=food+delivery;
}

function getLocation(){

if(!navigator.geolocation){

alert("Browser location support nahi karta.");
return;
}

document.getElementById("locationStatus").textContent=
"📍 Location mil rahi hai...";

navigator.geolocation.getCurrentPosition(

position=>{

customerLat=position.coords.latitude;
customerLng=position.coords.longitude;

calculateDistance();

},

()=>{

document.getElementById("locationStatus").textContent=
"❌ Location permission allow karein.";

alert("Location permission allow karein.");

},

{
enableHighAccuracy:true,
timeout:15000,
maximumAge:0
}

);

}

function calculateDistance(){

const R=6371;

const dLat=(customerLat-SHOP_LAT)*Math.PI/180;
const dLng=(customerLng-SHOP_LNG)*Math.PI/180;

const a=
Math.sin(dLat/2)**2+
Math.cos(SHOP_LAT*Math.PI/180)*
Math.cos(customerLat*Math.PI/180)*
Math.sin(dLng/2)**2;

distanceKm=
R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));

document.getElementById("distance").textContent=
distanceKm.toFixed(2)+" KM";

if(distanceKm<=5){

deliveryCharge=50;

document.getElementById("locationStatus").textContent=
"✅ Delivery available — ₹50";

}else if(distanceKm<=10){

deliveryCharge=80;

document.getElementById("locationStatus").textContent=
"✅ Delivery available — ₹80";

}else{

deliveryCharge=0;

document.getElementById("locationStatus").textContent=
"❌ Delivery 10 KM tak available hai.";

alert("Sorry, delivery 10 KM tak available hai.");

}

updateTotals();

}

function validateOrder(){

if(!cart.length){

alert("Please select food items.");
return false;
}

const name=document.getElementById("name").value.trim();
const phone=document.getElementById("phone").value.trim();
const address=document.getElementById("address").value.trim();

if(!name){

alert("Name fill karein.");
return false;
}

if(!/^[0-9]{10}$/.test(phone)){

alert("10 digit mobile number enter karein.");
return false;
}

if(!address){

alert("Delivery address fill karein.");
return false;
}

if(customerLat===null){

alert("Pehle Calculate My Delivery Charge dabayein.");
return false;
}

if(distanceKm>10){

alert("Delivery 10 KM tak available hai.");
return false;
}

return true;
}

async function payNow(){

if(!validateOrder()) return;

const name=document.getElementById("name").value.trim();
const phone=document.getElementById("phone").value.trim();
const address=document.getElementById("address").value.trim();

const total=getFoodTotal()+(Number(deliveryCharge)||0);

const status=document.getElementById("paymentStatus");

status.style.display="block";
status.textContent="Payment prepare ho raha hai...";

try{

const response=await fetch(
WORKER_URL+"/api/create-order",
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
amount:Math.round(total*100)
})
}
);

const order=await response.json();

if(!order.success)
throw new Error(order.error||"Order creation failed");

const options={

key:order.keyId,
amount:order.amount,
currency:order.currency,
name:"Moonlight Biryani N Snacks",
description:"Moonlight Food Order",
order_id:order.orderId,

prefill:{
name:name,
contact:phone
},

notes:{
customer_name:name,
customer_phone:phone,
delivery_address:address,
distance_km:distanceKm.toFixed(2),
delivery_charge:String(deliveryCharge),
food_total:String(getFoodTotal()),
grand_total:String(total)
},

theme:{
color:"#54142b"
},

handler:async function(payment){

status.textContent="Payment verify ho raha hai...";

try{

const verify=await fetch(
WORKER_URL+"/api/verify-payment",
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({

razorpay_order_id:payment.razorpay_order_id,
razorpay_payment_id:payment.razorpay_payment_id,
razorpay_signature:payment.razorpay_signature

})
}
);

const result=await verify.json();

if(result.success&&result.verified&&result.orderConfirmed){

status.textContent=
"✅ Payment successful & verified. Order Confirmed!";

sendConfirmedWhatsApp(
name,
phone,
address,
result.paymentId,
result.orderId
);

}else{

status.textContent=
"❌ Payment verification failed. Order confirm nahi hua.";

}

}catch(e){

status.textContent=
"❌ Verification error. Order confirm nahi hua.";

}

},

modal:{
ondismiss:function(){

status.textContent=
"Payment cancelled. Order confirm nahi hua.";

}
}

};

new Razorpay(options).open();

}catch(e){

status.style.display="none";

alert("Payment start nahi ho paya. Please try again.");

}

}

function orderText(){

return cart.map(item=>
`${item.name} x ${item.qty} = ₹${item.price*item.qty}`
).join("\\n");

}

function whatsappOrder(){

if(!cart.length){

alert("Please select food items.");
return;
}

const name=document.getElementById("name").value.trim()||"Not provided";
const phone=document.getElementById("phone").value.trim()||"Not provided";
const address=document.getElementById("address").value.trim()||"Not provided";

const foodTotal=getFoodTotal();
const total=foodTotal+(Number(deliveryCharge)||0);

const message=

`🌙 MOONLIGHT BIRYANI N SNACKS

🛒 ORDER REQUEST

Customer: ${name}
Mobile: ${phone}

ORDER:
${orderText()}

Food Total: ₹${foodTotal}
Delivery: ₹${deliveryCharge}
Distance: ${distanceKm?distanceKm.toFixed(2)+" KM":"Not calculated"}

GRAND TOTAL: ₹${total}

Address:
${address}`;

window.location.href=
"https://wa.me/"+WHATSAPP_NUMBER+
"?text="+encodeURIComponent(message);

}

function sendConfirmedWhatsApp(
name,
phone,
address,
paymentId,
orderId
){

const foodTotal=getFoodTotal();
const total=foodTotal+(Number(deliveryCharge)||0);

const message=

`✅ PAID ORDER

🌙 MOONLIGHT BIRYANI N SNACKS

Customer: ${name}
Mobile: ${phone}

ORDER:
${orderText()}

Food Total: ₹${foodTotal}
Delivery: ₹${deliveryCharge}
Distance: ${distanceKm.toFixed(2)} KM

TOTAL PAID: ₹${total}

Payment ID:
${paymentId}

Razorpay Order ID:
${orderId}

Address:
${address}`;

setTimeout(()=>{

window.location.href=
"https://wa.me/"+WHATSAPP_NUMBER+
"?text="+encodeURIComponent(message);

},700);

}

renderMenu();
renderCart();
updateTotals();

</script>

</body>
</html>`;

export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    if (url.pathname === "/api/create-order") {

      if (request.method !== "POST") {
        return Response.json(
          {success:false,error:"Method not allowed"},
          {status:405}
        );
      }

      try {

        const body = await request.json();
        const amount = Number(body.amount);

        if (!amount || amount < 100) {
          return Response.json(
            {success:false,error:"Invalid amount"},
            {status:400}
          );
        }

        if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET) {
          return Response.json(
            {success:false,error:"Razorpay keys are not configured"},
            {status:500}
          );
        }

        const auth = btoa(
          `${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`
        );

        const response = await fetch(
          "https://api.razorpay.com/v1/orders",
          {
            method:"POST",
            headers:{
              "Authorization":`Basic ${auth}`,
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              amount:Math.round(amount),
              currency:"INR",
              receipt:`moonlight_${Date.now()}`
            })
          }
        );

        const data = await response.json();

        if (!response.ok) {
          return Response.json(
            {
              success:false,
              error:data.error?.description || "Razorpay order creation failed"
            },
            {status:500}
          );
        }

        return Response.json({
          success:true,
          keyId:env.RAZORPAY_KEY_ID,
          orderId:data.id,
          amount:data.amount,
          currency:data.currency
        });

      } catch(e) {

        return Response.json(
          {success:false,error:e.message},
          {status:500}
        );

      }
    }

    if (url.pathname === "/api/verify-payment") {

      if (request.method !== "POST") {
        return Response.json(
          {success:false,error:"Method not allowed"},
          {status:405}
        );
      }

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
              success:false,
              verified:false,
              orderConfirmed:false
            },
            {status:400}
          );

        }

        const encoder = new TextEncoder();

        const key = await crypto.subtle.importKey(
          "raw",
          encoder.encode(env.RAZORPAY_KEY_SECRET),
          {
            name:"HMAC",
            hash:"SHA-256"
          },
          false,
          ["sign"]
        );

        const signatureBuffer =
          await crypto.subtle.sign(
            "HMAC",
            key,
            encoder.encode(`${orderId}|${paymentId}`)
          );

        const expectedSignature =
          [...new Uint8Array(signatureBuffer)]
          .map(b=>b.toString(16).padStart(2,"0"))
          .join("");

        const verified =
          expectedSignature === signature;

        return Response.json({

          success:true,
          verified:verified,
          orderConfirmed:verified,
          paymentId:verified?paymentId:null,
          orderId:verified?orderId:null

        });

      } catch(e) {

        return Response.json(
          {
            success:false,
            verified:false,
            orderConfirmed:false,
            error:e.message
          },
          {status:500}
        );

      }

    }

    if (
      request.method === "GET" &&
      (
        url.pathname === "/" ||
        url.pathname === "/index.html"
      )
    ) {

      return new Response(HTML,{
        headers:{
          "content-type":"text/html;charset=UTF-8",
          "cache-control":"no-cache"
        }
      });

    }

    return Response.json({
      success:true,
      service:"Moonlight Payment Worker",
      status:"online"
    });

  }
};
