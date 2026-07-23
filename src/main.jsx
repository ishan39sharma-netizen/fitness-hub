console.log("ISHAN TEST 123");
import React,{useEffect,useState}from'react';import{createRoot}from'react-dom/client';import{AnimatePresence,motion}from'framer-motion';import{ArrowRight,BadgeCheck,ChevronDown,ChevronUp,Dumbbell,Flame,HeartPulse,Instagram,Mail,MapPin,Menu,Phone,Play,Plus,Star,Target,Users, X,Zap}from'lucide-react';import'./styles.css';
const photo = (id) => `/images/${id}.png`;
const icon={Dumbbell,Flame,HeartPulse,Target,Users,Zap};
const services=[['Weight Training','Dumbbell','Build a stronger foundation with expert-led lifting.'],['Fat Loss','Flame','Smart training plans for sustainable results.'],['Muscle Building','Zap','Progressive programs for strength and size.'],['Cardio Training','HeartPulse','Improve endurance in a high-energy cardio zone.'],['Functional Training','Target','Move better, perform better, feel unstoppable.'],['CrossFit','Zap','Intense scalable workouts with team spirit.'],['Yoga & Mobility','HeartPulse','Restore balance, flexibility and focus.'],['Personal Training','Users','One-to-one coaching around your goals.']];
const gallery = [
  ['Gym 1', 'Strength Training Area'],
  ['Gym 2', 'Workout Area'],
  ['Gym3', 'Cardio & Strength Zone']
];
function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="section gallery">

      <Title
        tag="OUR GYM"
        title={<>Take a Look <em>Inside</em></>}
        copy="Explore our premium fitness environment."
      />

      <div className="gallery-grid">
        {gallery.map(([img, title], index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelected(index)}
          >
            <img src={photo(img)} alt={title} />
            <div className="overlay">
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="lightbox">

          <button
            className="close"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          <button
            className="prev"
            onClick={() =>
              setSelected(
                selected === 0
                  ? gallery.length - 1
                  : selected - 1
              )
            }
          >
            ❮
          </button>

          <img
            src={photo(gallery[selected][0])}
            alt=""
          />

          <button
            className="next"
            onClick={() =>
              setSelected(
                selected === gallery.length - 1
                  ? 0
                  : selected + 1
              )
            }
          >
            ❯
          </button>

        </div>
      )}

    </section>
  );
}
function Btn({children,alt=false,href='#membership'}){return <a href={href} className={'btn '+(alt?'alt':'')}>{children}<ArrowRight size={16}/></a>};function Title({tag,title,copy}){return <div className="title"><small>{tag}</small><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>};function Reveal({children}){return <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>{children}</motion.div>}
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "Home",
    "About",
    "Services",
    "Membership",
    "Trainers",
    "Gallery",
    "Testimonials",
    "Contact",
  ];

  return (
    <header className={scrolled ? "glass-header scrolled" : "glass-header"}>
      <a href="#home" className="logo">
  FITNESS <i>HUB</i>
</a>
         
      <nav className={open ? "open" : ""}>
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>

      <a href="#membership" className="join">
        Join Now
      </a>

      <button
        className="hamb"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">

  <div className="hero-light"></div>

  {/* Animated Background */}
  <div className="hero-gradient"></div>
  <div className="grid-overlay"></div>

  {/* Floating Orbs */}
  <div className="orb orb1"></div>
  <div className="orb orb2"></div>
  <div className="orb orb3"></div>

      {/* Animated Background */}
      <div className="hero-gradient"></div>
      <div className="grid-overlay"></div>

      {/* Floating Orbs */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      {/* Hero Content */}
      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="hero-tag">
            PREMIUM FITNESS EXPERIENCE
          </span>

          <h1>
  TRANSFORM
  <br />
  <span>YOUR BODY</span>
  <br />
  TODAY
</h1>

          <p>
            Build strength. Burn fat. Become the strongest
            version of yourself with world-class coaches,
            premium equipment and a motivating atmosphere.
          </p>

          <div className="hero-buttons">

            <a href="#plans" className="btn">
              Join Now
              <ArrowRight size={18} />
            </a>

            <a href="#about" className="btn-outline">
              <Play size={18} />
              Explore
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h2>1000+</h2>
              <span>Members</span>
            </div>

            <div>
              <h2>2+</h2>
              <span>Trainers</span>
            </div>

            <div>
              <h2>24/7</h2>
              <span>Support</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

         <div className="hero-image">
  <img
    src="/images/Gym 4.png"
    alt="Fitness Hub Gym"
  />
</div>

        </motion.div>

      </div>

      <motion.div
        className="scroll-down"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <ChevronDown />
      </motion.div>

    </section>
  );
}
function About() {

  let f = [
    'State-of-the-art equipment',
    'Certified trainers',
    'Personal training',
    'Nutrition guidance',
    'Motivating community',
    'Always clean & hygienic'
  ];

  return (

    <section id="about" className="section about">

      <div className="about-img">

        <img
          src="/images/Gym 5.png"
          alt="Fitness Hub Logo"
        />

        <div>
          <b>5</b> Years of Excellence
        </div>

      </div>

      <div>

        <Title
          tag="WELCOME TO FITNESS HUB"
          title={
            <>
              Your strongest self
              <br />
              starts <em>here.</em>
            </>
          }
          copy="Fitness Hub is a high-performance home for people ready to show up, stay consistent, and make their potential real."
        />

        <div className="features">
          {f.map((x) => (
            <span key={x}>
              <BadgeCheck /> {x}
            </span>
          ))}
        </div>

        <Btn href="#services">
          Discover our approach
        </Btn>

      </div>

    </section>

  );
}
function Grid(){return <><section className="section why"><Title tag="THE FITNESS HUB DIFFERENCE" title={<>Built for the way you <em>move.</em></>} copy="Every detail is designed to keep your momentum moving forward."/><div className="why-grid">{[['Latest Equipment','Dumbbell'],['Personal Coaching','Target'],['Certified Trainers','BadgeCheck'],['Group Classes','Users'],['Cardio Zone','HeartPulse'],['Strength Training','Zap'],['Steam & Lockers','HeartPulse'],['Flexible Plans','Target']].map(([x,i])=>{let I=icon[i]||BadgeCheck;return <div className="why-card"><I/><h3>{x}</h3><p>Thoughtfully designed to help you perform at your best.</p><ArrowRight size={17}/></div>})}</div></section><section id="services" className="section services"><Title tag="TRAIN YOUR WAY" title={<>Every goal has a <em>program.</em></>} copy="Find your edge with coaches and classes built around what drives you."/><div className="service-grid">{services.map(([x,i,d])=>{let I=icon[i];return <Reveal><article className="service"><I/><h3>{x}</h3><p>{d}</p><a href="#contact">Learn more <ArrowRight size={14}/></a></article></Reveal>})}</div></section></>}
function Plans(){
const ps=[
['1 Month','800',[
'Unlimited Gym Access',
'FREE Cardio',
'Strength Training',
'Locker Facility'
]],
['2 Months','1400',[
'Unlimited Gym Access',
'FREE Cardio',
'Strength Training',
'Locker Facility',
'Basic Diet Guidance'
]],
['3 Months','2100',[
'Unlimited Gym Access',
'FREE Cardio',
'Strength Training',
'Locker Facility',
'Workout Assistance'
]]
];

return (
<section id="membership" className="section plans">

<Title
tag="MEMBERSHIP"
title={<>Choose Your <em>Membership Plan</em></>}
copy="Affordable membership plans with FREE Cardio included."
/>

<div className="plan-grid">
{
ps.map((p,n)=>
<article className={'plan '+(n===1?'premium':'')}>

{n===1&&<label>MOST POPULAR</label>}

<h3>{p[0]}</h3>

<div className="price">
₹{p[1]}
<small></small>
</div>

<ul>
{
p[2].map(x=>
<li>
<BadgeCheck size={16}/>
{x}
</li>
)
}
</ul>

<Btn alt={n!==1} href="#contact">
Join Now
</Btn>

</article>
)
}
</div>

<div
style={{
marginTop:'50px',
padding:'25px',
border:'2px solid #FFD700',
borderRadius:'18px',
textAlign:'center',
background:'rgba(255,215,0,.08)'
}}
>

<label
style={{
background:'#FFD700',
color:'#000',
padding:'8px 18px',
borderRadius:'30px',
fontWeight:'700'
}}
>
🔥 NO HIDDEN CHARGES
</label>

<h2 style={{marginTop:'20px'}}>🎉 Membership Benefits</h2>

<h3>❤️ FREE Cardio Included in Every Membership</h3>

<h3>💪 ZERO Trainer Fees</h3>

<h3>📝 Registration Fee: ₹200 (One-Time Only)</h3>

<p>
✔️ Unlimited Gym Access<br/>
✔️ FREE Cardio Included<br/>
✔️ ZERO Trainer Fees<br/>
✔️ Friendly & Certified Trainers<br/>
✔️ Professional Workout Guidance
</p>

</div>

</section>
);
}
function Leaders() {
  const leaders = [
    {
      name: "Chaman Singh",
      role: "Founder & Owner",
      image: "Chaman",
      exp: "8+ Years Experience",
      members: "1000+ Happy Members"
    },
    {
      name: "Suchit Prajapati",
      role: "Main Coach & Trainer",
      image: "Suchit",
      exp: "8+ Years Experience",
      members: "1000+ Happy Members"
    }
  ];

  return (
    <section className="section leaders">
      <Title
        tag="OUR LEADERSHIP"
        title={<>Meet the <em>People Behind Fitness Hub</em></>}
        copy="Passionate coaches dedicated to transforming lives."
      />

      <div className="trainer-grid">
        {leaders.map((x) => (
          <article className="trainer premium-card">

            <img src={photo(x.image)} alt={x.name} />

            <div>

              <small>{x.role}</small>

              <h3>{x.name}</h3>

              <p>⭐⭐⭐⭐⭐</p>

              <span>🏆 {x.exp}</span>

              <br />

              <span>💪 {x.members}</span>

              <br />

              <span>📜 Certified Coach</span>

            </div>

          </article>
        ))}
      </div>
    </section>
  );
}

function Trainers() {
  let t = [
    [
      "Chaman Singh",
      "Founder & Owner",
      "Chaman",
      "8+ Years Experience",
      "https://instagram.com/chaman_singh_satna",
    ],
    [
      "Suchit Prajapati",
      "Main Coach & Trainer",
      "Suchit",
      "8+ Years Experience",
      "https://instagram.com/suchit_fitness_1997",
    ],
    [
      "Shivam",
      "Assistant Trainer",
      "Shivam",
      "4+ Years Experience",
      "https://instagram.com/shivam_930_126",
    ],
  ];

  return (
    <section id="trainers" className="section trainers">
      <Title
        tag="MEET YOUR MENTORS"
        title={
          <>
            Coached by the <em>best.</em>
          </>
        }
        copy="Meet the experienced team behind Fitness Hub."
      />

      <div className="trainer-grid">
        {t.map((x) => (
          <article className="trainer" key={x[0]}>
            <img src={photo(x[2])} alt={x[0]} />

            <div>
              <small>{x[1]}</small>

              <h3>
                {x[0]}
                <span className="verified"> ✔</span>
              </h3>

              <span>{x[3]}</span>

              <p className="rating">⭐⭐⭐⭐⭐</p>

              <p className="coach-badge">
                🏆 Certified Coach
              </p>

              <a
                href={x[4]}
                target="_blank"
                rel="noopener noreferrer"
                className="insta-btn"
              >
                <Instagram size={18} />
                <span>
                  @{x[4].replace("https://instagram.com/", "")}
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function BMI(){let[h,setH]=useState(175),[w,setW]=useState(70),b=w/(h/100)**2,c=b<18.5?'Underweight':b<25?'Healthy range':b<30?'Overweight':'Obese';return <section className="section bmi"><div><Title tag="KNOW YOUR NUMBER" title={<>Meet your body<br/>where it <em>is.</em></>} copy="Your BMI is a helpful starting point. Set your next benchmark with a coach."/><div className="ranges"><label>Height <b>{h} cm</b><input type="range" min="120" max="220" value={h} onChange={e=>setH(+e.target.value)}/></label><label>Weight <b>{w} kg</b><input type="range" min="35" max="180" value={w} onChange={e=>setW(+e.target.value)}/></label></div></div><div className="result"><div className="gauge" style={{'--p':Math.min(100,b/40*100)+'%'}}><b>{b.toFixed(1)}</b><span>BMI SCORE</span></div><h3>{c}</h3><p>A healthy weight range is <b>{(18.5*(h/100)**2).toFixed(1)}–{(24.9*(h/100)**2).toFixed(1)} kg</b>.</p></div></section>}
function More(){let[open,setOpen]=useState(0),q=['What are your gym timings?','Do you offer personal training?','Is there a free trial?','Do you provide diet plans?','How can I join?'];return <><section id="testimonials" className="section testimonial"><Title tag="MEMBER STORIES" title={<>Results you can <em>feel.</em></>}/><div className="stars">★★★★★</div><blockquote>“Fitness Hub made training feel like the best part of my day. The coaches see you, push you, and celebrate every win.”</blockquote><p><b>Naina Malhotra</b><br/>Member since 2023</p></section><section className="section faq"><Title tag="FAQ" title={<>Questions, <em>answered.</em></>}/>{q.map((x,i)=><button onClick={()=>setOpen(open===i?-1:i)}><b>{x}</b>{open===i?<ChevronUp/>:<ChevronDown/>}{open===i&&<p>{i===0?'Fitness Hub is open 24 hours a day, 7 days a week, so your workout always fits your schedule.':'Yes. Our certified coaches offer programs tailored to your goals and lifestyle.'}</p>}</button>)}</section></>}
function Contact(){
return (
<>
<section id="contact" className="contact">

<div className="contact-info">

<small>— CONTACT FITNESS HUB</small>

<h2>
Visit Our <br/><em>Gym Today</em>
</h2>

<p>
Your fitness journey starts here. Visit us, explore our gym, and become a part of the Fitness Hub family.
</p>

<div className="contact-card">

<span>
<MapPin size={20}/>
Jawahar Nagar, Gali No. 2,<br/>
Above SBI ATM,<br/>
Satna, Madhya Pradesh – 485001
</span>

<span>
🕒 <b>Opening Hours</b><br/>
🌅 Morning: 5:00 AM – 11:00 AM<br/>
🌇 Evening: 4:00 PM – 10:00 PM
</span>

<a
href="https://instagram.com/fitness_hubmp19"
target="_blank"
rel="noopener noreferrer"
className="btn"
>
<Instagram size={18}/>
Follow @fitness_hubmp19
</a>

<span>
<Phone size={20}/>
Phone Number (Coming Soon)
</span>

<span>
<Mail size={20}/>
Email Address (Coming Soon)
</span>

</div>

<div className="social-buttons">

<a
href="https://instagram.com/YOUR_USERNAME"
target="_blank"
className="btn"
>
<Instagram size={18}/>
Instagram
</a>

<a
href="https://wa.me/91XXXXXXXXXX"
target="_blank"
className="btn alt"
>
WhatsApp
</a>

<a
href="tel:+91XXXXXXXXXX"
className="btn"
>
Call Now
</a>

</div>

</div>

<div className="map-box">

<iframe
src="YOUR_GOOGLE_MAP_EMBED_LINK"
width="100%"
height="420"
style={{
border:0,
borderRadius:"20px"
}}
loading="lazy"
allowFullScreen
/>

</div>
<div className="map-box">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.5999610065893!2d80.82210920795809!3d24.561583353256538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847ff6555c8ce9%3A0x453abf4832c018c8!2sFitness%20hub%20gym!5e0!3m2!1sen!2sin!4v1784747860854!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0, borderRadius: "20px" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

</section>

<footer>

<a className="logo">
<b>F</b> FITNESS <i>HUB</i>
</a>

<p>
Train Hard • Stay Strong • Be Consistent
</p>

<div className="social-buttons">

<a
href="https://instagram.com/YOUR_USERNAME"
target="_blank"
>
<Instagram/>
</a>

</div>

<small>
© 2026 Fitness Hub Gym. All Rights Reserved.
</small>

</footer>

</>
)
}
function App() {
  const [l, setL] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setL(false), 700);
    return () => clearTimeout(t);
  }, []);

  return l ? (
    <div className="load">
      F
      <br />
      <small>FITNESS HUB</small>
    </div>
  ) : (
    <>
      <Nav />
      <Hero />
      <About />
      <Leaders />
      <Grid />
      <Plans />
      <Trainers />
      <BMI />
      <Gallery />
      <More />
      <Contact />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);