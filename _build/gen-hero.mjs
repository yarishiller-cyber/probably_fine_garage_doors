import { readFileSync, writeFileSync, existsSync } from "node:fs";
import sharp from "sharp";
const API_KEY=process.env.GEMINI_API_KEY, MODEL="gemini-2.5-flash-image";
const REF="assets/brand/van-ref.png";
const STYLE="photorealistic cinematic real-estate photography, natural Pacific-Northwest light, soft overcast morning, realistic skin and materials, true-to-life ordinary working person (not a model), shallow depth of field, premium, no text overlays, no logos baked in";
const BRAND="navy work jacket with small amber chest logo and navy cap; white Ford Transit wrapped confident blue with amber accent stripe, 'Probably Fine Garage Doors' and 'info@probablyfinegaragedoors.ca' on the side, BC plate; SAME van wrap, uniform and brand colours as the reference";
const scenes=[
  ["home-hero","Wide cinematic website hero banner: a friendly average Canadian garage-door technician standing confidently beside the blue-wrapped service van in the driveway of an attractive modern West Coast home with a large OPEN double garage door, subject positioned to the RIGHT third, the LEFT side open with soft driveway and muted greenery so text can overlay, early morning, inviting and trustworthy"],
];
for(const [name,scene] of scenes){
  const prompt=`${scene}. ${STYLE}. ${BRAND}.`;
  const parts=[{text:prompt},{inlineData:{mimeType:"image/png",data:readFileSync(REF).toString("base64")}}];
  const res=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":API_KEY},body:JSON.stringify({contents:[{parts}]})});
  if(!res.ok){console.log("ERR",res.status,(await res.text()).slice(0,200));process.exit(1);}
  const data=await res.json();
  const img=(data?.candidates?.[0]?.content?.parts||[]).find(p=>p.inlineData?.data);
  if(!img){console.log("no image");process.exit(1);}
  const src=`_tmp/src/${name}.png`; writeFileSync(src,Buffer.from(img.inlineData.data,"base64"));
  for(const [file,w,h] of [[`${name}-desktop-1600.webp`,1600,900],[`${name}-desktop-960.webp`,960,540],[`${name}-mobile-960.webp`,960,1200],[`${name}-mobile-480.webp`,480,600]]){
    await sharp(src).resize(w,h,{fit:"cover",position:sharp.strategy.attention}).webp({quality:82}).toFile(`assets/img/${file}`);
  }
  console.log("regenerated",name);
}
