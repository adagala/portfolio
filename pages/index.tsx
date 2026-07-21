import Head from 'next/head';
import type { NextPage } from 'next';

const projects = [
  ['The Big Shake', 'Brand Design, Framer', 'Built around clarity and consistency, this work defines a refined visual identity shaped by modern aesthetics and cohesive brand expression throughout.', 'peach'],
  ['Transparent Things', 'Web Design, Typography', 'With an emphasis on precision and structure, this work brings clarity and modern aesthetics together within a consistent visual system framework.', 'blue'],
  ['Phantom Limb', 'Logo Design, Wordpress', 'By combining clarity with contemporary design thinking, the project delivers a considered visual identity with strong and consistent brand alignment.', 'lilac'],
  ['Heat Lightning', 'Webflow, UX Design', 'This project is driven by a refined design approach that balances clarity and intention with contemporary visuals and overall cohesive brand harmony.', 'yellow'],
] as const;

const skills = [['UI Design','95%'],['Web Design','97%'],['Framer','85%'],['Wordpress','80%'],['Photoshop','90%'],['Illustration','65%']] as const;
const services = ['Mobile Design','UX & Product Design','Identity & Branding','Illustration','Web Development','Shopify Integration','Digital Solutions'];

const Home: NextPage = () => (
  <>
    <Head>
      <title>Meeko — Product Designer</title>
      <meta name="description" content="Meeko is a multidisciplinary product designer and web developer." />
    </Head>
    <main>
      <header className="top">
        <a className="logo" href="#top">meeko<span>.</span></a>
        <nav><a href="#work">Work</a><a href="#about">About</a><a href="#blog">Blog</a><a href="#contact">Contact</a></nav>
        <button className="menu" aria-label="Open menu">☰</button>
      </header>

      <section className="hero" id="top">
        <div className="socials"><a href="#">𝕏</a><a href="#">◌</a><a href="#">◎</a></div>
        <div className="hero-copy">
          <p className="kicker">Hello!</p>
          <h1>I&apos;m <em>Meeko,</em><br />a product designer.</h1>
          <p className="lede">I specialize in <b>HTML</b>, <b>CSS</b>, <b>WordPress</b>, and <b>Framer</b>, with a strong track record of converting designs into responsive websites.</p>
          <div className="tags"><span>Web Development</span><span>No-code Design</span></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="sun"/><div className="shape one"/><div className="shape two"/><div className="shape three"/></div>
        <a className="scroll" href="#work">Scroll to explore <i>↓</i></a>
      </section>

      <section className="quick-links">
        {[['My Portfolio','Explore selected projects and my approach to design.','#work'],['About Me','A closer look at my background, skills, and creative journey.','#about'],['Contact Me','Let’s work together to bring your ideas and vision to life.','#contact']].map(([title,text,href],i) => <a href={href} key={title}><small>0{i + 1}</small><h3>{title}</h3><p>{text}</p><b>↗</b></a>)}
      </section>

      <section className="works" id="work">
        <div className="section-head"><p className="kicker">My selected works</p><h2>With my keen eye for detail and sharp critical thinking skills, I specialize in crafting captivating <em>websites</em>, <em>products</em>, and <em>experiences</em>.</h2></div>
        {projects.map(([title,type,text,tone],i) => <article className="work-card" key={title}>
          <div className={'work-art ' + tone}><span>{String(i + 1).padStart(2,'0')}</span><div className="poster"><i/><i/><i/><strong>{title}</strong></div></div>
          <div className="work-copy"><p>{type}</p><h3>{title}</h3><span>{text}</span><a href="#contact">View Project <b>↗</b></a></div>
        </article>)}
        <a className="button" href="#contact">See All Works <b>↗</b></a>
      </section>

      <section className="quote"><p>“From the very beginning the collaboration felt effortless. Every idea was carefully refined into something meaningful, and the final result was exactly what we hoped for.”</p><div><span className="avatar">NB</span><b>Natalie Brooks<small>Marketing Manager</small></b></div></section>

      <section className="process">
        <div className="section-head"><p className="kicker">How I work</p><h2>High-quality work with real value considered.</h2><p className="lede">My working process revolves around an approach aimed at maximizing productivity and creativity with clarity and focus. It begins with thorough research and planning, where I gather relevant information and outline key objectives.</p><a className="button light" href="#contact">Learn More <b>↗</b></a></div>
        <div className="steps">
          {[['Problem Framing','I explore insights, and market context to clearly define the problem. Research findings are translated into ideas that shape direction, inform decisions, and establish a strong foundation for the project.'],['Shaping the Idea','Here, I refine initial ideas into clear concepts by aligning strategy and creativity. I develop structural directions that balance innovation with feasibility, while supporting both brand goals and user expectations.'],['Testing the Experience','In this phase, I bring concepts to life through prototyping and real-world testing. I validate functionality, usability, and clarity by iterating on feedback, refining details, and resolving issues before final delivery.'],['Polishing the Outcome','In the final stage of design, thorough attention is given to refine the product, ensuring it meets high standards of quality and functionality through testing, tweaking, and iteration to address any remaining issues.']].map(([t,d],i)=><div className="step" key={t}><small>(0{i+1})</small><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="numbers"><div className="section-head"><p className="kicker">Experience</p><h2>My numbers say it all</h2><p>These numbers reflect the <b>experience</b> and <b>consistency</b>, and measurable impact behind the work I’ve delivered over the years.</p></div><div className="stats">{[['98%','Satisfied happy customers'],['15','Years of work experience'],['80+','Successful projects done'],['10+','Design awards received'],['45','Travelled around the country']].map(([n,t])=><div key={t}><b>{n}</b><span>{t}</span></div>)}</div></section>

      <section className="about" id="about"><div className="about-art"><div className="portrait">M</div></div><div><p className="kicker">Hey! That’s me.</p><h2>I am Meeko, a multidisciplinary designer and blogger based in the vibrant city of Los Angeles.</h2><p>My journey in this dynamic and ever-evolving field has been a testament to my unwavering passion for meticulously crafting meaningful user experiences, leveraging cutting-edge technologies, and fearlessly pushing the boundaries of digital creativity.</p><div className="skill-bars">{skills.map(([n,p])=><div key={n}><span>{n}<b>{p}</b></span><i style={{width:p}}/></div>)}</div></div></section>

      <section className="services"><div className="section-head"><p className="kicker">My capabilities</p><h2>The services I offer are meticulously crafted and tailored to cater specifically to your <em>unique needs</em> and <em>requirements</em>.</h2></div><div className="service-grid">{services.map((s,i)=><div key={s}><small>0{i+1}</small><h3>{s}</h3><span>↗</span></div>)}</div></section>

      <section className="blog" id="blog"><div className="section-head"><p className="kicker">From the blog</p><h2>Here I share my insights as a freelancer, offering valuable <em>tips</em>, <em>tricks</em>, and <em>experiences</em> on navigating the freelancing landscape.</h2></div><div className="posts">{['Design choices that age well and the ones you will regret later.','Small design decisions that quietly change the entire experience.'].map((p,i)=><article key={p}><div className={'post-art p'+i}/><small>Feb 7, 2026 · {i ? 'Illustration' : 'Design'}</small><h3>{p}</h3><p>{i ? 'A curated mix of patterns I return to often. Use them to improve clarity, consistency, and flow.' : 'Useful takeaways for product and web design work. From layout rhythm to final finishing touches.'}</p></article>)}</div><a className="button" href="#contact">See All Posts <b>↗</b></a></section>

      <footer id="contact"><p className="kicker">Let&apos;s talk about your project.</p><h2>Got a project in mind?<br /><em>Let’s create something great.</em></h2><a href="mailto:hello@meeko.studio">Get in Touch <b>↗</b></a><div className="footer-bottom"><span>© Meeko by elemis. Powered by Framer.</span><span>Portfolio · About Me</span></div></footer>
    </main>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Mono&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Playfair+Display:ital@0;1&display=swap');
      :root{--ink:#282826;--cream:#f6f1e8;--coral:#ef6f52;--lav:#e2ddff;--mint:#c9e5dd}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:'DM Sans',Arial,sans-serif}a{text-decoration:none;color:inherit}.top{height:78px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;background:var(--cream);position:relative;z-index:2}.logo{font:700 25px/1 Georgia,serif;letter-spacing:-2px}.logo span{color:var(--coral)}nav{display:flex;gap:28px;font:11px 'DM Mono',monospace;text-transform:uppercase}.menu{background:none;border:0;font-size:21px;display:none}.hero{background:var(--lav);min-height:780px;padding:78px 7vw 42px;position:relative;overflow:hidden}.socials{display:flex;gap:13px;font:14px 'DM Mono',monospace}.hero-copy{position:relative;z-index:1;margin-top:11vh;max-width:730px}.kicker,small{font:10px 'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase}.hero h1,h2{letter-spacing:-.06em;line-height:.93}.hero h1{font-size:clamp(60px,9vw,130px);margin:12px 0 28px}.hero em,h2 em,footer em{font:italic .97em 'Playfair Display',Georgia,serif}.lede{font-size:17px;line-height:1.5;max-width:475px}.tags{display:flex;gap:9px;margin-top:27px}.tags span{border:1px solid var(--ink);border-radius:999px;padding:8px 12px;font:10px 'DM Mono',monospace}.hero-art{position:absolute;right:2vw;bottom:-5px;width:49%;height:80%;background:#b7d8f5;border-radius:45% 45% 0 0;overflow:hidden}.sun{height:200px;width:200px;border-radius:50%;background:#ffcd4f;position:absolute;top:16%;left:17%}.shape{position:absolute;border-radius:50%}.one{width:250px;height:250px;background:var(--coral);bottom:11%;right:14%}.two{width:110px;height:340px;background:#222;right:40%;bottom:-3%;border-radius:99px}.three{width:90px;height:90px;background:var(--cream);right:7%;top:22%}.scroll{font:10px 'DM Mono',monospace;text-transform:uppercase;position:absolute;bottom:38px;left:7vw;z-index:1}.scroll i{font-size:22px;font-style:normal;margin-left:10px}.quick-links{display:grid;grid-template-columns:repeat(3,1fr);padding:0 7vw;background:var(--cream)}.quick-links a{padding:48px 28px 52px;border-right:1px solid #d6cfc5;position:relative}.quick-links a:first-child{border-left:1px solid #d6cfc5}.quick-links h3{font-size:24px;margin:17px 0 9px;letter-spacing:-.05em}.quick-links p{font-size:13px;line-height:1.5;max-width:200px}.quick-links b{position:absolute;right:25px;bottom:28px;font-size:22px}.works,.process,.services,.blog{padding:125px 7vw}.works{background:#d8e9e3}.section-head{max-width:810px}.section-head h2{font-size:clamp(37px,5vw,68px);margin:15px 0 29px}.section-head>.lede,.section-head>p{max-width:525px;line-height:1.55}.work-card{margin:95px auto 0;max-width:1000px}.work-art{height:520px;position:relative;overflow:hidden}.work-art>span{position:absolute;top:22px;left:24px;font:10px 'DM Mono';z-index:2}.work-art.peach{background:#f7ba9c}.work-art.blue{background:#aacff2}.work-art.lilac{background:#cfc3ee}.work-art.yellow{background:#e6d75d}.poster{position:absolute;inset:12% 20%;background:#f7f1e6;box-shadow:0 30px 40px #0002;padding:8%;display:flex;gap:8px;flex-direction:column;transform:rotate(-4deg)}.poster i{display:block;height:14%;background:#242424}.poster i:nth-child(2){background:var(--coral);height:35%}.poster i:nth-child(3){background:#bcd8e9;height:25%}.poster strong{font:700 clamp(24px,4vw,52px)/.9 'Playfair Display';letter-spacing:-.06em}.work-copy{display:grid;grid-template-columns:1fr 1fr 1fr;gap:25px;padding:20px 0}.work-copy p{font:10px 'DM Mono';text-transform:uppercase}.work-copy h3{font-size:34px;letter-spacing:-.05em;margin:0}.work-copy span{font-size:13px;line-height:1.5}.work-copy a{font:11px 'DM Mono';text-transform:uppercase}.button{display:inline-block;border:1px solid var(--ink);border-radius:999px;font:11px 'DM Mono';padding:14px 18px;text-transform:uppercase;margin-top:65px}.quote{background:var(--coral);color:#fff1e7;padding:120px 15%;text-align:center}.quote>p{font:clamp(29px,4vw,57px)/1.08 'Playfair Display';margin:0 auto 42px;max-width:890px}.quote div{display:flex;align-items:center;justify-content:center;gap:10px;text-align:left}.avatar{display:grid;place-items:center;background:#eac5a3;color:var(--ink);border-radius:50%;width:38px;height:38px;font-size:10px}.quote small{display:block;margin-top:5px}.process{background:#2a2b28;color:#f6f1e8}.light{border-color:#f6f1e8}.steps{margin-top:90px;display:grid;grid-template-columns:repeat(2,1fr);gap:0 70px}.step{border-top:1px solid #777;padding:20px 0 48px}.step h3{font-size:26px;letter-spacing:-.05em}.step p{font-size:13px;line-height:1.55;max-width:390px}.numbers{padding:125px 7vw;background:#f2eddf;display:grid;grid-template-columns:1fr 1fr;gap:50px}.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:#d5cdc0}.stats div{background:#f2eddf;padding:30px}.stats b{display:block;font-size:54px;letter-spacing:-.07em}.stats span{font:10px 'DM Mono';text-transform:uppercase}.about{display:grid;grid-template-columns:1fr 1fr;min-height:760px}.about-art{background:#ffd78e;padding:9%;display:flex;align-items:end}.portrait{background:linear-gradient(145deg,#111 10%,#f2a269 10% 48%,#141414 48%);border-radius:47% 47% 0 0;width:100%;height:550px;color:#fff;display:grid;place-items:center;font:250px 'Playfair Display'}.about>div:last-child{padding:14% 12%;background:#ddcff5}.about h2{font-size:clamp(33px,4vw,56px);margin:15px 0 22px}.about p{line-height:1.55;font-size:14px}.skill-bars{margin-top:35px}.skill-bars div{margin:14px 0}.skill-bars span{font-size:12px;display:flex;justify-content:space-between}.skill-bars i{display:block;background:var(--ink);height:2px;margin-top:8px}.services{background:#f2eddf}.service-grid{display:grid;grid-template-columns:repeat(2,1fr);margin-top:75px}.service-grid div{border-top:1px solid #aaa198;padding:22px 0;position:relative}.service-grid h3{font-size:28px;letter-spacing:-.05em;margin:15px 0}.service-grid span{position:absolute;right:0;bottom:22px;font-size:22px}.blog{background:#b9d2ef}.posts{display:grid;grid-template-columns:1fr 1fr;gap:35px;margin-top:75px}.post-art{height:330px;margin-bottom:20px}.p0{background:linear-gradient(135deg,#f6b9a1 0 50%,#fbf2e7 50%)}.p1{background:linear-gradient(135deg,#e3e2c5 0 45%,#34355e 45%)}.posts h3{font-size:27px;letter-spacing:-.05em;line-height:1.05;margin:12px 0}.posts p{font-size:13px;line-height:1.5}footer{background:#272827;color:#f6f1e8;padding:125px 7vw 30px}footer h2{font-size:clamp(45px,6vw,88px);margin:18px 0 30px}footer>a{border-bottom:1px solid #f6f1e8;font:16px 'DM Mono';padding-bottom:8px}.footer-bottom{margin-top:140px;border-top:1px solid #767671;padding-top:20px;display:flex;justify-content:space-between;font:10px 'DM Mono';text-transform:uppercase}
      /* Motion system: staged entrance, ambient floating forms, and view-driven reveals. */
      @keyframes fade-up{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
      @keyframes reveal-right{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
      @keyframes float-one{0%,100%{transform:translate3d(0,0,0) rotate(0)}50%{transform:translate3d(-18px,-24px,0) rotate(8deg)}}
      @keyframes float-two{0%,100%{transform:translate3d(0,0,0) rotate(-2deg)}50%{transform:translate3d(22px,15px,0) rotate(5deg)}}
      @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
      @keyframes scroll-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
      .top{animation:fade-up .7s cubic-bezier(.2,.7,.2,1) both}
      .hero-copy .kicker{animation:fade-up .65s .18s cubic-bezier(.2,.7,.2,1) both}
      .hero-copy h1{animation:fade-up .8s .28s cubic-bezier(.2,.7,.2,1) both}
      .hero-copy .lede{animation:fade-up .7s .44s cubic-bezier(.2,.7,.2,1) both}
      .hero-copy .tags{animation:fade-up .7s .56s cubic-bezier(.2,.7,.2,1) both}
      .hero-art{animation:reveal-right 1.1s .22s cubic-bezier(.65,0,.35,1) both}
      .hero-art .sun{animation:pulse 5s ease-in-out infinite}
      .hero-art .one{animation:float-one 7s ease-in-out infinite}
      .hero-art .two{animation:float-two 6s ease-in-out infinite}
      .hero-art .three{animation:float-one 5s -1.5s ease-in-out infinite}
      .scroll i{display:inline-block;animation:scroll-bob 1.7s ease-in-out infinite}
      .quick-links a{transition:background-color .35s ease,color .35s ease,transform .35s ease}
      .quick-links a:hover{background:var(--ink);color:var(--cream);transform:translateY(-8px)}
      .quick-links a:hover b,.service-grid div:hover span{transform:translate(5px,-5px)}
      .quick-links b,.service-grid span{transition:transform .35s cubic-bezier(.2,.7,.2,1)}
      .work-card,.quote,.process .section-head,.step,.numbers .section-head,.stats,.about>div,.services .section-head,.service-grid div,.blog .section-head,.posts article,footer>*{animation:fade-up linear both;animation-timeline:view();animation-range:entry 10% cover 30%}
      .work-art{transition:transform .7s cubic-bezier(.2,.7,.2,1),box-shadow .7s ease}
      .work-card:hover .work-art{transform:scale(.975);box-shadow:0 24px 45px #27282728}
      .work-card:hover .poster{transform:rotate(-1deg) scale(1.04)}
      .poster{transition:transform .8s cubic-bezier(.2,.7,.2,1)}
      .button{transition:background .3s ease,color .3s ease,transform .3s ease}
      .button:hover{background:var(--ink);color:var(--cream);transform:translateY(-3px)}
      .process .button:hover{background:var(--cream);color:var(--ink)}
      .post-art{transition:transform .65s cubic-bezier(.2,.7,.2,1)}
      .posts article:hover .post-art{transform:scale(.96) rotate(1deg)}
      .skill-bars i{transform-origin:left;animation:skill-grow 1.2s cubic-bezier(.2,.7,.2,1) both;animation-timeline:view();animation-range:entry 15% cover 30%}
      @keyframes skill-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
      @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
@media(max-width:700px){.top{padding:0 6vw}nav{display:none}.menu{display:block}.hero{padding:55px 7vw 80px;min-height:680px}.hero-copy{margin-top:75px}.hero-art{opacity:.48;width:100%;right:-30%;height:45%;bottom:0}.quick-links,.numbers,.about{display:block}.quick-links a{display:block;border:0!important;border-bottom:1px solid #d6cfc5}.works,.process,.services,.blog{padding:75px 7vw}.work-card{margin-top:60px}.work-art{height:330px}.work-copy{display:block}.work-copy>*{margin:14px 0}.steps,.posts{grid-template-columns:1fr}.numbers{padding:75px 7vw}.stats{margin-top:20px}.about-art{height:500px}.about>div:last-child{padding:75px 7vw}.service-grid{grid-template-columns:1fr}.quote{padding:75px 8%}.footer-bottom{margin-top:80px;gap:15px;flex-direction:column}}`}</style>
  </>
);

export default Home;
