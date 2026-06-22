// content.mjs — unique copy for service + city pages (Probably Fine, deadpan-reassuring voice).
import { I } from "./lib.mjs";

export const SERVICES = [
  {
    slug: "garage-door-spring-repair", img: "spring", icon: I.spring,
    nav: "Spring Repair", money: true,
    seoTitle: "Garage Door Spring Repair Greater Vancouver | Probably Fine",
    metaDesc: "Same-day broken garage door spring repair across Greater Vancouver. Honest flat pricing, free cables on two-spring jobs, free safety inspection.",
    h1: "Garage Door Spring Repair in Greater Vancouver",
    sub: "Snapped torsion spring? Your car's stuck and your morning's ruined. We'll have it fixed today — at a price we tell you before we start.",
    serviceType: "Garage Door Spring Replacement", priceMin: 710, priceMax: 1290,
    answer: `<p><strong>Most broken garage door springs in Metro Vancouver are replaced the same day for $739–$1,274</strong>, depending on whether you need one spring, a matched pair, or longer-life high-cycle springs. Every two-spring job includes <strong>new cables free</strong>, and every spring job includes a <strong>free safety inspection</strong>. You get a written quote before we lift a wrench — no $19.99 bait, no surprise "shaft fee" at the end.</p>`,
    sections: [
      { h2: "How to tell your spring is the problem", html: `<p>A broken torsion spring is the most common garage-door emergency we see — and the easiest to misdiagnose in a panic. Tell-tale signs:</p>
<ul>
<li>You heard a loud <strong>bang</strong> from the garage (the spring snapping) — often overnight or on a cold morning.</li>
<li>The door <strong>won't lift</strong>, or the opener strains, hums, and gives up about 6 inches off the floor.</li>
<li>There's a visible <strong>gap in the coiled spring</strong> on the bar above the door.</li>
<li>Lifting by hand, the door feels like it weighs 200 lbs — because the spring that normally carries the weight is gone.</li>
</ul>
<p>Do not keep hitting the opener button — you'll burn out the motor or strip the gears, turning a spring job into a spring-and-opener job.</p>` },
      { h2: "Why we replace springs in pairs (and why high-cycle costs more)", html: `<p>If you have two springs and one breaks, the other is the same age and right behind it. Replacing only the broken one means a second call-out — and a second bill — usually within months. Replacing the pair costs a little more today and saves you the repeat visit. That's the honest math, and we'll explain it, not push it.</p>
<p><strong>High-cycle springs</strong> are rated for roughly 20,000–30,000 open/close cycles instead of the standard ~10,000. For a busy family door that's the difference between ~7 years and 15+ years. They cost more up front; for some homes they're worth it and for others they aren't. We'll tell you which you are.</p>` },
      { h2: "Coastal rain is hard on springs", html: `<p>Greater Vancouver's damp, salty air corrodes torsion springs and cables faster than the drier Interior. We fit galvanized or coated springs where it makes sense, and we always check the cables and bearings while we're in there — corrosion rarely stops at just the spring.</p>` },
    ],
    faqs: [
      { q: "How much does it cost to fix a broken garage door spring in Vancouver?", a: "A single torsion spring replacement is $739. Two springs with new cables included is $851, and two premium high-cycle springs (cables also free) is $1,274. You'll always get the written quote before we start." },
      { q: "Can you replace my spring today?", a: "Usually, yes. Broken springs are our most common same-day call across Greater Vancouver. Call or text early and we'll give you a real arrival window, not a vague 'sometime today.'" },
      { q: "Is it safe to replace a garage door spring myself?", a: "We don't recommend it. Torsion springs are under extreme tension and have seriously injured DIYers. This is the one job where 'probably fine' isn't good enough — leave the winding bars to someone insured." },
      { q: "Do you charge a diagnostic fee?", a: "There's a $39 diagnostic call, and it's waived the moment you approve the repair — which is almost always. No hidden trip charges." },
      { q: "What brands of spring do you use?", a: "Standard and high-cycle galvanized torsion springs sized to your door's weight and height. We don't keep one bin of 'whatever fits' — the spring is matched to your door so it lasts." },
    ],
  },
  {
    slug: "garage-door-opener-repair", img: "opener-repair", icon: I.cog,
    nav: "Opener Repair",
    seoTitle: "Garage Door Opener Repair Greater Vancouver | Probably Fine",
    metaDesc: "Garage door opener not working? Same-day opener repair across Metro Vancouver from $149 — LiftMaster, Chamberlain, Genie & more. Fixed right or free.",
    h1: "Garage Door Opener Repair Across Greater Vancouver",
    sub: "Opener humming, clicking, or stone dead? Most are back in service the same day — and we'll tell you honestly when a repair beats a replacement.",
    serviceType: "Garage Door Opener Repair", priceFrom: 149,
    answer: `<p><strong>Most garage door opener repairs in Greater Vancouver are done the same day, from $149.</strong> The usual culprits are misaligned safety sensors, a worn drive gear, a dead logic board, or a remote/keypad that's lost its programming — most of which are far cheaper to fix than to replace. We diagnose it, quote it in writing, and only suggest a new opener when the repair genuinely doesn't make sense.</p>`,
    sections: [
      { h2: "What's actually wrong with your opener", html: `<p>"The opener's broken" covers a dozen different faults. The common ones, cheapest first:</p>
<ul>
<li><strong>Door reverses before closing</strong> — almost always the photo-eye safety sensors are out of alignment or dirty. A 15-minute fix.</li>
<li><strong>Motor runs but the door doesn't move</strong> — a stripped nylon drive gear or a slipped chain/belt.</li>
<li><strong>Remotes dead, wall button works</strong> — battery or reprogramming, occasionally the antenna.</li>
<li><strong>Nothing at all</strong> — power, a tripped GFCI, or a failed logic board.</li>
</ul>
<p>We carry the common gears, boards, sensors, and remotes for LiftMaster, Chamberlain, Genie, Marantec and Craftsman, so most repairs are one visit.</p>` },
      { h2: "When we'll tell you to replace instead", html: `<p>If your opener is 15+ years old, lacks photo-eye safety sensors (pre-1993), or the board <em>and</em> gears are both shot, a new unit is the smarter spend. We'll say so plainly — we're genuinely bad at upselling. If a new opener is the move, see our <a href="/garage-door-opener-installation.html">opener installation</a> options.</p>` },
    ],
    faqs: [
      { q: "Why does my garage door open then close again right away?", a: "Nine times out of ten it's the photo-eye safety sensors near the floor — they're misaligned, dirty, or sun-blinded. It's one of the quickest and cheapest fixes we do." },
      { q: "Do you repair LiftMaster and Chamberlain openers?", a: "Yes — LiftMaster, Chamberlain, Genie, Marantec, Craftsman and most others. We stock the common gears, boards and remotes for same-day repairs across Metro Vancouver." },
      { q: "How much is opener repair?", a: "From $149 depending on the part. Sensor realignment is at the low end; a logic board is higher. You get the written quote before we start." },
      { q: "My remote stopped working — is the opener dead?", a: "Usually not. Start with a fresh battery; if that fails it's typically a quick reprogramming or a new remote. We can sort it on the spot." },
    ],
  },
  {
    slug: "garage-door-opener-installation", img: "opener-install", icon: I.cog, openers: true,
    nav: "Opener Installation",
    seoTitle: "Garage Door Opener Installation Greater Vancouver | Probably Fine",
    metaDesc: "New garage door opener supply & install across Greater Vancouver from $1,311. LiftMaster belt, chain & wall-mount with myQ smart control. Full warranty.",
    h1: "New Garage Door Opener Installation",
    sub: "Quiet belt-drive, rock-solid chain, or a wall-mount that frees your ceiling — installed clean, programmed to your phone, and rated for the way you actually use the door.",
    serviceType: "Garage Door Opener Installation", priceFrom: 1311,
    answer: `<p><strong>A new LiftMaster opener supplied and professionally installed in Greater Vancouver typically runs from $1,311, including haul-away of the old unit.</strong> We fit belt-drive (quietest — ideal under a bedroom), chain-drive (toughest value), and wall-mount jackshaft openers, all with myQ smart-phone control and battery backup options so the door still works in a Lower Mainland power outage.</p>`,
    sections: [
      { h2: "Pick the drive that fits your home", html: `<p><strong>Belt-drive</strong> is near-silent — the right call when there's a bedroom or suite over the garage (common in newer Surrey and Richmond builds). <strong>Chain-drive</strong> is the dependable value pick for detached garages where noise doesn't matter. <strong>Wall-mount (jackshaft)</strong> bolts beside the door and clears the ceiling entirely — perfect for low-headroom laneway garages and car lifts. Battery backup keeps you moving when the power's out, which on the coast happens every winter.</p>` },
    ],
    faqs: [
      { q: "How much does it cost to install a new garage door opener?", a: "From $1,311 supplied and installed, including programming and removal of your old opener. Belt-drive and wall-mount units sit higher than basic chain-drive." },
      { q: "Which opener is quietest?", a: "A belt-drive opener. If you have living space above or beside the garage, it's worth the small premium — you'll stop hearing the door from the bedroom." },
      { q: "Will a smart opener work with my phone?", a: "Yes. The LiftMaster units we install include myQ, so you can open, close, and check the door from your phone, and get an alert if you left it open." },
      { q: "What happens in a power outage?", a: "We offer models with battery backup, so the door keeps opening through the winter outages we all get on the coast. Otherwise there's always the manual release." },
    ],
  },
  {
    slug: "garage-door-cable-repair", img: "cable", icon: I.cable,
    nav: "Cable Repair",
    seoTitle: "Garage Door Cable Repair Greater Vancouver | Probably Fine",
    metaDesc: "Frayed or snapped garage door cable? Same-day cable repair across Metro Vancouver from $159. Cables free with any two-spring job. Licensed, insured, WorkSafeBC.",
    h1: "Garage Door Cable Repair & Replacement",
    sub: "Cable snapped off the drum or hanging frayed? It's a fast fix when it's caught early — and it's free when it comes with a two-spring job.",
    serviceType: "Garage Door Cable Repair", priceFrom: 159,
    answer: `<p><strong>Garage door cable repair in Greater Vancouver starts at $159 and is usually done the same day.</strong> A frayed or snapped lift cable makes the door hang crooked, jam, or drop on one side. We replace cables in matched pairs, reset them on the drums, and re-balance the door. If you're already replacing two springs, <strong>the cables are free.</strong></p>`,
    sections: [
      { h2: "Why cables fray in the first place", html: `<p>Lift cables are thin braided steel under constant load. On the wet coast they rust from the inside; in older East Van and New West garages they wear where they rub a misaligned drum or a rough pulley. A few broken strands ("fish-hooks") mean it's days from snapping — catch it then and it's a simple swap, not a door-off-track rescue.</p>
<p>If a cable has already let go, the door is now unbalanced and the springs are doing uneven work. Don't run it — call us and leave it down until we re-tension both sides.</p>` },
    ],
    faqs: [
      { q: "How much is garage door cable repair?", a: "From $159 for a matched pair, same-day in most of Metro Vancouver. If you're replacing two springs at the same time, the cables are included free." },
      { q: "Can I use the door with a broken cable?", a: "Please don't. One broken cable unbalances the whole door and overloads the springs and opener. Leave it closed and call — it's a quick fix when it's not forced." },
      { q: "Why do both cables need replacing?", a: "They're the same age and tension. Swapping only the snapped one leaves a worn cable on the other side that fails soon after — pairing them is cheaper than two trips." },
    ],
  },
  {
    slug: "garage-door-off-track-repair", img: "off-track", icon: I.track,
    nav: "Off-Track Repair",
    seoTitle: "Garage Door Off-Track Repair Greater Vancouver | Probably Fine",
    metaDesc: "Garage door off its track or jammed? Same-day off-track repair across Metro Vancouver from $169. Don't force it — we reset rollers, track & balance.",
    h1: "Off-Track Garage Door Repair",
    sub: "Door hanging at an angle, wedged, or popped out of the rails? Stop pressing the button — we'll get it back on track today before it bends a panel.",
    serviceType: "Garage Door Off-Track Repair", priceFrom: 169,
    answer: `<p><strong>Off-track garage door repair in Greater Vancouver starts at $169, same day.</strong> Doors jump the track after a bump from the car, a broken cable, or worn rollers. We reset the rollers into the rails, straighten or replace bent track, check the cables and springs that often caused it, and re-balance the door so it doesn't happen again.</p>`,
    sections: [
      { h2: "First thing: stop using the opener", html: `<p>The single most expensive mistake is hitting the remote again to "force it back." That bends panels and snaps rollers — turning a $169 fix into a new-door quote. Pull the manual release cord, leave the door where it is, and call us. We'll do the wrestling.</p>` },
      { h2: "Why it went off-track (so it stays on)", html: `<p>A door rarely jumps the track for no reason. Usual causes: a <a href="/garage-door-cable-repair.html">snapped cable</a> that let one side drop, <a href="/garage-door-roller-repair.html">worn rollers</a> that wobbled out, a loosened track bracket, or a love-tap from a bumper. We fix the symptom <em>and</em> the cause — otherwise you'll see us again next month, which we'd both rather avoid.</p>` },
    ],
    faqs: [
      { q: "My garage door is off its track — what do I do right now?", a: "Don't touch the opener. Pull the red manual-release cord so the door can't be driven, leave it in place, and call us. Forcing it is what bends panels." },
      { q: "How much does off-track repair cost?", a: "From $169, same-day in most of Greater Vancouver. If a cable, roller, or bent track section caused it, we'll quote those in writing before we proceed." },
      { q: "Can a door come off-track on its own?", a: "Yes — a broken cable, worn rollers, or a loose bracket will do it without any bump from the car. That's why we check the whole system, not just lift it back in." },
    ],
  },
  {
    slug: "garage-door-roller-repair", img: "roller", icon: I.track,
    nav: "Roller Repair",
    seoTitle: "Garage Door Roller Replacement Greater Vancouver | Probably Fine",
    metaDesc: "Noisy, grinding, or wobbly garage door? Quiet nylon roller replacement across Metro Vancouver from $129, fitted same-day. Licensed & insured.",
    h1: "Garage Door Roller Replacement",
    sub: "If your door sounds like a freight train and shudders on the way up, the rollers are usually done. Quiet nylon ones are a small fix with a big payoff.",
    serviceType: "Garage Door Roller Replacement", priceFrom: 129,
    answer: `<p><strong>Garage door roller replacement in Greater Vancouver starts at $129 and is a same-day job.</strong> Worn or seized rollers make the door grind, jerk, and eventually jump the track. We swap them for quiet sealed nylon rollers, lubricate the system, and check the track alignment — your door goes from "wakes the neighbours" to barely audible.</p>`,
    sections: [
      { h2: "Cheap insurance against an off-track door", html: `<p>Rollers are the small wheels that run your door up the rails. Old steel ones rust and flat-spot in our damp climate; cracked nylon ones bind. Worn rollers are the leading cause of <a href="/garage-door-off-track-repair.html">off-track doors</a>, so replacing them is genuinely cheap insurance against a much bigger bill. We fit 10–13 sealed nylon rollers per door and the difference in noise is immediate.</p>` },
    ],
    faqs: [
      { q: "Why is my garage door so loud and shaky?", a: "Worn rollers and dry hinges are the usual cause. Sealed nylon rollers plus proper lubrication make most doors dramatically quieter — a noticeable change for living space above the garage." },
      { q: "How much to replace garage door rollers?", a: "From $129 for a full set of quiet nylon rollers, fitted and lubricated the same day across Metro Vancouver." },
      { q: "How long do garage door rollers last?", a: "Cheap steel rollers can wear out in 5–7 years on the coast; quality sealed nylon rollers often last the life of the door. We fit the nylon ones." },
    ],
  },
  {
    slug: "new-garage-door-installation", img: "new-door", icon: I.door,
    nav: "New Garage Doors",
    seoTitle: "New Garage Door Installation Greater Vancouver | Probably Fine",
    metaDesc: "New garage door supply & installation across Greater Vancouver from $3,647. Insulated steel, modern aluminium-glass & carriage styles. Free measure & written quote.",
    h1: "New Garage Door Installation",
    sub: "Replacing a tired, dented, or draughty door? We measure, quote in writing, and install insulated steel, modern glass, or carriage-style doors that suit the house — and the rain.",
    serviceType: "New Garage Door Installation", priceFrom: 3647,
    answer: `<p><strong>A new garage door supplied and installed in Greater Vancouver typically starts around $3,647 and ranges higher for insulated, glass, or custom carriage styles.</strong> We do a free on-site measure, give you a fixed written quote, remove and recycle the old door, and install a properly insulated, weather-sealed door built for coastal wet and wind. No vague "starting from" that triples on install day.</p>`,
    sections: [
      { h2: "Doors that suit Vancouver houses — and Vancouver weather", html: `<p><strong>Insulated steel</strong> is the workhorse: warm, quiet, low-maintenance, and the best value for an attached garage you're heating. <strong>Modern aluminium-and-glass</strong> sectional doors look right on the contemporary builds going up across the West Side and Surrey. <strong>Carriage-style</strong> doors flatter the character and craftsman homes of East Van, New West, and the North Shore. Every door we fit is weather-sealed against driving rain and chosen for our salt-air climate.</p>` },
      { h2: "What a fair quote includes", html: `<p>Our written quote covers the door, tracks, springs sized to the new weight, weather seals, removal and recycling of the old door, and the labour. If you want an opener fitted at the same time, see <a href="/garage-door-opener-installation.html">opener installation</a> — bundling saves a second trip.</p>` },
    ],
    faqs: [
      { q: "How much does a new garage door cost installed in Vancouver?", a: "From about $3,647 for a standard insulated single door installed, more for double doors, glass, or carriage styles. You get a fixed written quote after a free measure — no install-day surprises." },
      { q: "Do you remove my old door?", a: "Yes — removal and recycling of the old door and hardware is included in the quote. You come home to a clean garage and a working door." },
      { q: "Should I insulate my garage door?", a: "On the coast, usually yes — an insulated door is warmer, much quieter, and stands up better to our damp. It's especially worth it for attached or heated garages." },
      { q: "How long does installation take?", a: "Most single-door replacements are a half-day; doubles and custom doors a little longer. We'll give you a real time window when we quote." },
    ],
  },
  {
    slug: "garage-door-maintenance", img: "maintenance", icon: I.wrench,
    nav: "Maintenance & Tune-Up",
    seoTitle: "Garage Door Tune-Up Greater Vancouver | Probably Fine",
    metaDesc: "Annual garage door tune-up across Metro Vancouver from $109. We balance, lubricate, tighten & safety-check 25 points to prevent the breakdowns. Book before winter.",
    h1: "Garage Door Maintenance & Tune-Up",
    sub: "Most breakdowns are preventable. A yearly tune-up catches the frayed cable and tired spring before they strand your car — and keeps the door quiet.",
    serviceType: "Garage Door Maintenance & Tune-Up", priceFrom: 109,
    answer: `<p><strong>An annual garage door tune-up in Greater Vancouver is $109 and pays for itself by preventing the $400 emergency.</strong> We run a 25-point service — balance the door, lubricate springs, rollers and hinges, tighten hardware, test the opener's safety reverse and sensors, and flag any worn cable or spring before it strands you. Best booked in autumn, before the first cold snap spikes spring failures.</p>`,
    sections: [
      { h2: "What's in the 25-point tune-up", html: `<ul>
<li>Spring tension and balance test (door should hold halfway on its own)</li>
<li>Lubricate torsion springs, rollers, hinges and bearings with proper non-gumming lube</li>
<li>Inspect cables and drums for fraying and rust</li>
<li>Tighten track brackets, hinges and fasteners loosened by vibration</li>
<li>Test the opener's auto-reverse safety and photo-eye sensors (a code requirement, and a real safety one)</li>
<li>Check and adjust travel limits and force settings</li>
<li>Replace worn weather seals on request</li>
</ul>` },
      { h2: "Why coastal doors need it more", html: `<p>Salt air and constant damp rust springs and cables faster here than almost anywhere in Canada, and Tri-Cities cold snaps make brittle metal snap. A yearly service is the cheapest way to dodge the 7am "the car's trapped" call. Landlords and stratas: ask about multi-door rates.</p>` },
    ],
    faqs: [
      { q: "How often should a garage door be serviced?", a: "Once a year for a typical family door, more if it's a busy door or a commercial one. On the wet coast, an annual tune-up is the single best way to prevent breakdowns." },
      { q: "What does a tune-up cost?", a: "$109 for a single door, including the full 25-point service and safety test. Ask about multi-door pricing for stratas and rental properties." },
      { q: "Will a tune-up make my door quieter?", a: "Almost always. Lubrication, tightened hardware and a balance adjustment fix most of the rattles and groans — and we'll flag worn rollers if those are the real cause." },
    ],
  },
  {
    slug: "emergency-garage-door-repair", img: "emergency", icon: I.alert,
    nav: "Emergency Repair",
    seoTitle: "Emergency Garage Door Repair Greater Vancouver | Probably Fine",
    metaDesc: "Garage door stuck open or car trapped? Fast emergency garage door repair across Metro Vancouver — we answer fast, quote honestly, and secure your home today.",
    h1: "Emergency Garage Door Repair",
    sub: "Car trapped inside? Door stuck open and your house exposed? We answer fast, give you a straight price, and get you secure — today.",
    serviceType: "Emergency Garage Door Repair", priceFrom: 189,
    answer: `<p><strong>For an urgent garage door problem in Greater Vancouver — a snapped spring trapping your car, or a door stuck open leaving the house exposed — call ${"778-800-0769"} and we'll get to you fast.</strong> We prioritise safety-and-security emergencies, answer the phone (a real human), and give you an honest price on the spot. No invented after-hours "panic surcharge."</p>`,
    sections: [
      { h2: "What counts as an emergency", html: `<p>Two situations we treat as urgent: <strong>the door won't open</strong> (a broken spring or cable trapping your only car before work or school), and <strong>the door won't close</strong> (off-track or opener failure leaving your home and contents exposed overnight). Both we'll move on the same day wherever we can across Metro Vancouver.</p>` },
      { h2: "What to do while you wait", html: `<p>If the door is stuck <em>open</em>, don't leave the house unsecured — we'll talk you through a temporary lock-down on the phone. If it's stuck <em>closed</em> with a broken spring, do not yank the manual release with the door up; let us handle a door whose counterbalance is gone. Two minutes of advice on the phone beats a bent panel.</p>` },
    ],
    faqs: [
      { q: "Do you charge extra for emergency call-outs?", a: "We quote the job honestly and don't invent a fake 'panic surcharge.' You'll know the price before we start. Genuine after-hours work may carry a modest, stated fee — never a surprise one." },
      { q: "My car is trapped by a broken spring — can you come now?", a: "That's exactly the call we prioritise. Phone 778-800-0769, tell us where you are in Greater Vancouver, and we'll give you a real arrival window — most same-day." },
      { q: "The door won't close and my house is exposed — what now?", a: "Call us right away. We'll help you secure it temporarily on the phone and get out to re-track or repair it the same day wherever we can." },
    ],
  },
];

// ---------- CITIES ----------
export const CITIES = [
  {
    slug: "vancouver", img: "city-vancouver", name: "Vancouver",
    seoTitle: "Garage Door Repair Vancouver, BC | Probably Fine Garage Doors",
    metaDesc: "Same-day garage door repair in Vancouver, BC — springs, openers, cables & off-track. From heritage East Van to West Side moderns. Honest pricing, licensed & insured.",
    h1: "Garage Door Repair in Vancouver",
    sub: "From Commercial Drive character homes to West Side moderns and laneway garages — fast, honestly-priced garage door repair across the City of Vancouver.",
    answer: `<p><strong>Probably Fine provides same-day garage door repair across Vancouver, BC</strong> — broken springs, opener faults, frayed cables, off-track doors and new installs, from the East Side to Point Grey. We know the city's mix of century-old character homes and new laneway garages, and the salt-and-rain climate that wears them both. Upfront written pricing, licensed (business licence), insured and WorkSafeBC-covered.</p>`,
    local: `<p>Vancouver's housing is a study in extremes, and so are its garage doors. The heritage homes of <strong>Grandview-Woodland, Kitsilano and Mount Pleasant</strong> often have older single doors and original wood track that warps in the damp. The <strong>laneway houses</strong> popping up across the East Side need compact wall-mount openers because there's no ceiling room. And the contemporary builds on the <strong>West Side and Cambie corridor</strong> lean toward big insulated double doors and quiet belt-drive openers under living space.</p>
<p>The common thread is weather. Vancouver's wet, salty air is brutal on torsion springs and lift cables — we see more corrosion-driven failures here than anywhere drier. We fit galvanized springs and sealed nylon rollers as standard, because the coast eats the cheap stuff.</p>`,
    neighbourhoods: ["Downtown & West End", "Kitsilano & Point Grey", "Mount Pleasant & Main St", "Commercial Drive / Grandview", "Hastings-Sunrise", "Kerrisdale & Dunbar", "Marpole & Cambie", "Renfrew-Collingwood"],
    faqs: [
      { q: "How fast can you reach my Vancouver neighbourhood?", a: "We cover the whole City of Vancouver, East Side to West Side, and most broken-spring calls are same-day. Call or text early for a real arrival window." },
      { q: "Do you work on older East Vancouver character homes?", a: "Constantly. Older single doors, original wood track and tight heritage garages are our daily work — we'll modernise the hardware without changing the look you want." },
      { q: "Can you fit an opener in a laneway-house garage?", a: "Yes — wall-mount jackshaft openers are made for low-headroom laneway garages. They clear the ceiling entirely and run quietly under living space." },
    ],
    testimonial: { q: "Spring went at 6am with the car stuck inside. They picked up, gave me a flat price, and had it fixed before lunch. The name's a joke; the work wasn't.", who: "Daniel R.", where: "Hastings-Sunrise, Vancouver", photo: "rev-daniel" },
  },
  {
    slug: "burnaby", img: "city-burnaby", name: "Burnaby",
    seoTitle: "Garage Door Repair Burnaby, BC | Probably Fine Garage Doors",
    metaDesc: "Same-day garage door repair in Burnaby — springs, openers, cables, off-track & new doors. Metrotown to Burnaby Mountain. Honest flat pricing, licensed & insured.",
    h1: "Garage Door Repair in Burnaby",
    sub: "From the post-war homes of Burnaby Heights to hillside houses near SFU and townhomes around Metrotown — quick, fair garage door repair across Burnaby.",
    answer: `<p><strong>Probably Fine handles same-day garage door repair throughout Burnaby, BC</strong> — broken springs, opener repairs, cables, off-track doors and new door installs from Brentwood to Edmonds. Burnaby's mix of mid-century houses, sloped lots and dense newer townhomes each bring their own door quirks, and we know all of them. Honest written quotes, licensed (business licence), insured and WorkSafeBC-covered.</p>`,
    local: `<p>Burnaby spans a lot of eras in a small space. The <strong>mid-century homes of Burnaby Heights and the Heights</strong> often run original single doors and older chain openers due for replacement. Up around <strong>Burnaby Mountain and SFU</strong>, hillside garages and exposure to weather mean more roller and cable wear. And the townhome density around <strong>Metrotown, Brentwood and Lougheed</strong> means a lot of attached garages under bedrooms — where a quiet belt-drive opener earns its keep.</p>
<p>Those steep Burnaby driveways are hard on doors, too: a door that's even slightly out of balance shows it fast on a slope. We re-balance properly rather than just cranking spring tension, so the opener isn't fighting the door every cycle.</p>`,
    neighbourhoods: ["Brentwood & Willingdon Heights", "Metrotown & Maywood", "Burnaby Heights", "Lougheed & Government Rd", "Edmonds & Highgate", "Capitol Hill", "Deer Lake", "SFU / Burnaby Mountain"],
    faqs: [
      { q: "Do you service all of Burnaby?", a: "Yes — North and South Burnaby, Brentwood, Metrotown, Lougheed, Edmonds and the Heights. Most broken-spring and off-track calls are handled same-day." },
      { q: "My townhouse garage is under a bedroom — what's the quietest fix?", a: "A belt-drive opener plus sealed nylon rollers. It's the standard upgrade we recommend for Burnaby's attached garages under living space — you'll stop hearing the door upstairs." },
      { q: "My door struggles on a steep Burnaby driveway — why?", a: "A slope exposes any imbalance. The fix is proper re-balancing of the springs, not just more tension. We set it so the opener isn't straining every cycle." },
    ],
    testimonial: { q: "Booked a tune-up for two doors at our Brentwood place. They found a fraying cable I'd never have spotted and swapped it on the spot for a fair price. No drama.", who: "Priya S.", where: "Brentwood, Burnaby", photo: "rev-priya" },
  },
  {
    slug: "surrey", img: "city-surrey", name: "Surrey",
    seoTitle: "Garage Door Repair Surrey, BC | Probably Fine Garage Doors",
    metaDesc: "Same-day garage door repair in Surrey — springs, openers, double doors & installs, Cloverdale to South Surrey. Honest flat pricing, licensed & insured.",
    h1: "Garage Door Repair in Surrey",
    sub: "Newer family homes with big double doors, acreage in Cloverdale, and everything between Guildford and South Surrey — fast, fairly-priced garage door service.",
    answer: `<p><strong>Probably Fine provides same-day garage door repair across Surrey, BC</strong> — spring replacement, opener repair and installation, cables, off-track doors and new doors, from Whalley and Guildford to Cloverdale, Newton and South Surrey. Surrey's many newer homes run large double doors and heavier openers, and we carry the right parts for them. Upfront written pricing; licensed (business licence), insured, WorkSafeBC-covered.</p>`,
    local: `<p>Surrey is the Lower Mainland's fastest-growing city, and most of its garages reflect that — <strong>newer subdivisions in Morgan Creek, Grandview Heights and Clayton</strong> with wide insulated double doors, smart openers and living space above. Those big doubles are heavier, so when a spring goes the door is genuinely immovable; we size replacement springs to the actual door weight rather than guessing.</p>
<p>Out in <strong>Cloverdale and the acreages toward Campbell Heights</strong>, we see larger and detached shop doors that take a beating from rural use. And the older stock around <strong>Whalley and Newton</strong> often needs the full refresh — springs, rollers and cables together. Wherever you are in Surrey, you get the same flat, written price.</p>`,
    neighbourhoods: ["Guildford & Fleetwood", "Newton", "Cloverdale", "South Surrey & Morgan Creek", "Grandview Heights", "Clayton Heights", "Whalley / City Centre", "Panorama Ridge"],
    faqs: [
      { q: "Do you cover all of Surrey?", a: "Yes — Guildford, Fleetwood, Newton, Cloverdale, Whalley, Clayton and South Surrey. Most spring and off-track emergencies are same-day, including the newer subdivisions." },
      { q: "My double garage door won't budge — is that the spring?", a: "Almost certainly. A big Surrey double door is too heavy to lift once the spring snaps. Don't force the opener — we'll fit correctly-sized springs the same day." },
      { q: "Do you repair larger shop or acreage doors in Cloverdale?", a: "Yes. We handle oversized and detached shop doors common on Cloverdale and Campbell Heights properties, with springs and rollers rated for the heavier duty." },
    ],
    testimonial: { q: "Our double door dropped a spring the night before a road trip. They came out to Morgan Creek first thing, replaced both springs, free cables, exact price they quoted. Lifesavers.", who: "Marcus & Lena T.", where: "South Surrey", photo: "rev-marcus" },
  },
  {
    slug: "richmond", img: "city-richmond", name: "Richmond",
    seoTitle: "Garage Door Repair Richmond, BC | Probably Fine Garage Doors",
    metaDesc: "Same-day garage door repair in Richmond — springs, openers, cables & new doors, Steveston to Brighouse. Salt-air corrosion specialists. Licensed & insured.",
    h1: "Garage Door Repair in Richmond",
    sub: "Island living means salt air — and salt air is hard on springs and cables. We know Richmond's doors, from Steveston cottages to Terra Nova moderns.",
    answer: `<p><strong>Probably Fine offers same-day garage door repair throughout Richmond, BC</strong> — broken springs, opener faults, corroded cables, off-track doors and new installs, from Steveston and Terra Nova to Brighouse and Hamilton. Richmond sits at sea level on the Fraser delta, so salt air and humidity corrode garage hardware faster here than almost anywhere — and that's exactly what we're equipped for. Honest written quotes; licensed (business licence), insured, WorkSafeBC-covered.</p>`,
    local: `<p>Richmond's flat, low-lying geography on the delta means two things for garage doors: <strong>moisture and salt</strong>. Cables rust from the inside and springs corrode and snap years earlier than they would inland. In <strong>Steveston</strong>, that coastal exposure is at its worst — we default to galvanized springs and sealed rollers on every job near the water.</p>
<p>The housing varies from older cottages and ranchers around <strong>Steveston and Sea Island</strong> to the newer executive homes of <strong>Terra Nova, Westwind and Riverdale</strong> with big insulated doubles. Whatever the door, the corrosion question is the same one — and it's the one we check first.</p>`,
    neighbourhoods: ["Steveston", "Terra Nova", "Brighouse & City Centre", "Riverdale & Westwind", "Seafair", "Broadmoor", "Hamilton", "Sea Island"],
    faqs: [
      { q: "Why do garage door springs fail faster in Richmond?", a: "Salt air and delta humidity. Richmond hardware corrodes years faster than inland — which is why we fit galvanized springs and sealed nylon rollers as standard near the coast." },
      { q: "Do you serve Steveston and Terra Nova?", a: "Yes — all of Richmond including Steveston, Terra Nova, Brighouse, Seafair and Hamilton. Coastal corrosion jobs are our bread and butter here." },
      { q: "My cables look rusty — should I worry?", a: "Yes, especially near the water. Rusted cables fray and snap with little warning. A quick replacement now (from $159) beats an off-track door later." },
    ],
    testimonial: { q: "Both cables had rusted through near the water in Steveston. They replaced them and the springs, explained the salt-air thing honestly, and didn't try to sell me a whole new door. Refreshing.", who: "Grace L.", where: "Steveston, Richmond", photo: "rev-grace" },
  },
  {
    slug: "coquitlam", img: "city-coquitlam", name: "Coquitlam",
    seoTitle: "Garage Door Repair Coquitlam, BC | Probably Fine Garage Doors",
    metaDesc: "Same-day garage door repair in Coquitlam & the Tri-Cities — springs, openers, cables & new doors. Burke Mountain to Maillardville. Cold-snap specialists.",
    h1: "Garage Door Repair in Coquitlam",
    sub: "Tri-Cities cold snaps are when springs snap. From Burke Mountain new-builds to Maillardville character homes — fast, fair garage door repair across Coquitlam.",
    answer: `<p><strong>Probably Fine provides same-day garage door repair across Coquitlam and the Tri-Cities, BC</strong> — spring replacement, opener repair and installation, cables, off-track doors and new doors, from Burke Mountain and Westwood Plateau to Maillardville and Austin Heights. Coquitlam's colder, higher-elevation winters trigger more broken springs than the lowland cities — we're geared for the cold-snap rush. Upfront written pricing; licensed (business licence), insured, WorkSafeBC-covered.</p>`,
    local: `<p>Coquitlam climbs from the Fraser up to the forested slopes of <strong>Burke Mountain and Westwood Plateau</strong>, and elevation means colder snaps. When the temperature drops, brittle metal gives — broken-spring calls spike across the Tri-Cities every cold week of winter. The newer hillside subdivisions run big insulated doubles and smart openers; we keep correctly-sized springs in stock so a Burke Mountain double doesn't wait days for parts.</p>
<p>Down in <strong>Maillardville, Austin Heights and around Como Lake</strong>, the older character and post-war homes often need the full hardware refresh. And the tree cover up the slopes means more debris and moisture in the tracks — so rollers and lubrication matter more here than most places.</p>`,
    neighbourhoods: ["Burke Mountain", "Westwood Plateau", "Maillardville", "Austin Heights", "Como Lake", "Eagle Ridge", "Coquitlam Centre", "River Springs"],
    faqs: [
      { q: "Why do garage door springs break in cold weather?", a: "Cold makes the steel brittle, and the spring is already near the end of its cycle life — a Tri-Cities cold snap is often the final straw. We see spring calls spike every cold week in Coquitlam." },
      { q: "Do you serve Burke Mountain and Westwood Plateau?", a: "Yes — all of Coquitlam including Burke Mountain, Westwood Plateau, Maillardville, Austin Heights and Coquitlam Centre. We stock springs sized for the big hillside double doors." },
      { q: "My door is sluggish in winter — what helps?", a: "Proper cold-weather lubrication, fresh rollers, and a balance check. A pre-winter tune-up (from $109) is the cheapest way to avoid the cold-snap breakdown." },
    ],
    testimonial: { q: "First hard frost on Burke Mountain and the spring let go. They had the right size on the truck and sorted it same day. Straight pricing, genuinely nice guys.", who: "Kevin M.", where: "Burke Mountain, Coquitlam", photo: "rev-kevin" },
  },
];
