const CATALOG = [{"name":"Paneer Dum Biryani","variant":"Paneer Dum Biryani","price":130.0},{"name":"Veg Dum Biryani","variant":"Veg Dum Biryani","price":120.0},{"name":"Egg Dum Biryani","variant":"Egg Dum Biryani","price":120.0},{"name":"Kolkata Dum Biryani ","variant":"Half","price":140.0},{"name":"Kolkata Dum Biryani","variant":"Full","price":260.0},{"name":"Hyderabadi Dum Biryani ","variant":"Half","price":130.0},{"name":"Hyderabadi Dum Biryani","variant":"Full","price":250.0},{"name":"Mutton Biryani","variant":"Half","price":180.0},{"name":"Mutton Biryani","variant":"Full","price":350.0},{"name":"Chicken Roast Biryani","variant":"Chicken Roast Biryani","price":160.0},{"name":"Biryani Rice","variant":"Biryani Rice","price":90.0},{"name":"Paneer Chilli","variant":"Paneer Chilli","price":150.0},{"name":"Paneer 65","variant":"Paneer 65","price":150.0},{"name":"Manchurian","variant":"Manchurian","price":100.0},{"name":"Chana Roast.","variant":"Full","price":120.0},{"name":"Chicken Tikka (8 Pieces)","variant":"Chicken Tikka (8 Pieces)","price":250.0},{"name":"Tandoori Chicken","variant":"Half","price":190.0},{"name":"Tandoori Chicken","variant":"Full","price":350.0},{"name":"Chicken Chilli","variant":"Chicken Chilli","price":150.0},{"name":"Boneless Chicken Chilli","variant":"Boneless Chicken Chilli","price":170.0},{"name":"Fish Fry","variant":"Half","price":120.0},{"name":"Fish Fry","variant":"Full","price":230.0},{"name":"Egg Chilli","variant":"Egg Chilli","price":140.0},{"name":"Chicken Pakoda","variant":"10 Pieces","price":150.0},{"name":"Paneer Do Pyaaza","variant":"Paneer Do Pyaaza","price":190.0},{"name":"Paneer Masala","variant":"Paneer Masala","price":190.0},{"name":"Paneer Mushroom Masala","variant":"Paneer Mushroom Masala","price":220.0},{"name":"Mushroom Masala","variant":"Mushroom Masala","price":200.0},{"name":"Mixed Veg","variant":"Mixed Veg","price":150.0},{"name":"Paneer Chatpata","variant":"Paneer Chatpata","price":180.0},{"name":"Paneer Tikka Masala","variant":"Paneer Tikka Masala","price":199.0},{"name":"Egg Bhurji","variant":"Egg Bhurji","price":90.0},{"name":"Egg Masala","variant":"2 Pieces","price":110.0},{"name":"Egg Curry (2 Eggs)","variant":"Pieces","price":99.0},{"name":"Chicken Curry","variant":"Half 3P","price":160.0},{"name":"Chicken Curry","variant":"Full 6p","price":199.0},{"name":"Chicken Do Pyaaza","variant":"Half 3P","price":170.0},{"name":"Chicken Do Pyaaza","variant":"Full 6P","price":299.0},{"name":"Chicken Masala","variant":"Half 3P","price":170.0},{"name":"Chicken Masala","variant":"Full 6P","price":299.0},{"name":"Chicken Butter Masala","variant":"Half 3P","price":190.0},{"name":"Chicken Butter Masala","variant":"Full 6P","price":319.0},{"name":"Chicken Bharta","variant":"Chicken Bharta","price":199.0},{"name":"Chicken Bhuna","variant":"Half 3P","price":170.0},{"name":"Chicken Bhuna","variant":"Full 6P","price":299.0},{"name":"Special Chicken Gharwali (8 Pieces)","variant":"Special Chicken Gharwali (8 Pieces)","price":349.0},{"name":"Fish Curry","variant":"Half","price":169.0},{"name":"Fish Curry","variant":"Full","price":299.0},{"name":"Egg Bhurji Curries","variant":"Egg Bhurji Curries","price":109.0},{"name":"Plain Tandoori Roti","variant":"Plain Tandoori Roti","price":15.0},{"name":"Butter Tandoori Roti","variant":"Butter Tandoori Roti","price":20.0},{"name":"Garlic Naan","variant":"Garlic Naan","price":40.0},{"name":"Butter Naan","variant":"Butter Naan","price":50.0},{"name":"Aloo Paratha","variant":"Aloo Paratha","price":49.0},{"name":"Paneer Paratha","variant":"Paneer Paratha","price":59.0},{"name":"Tawa Roti","variant":"Tawa Roti","price":15.0},{"name":"Butter Tawa Roti","variant":"Butter Tawa Roti","price":20.0},{"name":"Veg Fried Rice","variant":"Veg Fried Rice","price":120.0},{"name":"Chicken Fried Rice","variant":"Chicken Fried Rice","price":149.0},{"name":"Veg Noodles","variant":"Veg Noodles","price":119.0},{"name":"Egg Noodles","variant":"Egg Noodles","price":129.0},{"name":"Chicken Noodles","variant":"Chicken Noodles","price":149.0},{"name":"Paneer Pakoda","variant":"Full","price":149.0},{"name":"Egg Omelette","variant":"Egg Omelette","price":50.0},{"name":"Chole Bhature (2 Pieces)","variant":"Chole Bhature (2 Pieces)","price":119.0},{"name":"French Fries","variant":"French Fries","price":99.0},{"name":"Peri Peri Fries","variant":"Peri Peri Fries","price":129.0},{"name":"Cheese Franch Fries","variant":"Cheese Franch Fries","price":149.0},{"name":"Chicken Roast","variant":"Chicken Roast","price":139.0},{"name":"Chicken Samosa ( 2 pcs)","variant":"Chicken Samosa ( 2 pcs)","price":49.0},{"name":"Veg Steam Momos","variant":"4 Pcs","price":40.0},{"name":"Veg Steam Momos","variant":"8 Pcs","price":75.0},{"name":"Paneer Steam Momos (4 pcs)","variant":"4 Pcs","price":50.0},{"name":"Paneer Steam Momos (4 pcs)","variant":"8 Pcs","price":80.0},{"name":"Chicken Steam Momos( 4 pcs)","variant":"4 Pcs","price":60.0},{"name":"Chicken Steam Momos( 4 pcs)","variant":"8 Pcs","price":109.0},{"name":"Veg Kurkuri Momos ( 4 pcs)","variant":"4 Pcs","price":60.0},{"name":"Veg Kurkuri Momos ( 4 pcs)","variant":"8 Pcs","price":120.0},{"name":"Paneer Kukure Momos (4pcs)","variant":"4pcs","price":70.0},{"name":"Paneer Kukure Momos (4pcs)","variant":"8 Pcs","price":140.0},{"name":"Chicken Kurkure Momos ( 4pcs)","variant":"4 Pcs","price":90.0},{"name":"Chicken Kurkure Momos ( 4pcs)","variant":"8 Pcs","price":190.0},{"name":"Veg Fried Momos (4pcs)","variant":"4pcs","price":60.0},{"name":"Veg Fried Momos (4pcs)","variant":"8 Pcs","price":119.0},{"name":"Paneer Fried Momos (4 pcs)","variant":"4pcs","price":70.0},{"name":"Paneer Fried Momos (4 pcs)","variant":"8pcs","price":129.0},{"name":"Chicken Fried Momos (4pcs)","variant":"4 Pcs","price":80.0},{"name":"Chicken Fried Momos (4pcs)","variant":"8 Pcs","price":149.0},{"name":"Veg Peri Peri Momos (4pcs)","variant":"4 Pcs","price":70.0},{"name":"Veg Peri Peri Momos (4pcs)","variant":"8 Pcs","price":129.0},{"name":"Paneer Peri Peri Momos ( 4pcs)","variant":"4pcs","price":80.0},{"name":"Paneer Peri Peri Momos ( 4pcs)","variant":"8 Pcs","price":129.0},{"name":"Chicken Peri Peri Momos (4 Pcs)","variant":"4 Pcs","price":90.0},{"name":"Chicken Peri Peri Momos (4 Pcs)","variant":"8 Pcs","price":159.0},{"name":"Cheese Veg Momos ( 4pcs)","variant":"4 Pcs","price":60.0},{"name":"Cheese Veg Momos ( 4pcs)","variant":"8 Pcs","price":109.0},{"name":"Veg Paneer Momos ( 4pcs)","variant":"4 Pcs","price":70.0},{"name":"Veg Paneer Momos ( 4pcs)","variant":"8 Pcs","price":129.0},{"name":"Cheese Chicken Momos ( 4pcs)","variant":"4 Pcs","price":99.0},{"name":"Cheese Chicken Momos ( 4pcs)","variant":"8 Pcs","price":149.0},{"name":"Litti Murga","variant":"Litti Murga","price":159.0},{"name":"Litti Chokha","variant":"Litti Chokha","price":79.0},{"name":"Idlis (3Pieces)","variant":"Idlis (3Pieces)","price":39.0},{"name":"Poha","variant":"Poha","price":39.0},{"name":"Tari poha","variant":"Tari poha","price":49.0},{"name":"Puri Sabji (4Puri)","variant":"Puri Sabji (4Puri)","price":59.0}];

const SHOP_NAME = "Moonlight Biryani N Snacks";
const SHOP_PHONE = "918873420907";

function json(data,status=200){
  return new Response(JSON.stringify(data),{
    status,
    headers:{
      "content-type":"application/json",
      "cache-control":"no-store"
    }
  });
}

function corsHeaders(){
  return {
    "access-control-allow-origin":"https://moonlightbiryani.in",
    "access-control-allow-methods":"POST,OPTIONS",
    "access-control-allow-headers":"content-type"
  };
}

function jsonC(data,status=200){
  return new Response(JSON.stringify(data),{
    status,
    headers:{
      "content-type":"application/json",
      "cache-control":"no-store",
      ...corsHeaders()
    }
  });
}

function basicAuth(id,secret){
  return "Basic "+btoa(id+":"+secret);
}

async function razorpayFetch(path,env,init={}){
  const headers=new Headers(init.headers||{});
  headers.set(
    "Authorization",
    basicAuth(env.RAZORPAY_KEY_ID,env.RAZORPAY_KEY_SECRET)
  );
  headers.set("Content-Type","application/json");

  return fetch(
    "https://api.razorpay.com/v1"+path,
    {...init,headers}
  );
}

function timingSafeEqual(a,b){
  if(a.length!==b.length)return false;
  let r=0;
  for(let i=0;i<a.length;i++){
    r|=a.charCodeAt(i)^b.charCodeAt(i);
  }
  return r===0;
}

async function hmacHex(secret,message){
  const key=await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    {name:"HMAC",hash:"SHA-256"},
    false,
    ["sign"]
  );

  const sig=await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message)
  );

  return [...new Uint8Array(sig)]
    .map(b=>b.toString(16).padStart(2,"0"))
    .join("");
}

function clean(s,max=300){
  return String(s??"").trim().slice(0,max);
}

export default {
  async fetch(request,env){

    const url=new URL(request.url);

    if(url.pathname.startsWith("/api/")){

      if(request.method==="OPTIONS"){
        return new Response(null,{
          status:204,
          headers:corsHeaders()
        });
      }

      try{

        /* CREATE RAZORPAY ORDER */
        if(
          url.pathname==="/api/create-order" &&
          request.method==="POST"
        ){

          const b=await request.json();

          const orderType=
            b.orderType==="Takeaway"
            ?"Takeaway"
            :"Home Delivery";

          const name=clean(b.name,100);
          const mobile=clean(b.mobile,15);
          const address=clean(b.address,300);
          const distance=Number(b.distance||0);

          if(
            !name ||
            !/^\d{10}$/.test(mobile)
          ){
            return jsonC(
              {error:"Invalid customer details."},
              400
            );
          }

          if(
            orderType==="Home Delivery" &&
            (
              !address ||
              !(distance>0 && distance<=10)
            )
          ){
            return jsonC(
              {
                error:
                "Valid delivery address and distance up to 10 KM are required."
              },
              400
            );
          }

          const arr=
            Array.isArray(b.items)
            ?b.items
            :[];

          if(!arr.length || arr.length>50){
            return jsonC(
              {error:"Invalid cart."},
              400
            );
          }

          let subtotal=0;

          for(const it of arr){

            const id=Number(it.id);
            const qty=Number(it.qty);

            if(
              !Number.isInteger(id) ||
              !Number.isInteger(qty) ||
              qty<1 ||
              qty>50 ||
              !CATALOG[id]
            ){
              return jsonC(
                {error:"Invalid menu item."},
                400
              );
            }

            subtotal +=
              CATALOG[id].price * qty;
          }

          const fee=
            orderType==="Takeaway"
            ?0
            :(distance<=5 ? 50 : 80);

          const total=subtotal+fee;

          const expected=Number(b.total);

          if(
            !Number.isFinite(expected) ||
            Math.round(expected)!==Math.round(total)
          ){
            return jsonC(
              {
                error:
                "Order total mismatch. Please refresh and try again."
              },
              400
            );
          }

          const amount=Math.round(total*100);

          const itemSummary=
            arr
            .map(
             
