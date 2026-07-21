import Head from 'next/head';
import type { NextPage } from 'next';

const Arrow = () => <span aria-hidden="true">↗</span>;

const Home: NextPage = () => (
  <>
    <Head>
      <title>Henry Adagala — Senior Software Engineer</title>
      <meta
        name="description"
        content="Henry Adagala is a Nairobi-based senior software engineer building reliable web products."
      />
      <meta name="theme-color" content="#0f1110" />
    </Head>

    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top">HENRY<br />ADAGALA</a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:adagalahenry@gmail.com">Available for work <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Nairobi, Kenya · Senior software engineer</p>
        <h1>I build web products<br />people can <em>rely on.</em></h1>
        <div className="hero-foot">
          <p>Full-stack engineer specializing in thoughtful interfaces, dependable systems, and the details that make software feel effortless.</p>
          <a className="round-link" href="#work" aria-label="View selected work">↓</a>
        </div>
      </section>

      <section className="intro" id="about">
        <p className="section-label">01 / About</p>
        <div>
          <h2>Engineering for clarity, momentum, and useful outcomes.</h2>
          <p className="body-copy">I’m Henry Adagala, a senior software engineer with a background in Mathematics and Computer Science from Maseno University. I work across the stack—from precise frontend experiences to the services and data systems behind them.</p>
          <a className="text-link" href="https://www.linkedin.com/in/adagalahenry/" target="_blank" rel="noreferrer">More about me on LinkedIn <Arrow /></a>
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-heading">
          <p className="section-label">02 / Selected work</p>
          <h2>A focused selection of things I’ve made.</h2>
        </div>
        <article className="project project-one">
          <div className="project-visual visual-grid">
            <span>01</span><span>PRODUCT</span><span>WEB</span><span>BUILD</span>
            <div className="orb" />
          </div>
          <div className="project-meta">
            <div><p>Product engineering</p><h3>Digital products built from first principle.</h3></div>
            <p>End-to-end web development that balances an expressive interface with robust implementation.</p>
            <a href="https://github.com/adagala" target="_blank" rel="noreferrer">Explore GitHub <Arrow /></a>
          </div>
        </article>
        <article className="project project-two">
          <div className="project-visual visual-terminal">
            <div className="terminal-bar"><i /><i /><i /><span>system / online</span></div>
            <pre>{`$ build something useful
  interface  ✓
  api        ✓
  data       ✓
  ship it    ✓`}</pre>
          </div>
          <div className="project-meta">
            <div><p>Full-stack systems</p><h3>Software designed to carry the weight.</h3></div>
            <p>Pragmatic systems using modern JavaScript and TypeScript tooling, shaped around real operational needs.</p>
            <a href="mailto:adagalahenry@gmail.com">Discuss a project <Arrow /></a>
          </div>
        </article>
      </section>

      <section className="capabilities">
        <p className="section-label">03 / Capabilities</p>
        <div className="capability-list">
          <div><span>01</span><h3>Frontend engineering</h3><p>React, TypeScript, responsive UI systems</p></div>
          <div><span>02</span><h3>Backend development</h3><p>NestJS, Firebase, APIs, PostgreSQL</p></div>
          <div><span>03</span><h3>Product delivery</h3><p>From technical direction to production launch</p></div>
        </div>
      </section>

      <section className="stack">
        <p>My toolkit</p>
        <div>
          <span>TypeScript</span><span>React</span><span>NestJS</span><span>PostgreSQL</span><span>Firebase</span><span>Next.js</span>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">04 / Contact</p>
        <h2>Have a good problem<br />to solve?</h2>
        <a className="contact-link" href="mailto:adagalahenry@gmail.com">Let’s talk <Arrow /></a>
        <div className="contact-foot">
          <a href="https://github.com/adagala" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/adagalahenry/" target="_blank" rel="noreferrer">LinkedIn</a>
          <span>© {new Date().getFullYear()} Henry Adagala</span>
        </div>
      </section>
    </main>

    <style jsx global>{`
      :root { --ink:#101210; --paper:#f4f1ea; --lime:#cbed4a; --line:rgba(16,18,16,.2); }
      * { box-sizing:border-box; }
      html { scroll-behavior:smooth; }
      body { margin:0; background:var(--paper); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
      a { color:inherit; text-decoration:none; }
      main { overflow:hidden; }
      .nav { display:flex; align-items:center; justify-content:space-between; padding:24px 3vw; border-bottom:1px solid var(--line); font-size:12px; text-transform:uppercase; letter-spacing:.06em; }
      .brand { font-weight:800; line-height:.92; letter-spacing:-.04em; font-size:16px; }
      .nav-links { display:flex; gap:28px; }
      .availability { border-bottom:1px solid var(--ink); padding-bottom:3px; }
      .hero { min-height:calc(100vh - 74px); display:flex; flex-direction:column; justify-content:space-between; padding:4vw 3vw 3vw; background:var(--ink); color:var(--paper); }
      .eyebrow,.section-label { font-size:11px; text-transform:uppercase; letter-spacing:.1em; margin:0; }
      h1,h2,h3,p { margin-top:0; }
      h1 { max-width:1200px; font-size:clamp(52px,9.8vw,160px); letter-spacing:-.085em; line-height:.82; font-weight:700; margin:12vw 0 8vw; }
      h1 em { font-family:Georgia,serif; font-weight:400; }
      .hero-foot { display:flex; align-items:end; justify-content:space-between; gap:30px; }
      .hero-foot p { max-width:400px; font-size:16px; line-height:1.4; margin:0; }
      .round-link { align-items:center; background:var(--lime); border-radius:50%; color:var(--ink); display:flex; font-size:34px; height:72px; justify-content:center; width:72px; }
      .intro,.capabilities { display:grid; grid-template-columns:1fr 2fr; gap:4vw; padding:11vw 9vw; border-bottom:1px solid var(--line); }
      h2 { font-size:clamp(38px,5.6vw,84px); letter-spacing:-.065em; line-height:.9; margin-bottom:38px; max-width:950px; }
      .body-copy { font-size:19px; line-height:1.45; max-width:620px; }
      .text-link,.project-meta a,.contact-link { border-bottom:1px solid currentColor; display:inline-block; font-size:13px; margin-top:18px; padding-bottom:4px; text-transform:uppercase; letter-spacing:.06em; }
      .work { padding:10vw 3vw; background:#dfded7; }
      .work-heading { display:grid; grid-template-columns:1fr 2fr; margin:0 6vw 8vw; }
      .work-heading h2 { margin:0; }
      .project { margin:0 auto 9vw; max-width:1220px; }
      .project-visual { min-height:550px; position:relative; }
      .visual-grid { background:var(--lime); display:grid; grid-template-columns:repeat(4,1fr); gap:1px; overflow:hidden; }
      .visual-grid span { border:1px solid rgba(16,18,16,.24); font-size:11px; letter-spacing:.08em; padding:18px; }
      .orb { background:var(--ink); border-radius:50%; height:min(42vw,510px); left:50%; position:absolute; top:50%; transform:translate(-50%,-50%); width:min(42vw,510px); }
      .visual-terminal { background:#242b27; color:#d9e6d3; padding:25px; }
      .terminal-bar { border-bottom:1px solid rgba(217,230,211,.25); display:flex; gap:8px; padding-bottom:16px; }
      .terminal-bar i { background:#d9e6d3; border-radius:50%; height:7px; width:7px; }
      .terminal-bar span { font-size:11px; margin-left:auto; text-transform:uppercase; }
      pre { font:clamp(24px,4vw,56px)/1.5 'Courier New',monospace; margin:12vw 4vw; white-space:pre-wrap; }
      .project-meta { display:grid; grid-template-columns:2fr 1fr 1fr; gap:30px; padding:22px 0; }
      .project-meta h3 { font-size:clamp(28px,3.4vw,48px); letter-spacing:-.055em; line-height:.95; margin-bottom:0; }
      .project-meta p { font-size:14px; line-height:1.45; }
      .project-meta div > p { font-size:11px; letter-spacing:.1em; text-transform:uppercase; }
      .capability-list > div { border-top:1px solid var(--ink); display:grid; grid-template-columns:70px 1fr 1fr; gap:20px; padding:20px 0 38px; }
      .capability-list h3 { font-size:30px; letter-spacing:-.05em; margin:0; }
      .capability-list p { margin:4px 0 0; }
      .stack { background:var(--lime); padding:5vw 3vw; }
      .stack p { font-size:12px; text-transform:uppercase; letter-spacing:.1em; }
      .stack div { display:flex; flex-wrap:wrap; gap:10px; margin-top:5vw; }
      .stack span { border:1px solid var(--ink); border-radius:100px; font-size:clamp(17px,2vw,30px); padding:11px 17px; }
      .contact { background:var(--ink); color:var(--paper); padding:11vw 9vw 3vw; }
      .contact h2 { font-size:clamp(55px,9vw,132px); margin:9vw 0 0; }
      .contact-link { color:var(--lime); font-size:18px; margin-top:25px; }
      .contact-foot { border-top:1px solid rgba(244,241,234,.3); display:flex; gap:24px; margin-top:11vw; padding-top:20px; font-size:11px; text-transform:uppercase; letter-spacing:.08em; }
      .contact-foot span { margin-left:auto; }
      @media(max-width:700px) {
        .nav-links,.availability { display:none; }
        .hero { min-height:720px; padding:28px 22px; }
        .hero-foot { align-items:flex-start; }
        .intro,.capabilities,.work-heading { display:block; padding:72px 22px; }
        .section-label { margin-bottom:45px; }
        .work { padding:72px 22px; }
        .work-heading { margin:0 0 48px; }
        .project-visual { min-height:360px; }
        .orb { height:270px; width:270px; }
        .project-meta { display:block; }
        .project-meta > p { margin-top:26px; }
        .capability-list > div { display:block; padding:18px 0 28px; }
        .capability-list span,.capability-list p { display:block; margin-top:15px; }
        .contact { padding:72px 22px 25px; }
        .contact-foot { flex-wrap:wrap; }
        .contact-foot span { margin-left:0; width:100%; }
      }
    `}</style>
  </>
);

export default Home;
