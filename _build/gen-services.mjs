import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";
const API_KEY=process.env.GEMINI_API_KEY, MODEL="gemini-2.5-flash-image";
const STYLE="photorealistic documentary close-up photograph, shot on 35mm, natural Pacific-Northwest daylight from an open garage door, shallow depth of field, realistic worn gloves and materials, true-to-life craftsmanship, crisp focus on the hands and hardware, no text, no logos, no van";
const scenes=[
  ["spring","Extreme close-up of a professional technician's gloved hands using two steel winding bars to replace a broken torsion spring on the shaft above a residential garage door, the broken spring's coil gap clearly visible"],
  ["opener-repair","Close shot of a technician's hands testing a ceiling-mounted residential garage-door opener motor head and its wiring with a screwdriver, LED-lit garage"],
  ["opener-install","A technician on a step ladder mounting a new white belt-drive garage-door opener motor to the ceiling rail of a clean residential garage"],
  ["cable","Macro close-up of a technician's gloved hands seating a new braided-steel lift cable onto the cable drum beside the torsion shaft, frayed old cable set aside"],
  ["off-track","A technician's hands guiding a garage-door roller back into a slightly bent vertical metal track, focused repair, real garage interior"],
  ["roller","Macro close-up of gloved hands pressing a new black nylon roller into the hinge and vertical track of a sectional garage door"],
  ["maintenance","A technician spraying lubricant onto the torsion spring and hinges of a residential garage door during an annual tune-up, clipboard in the other hand"],
];
for(const [name,scene] of scenes){
  const prompt=`${scene}. ${STYLE}.`;
  const res=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":API_KEY},body:JSON.stringify({contents:[{parts:[{text:prompt}]}]})});
  if(!res.ok){console.log("ERR",name,res.status);continue;}
  const data=await res.json();
  const img=(data?.candidates?.[0]?.content?.parts||[]).find(p=>p.inlineData?.data);
  if(!img){console.log("no image",name);continue;}
  const src=`_tmp/src/${name}.png`; writeFileSync(src,Buffer.from(img.inlineData.data,"base64"));
  for(const [file,w,h] of [[`${name}-desktop-1600.webp`,1600,900],[`${name}-desktop-960.webp`,960,540],[`${name}-mobile-960.webp`,960,1200],[`${name}-mobile-480.webp`,480,600]]){
    await sharp(src).resize(w,h,{fit:"cover",position:sharp.strategy.attention}).webp({quality:82}).toFile(`assets/img/${file}`);
  }
  console.log("regenerated",name);
}
