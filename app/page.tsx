const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const Wave = () => <svg aria-hidden="true" viewBox="0 0 64 64"><path d="M5 34c7-17 13 17 20 0s13 17 20 0 10-6 14-1" /></svg>;
const Briefcase = () => <svg aria-hidden="true" viewBox="0 0 64 64"><path d="M22 19v-4c0-3 2-5 5-5h10c3 0 5 2 5 5v4M12 24h40v28H12zM12 33c12 7 28 7 40 0M28 35h8" /></svg>;

export default function Home() {
  return (
    <main id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="TrackyLab home"><span className="brand-mark"><Wave /></span><span>trackylab</span></a>
        <div className="nav-links"><a href="#products">Products</a><a href="#about">About</a><a className="nav-contact" href="/contact">Contact</a></div>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span />Independent software studio</p>
          <h1>Small tools.<br /><em>Real momentum.</em></h1>
          <p className="hero-text">TrackyLab builds focused, AI-powered products that turn complex information into clear, useful action.</p>
          <div className="hero-actions"><a className="button primary" href="#products">Explore our products <Arrow /></a><a className="button secondary" href="/contact">Get in touch</a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="signal-card"><span className="signal-label">signal / insight</span><div className="bars">{[42,68,33,86,58,75,46,92,64,39,77,55].map((height,index)=><i key={index} style={{height:`${height}%`}} />)}</div><div className="signal-footer"><span>RAW DATA</span><span>MEANING</span></div></div>
          <div className="floating-chip chip-one"><span>AI</span> Enriched</div><div className="floating-chip chip-two">✓ Organized</div>
        </div>
      </section>

      <section className="products" id="products"><div className="shell">
        <div className="section-heading"><span>01 / Products</span><h2>Built for people<br />who keep moving.</h2><p>Two products. One approach: remove the noise and help people make better decisions, faster.</p></div>
        <div className="product-grid">
          <article className="product-card music-card"><div className="card-topline"><span>01</span><span className="status">In development</span></div><div className="product-icon"><Wave /></div><h3>Track Analysis</h3><strong>Music intelligence for DJs.</strong><p>AI-powered track summaries and analysis that help DJs understand their music, discover connections, and prepare stronger sets.</p><div className="product-actions"><div className="tags"><span>Track analysis</span><span>AI summaries</span><span>DJ workflow</span></div><a className="product-link" href="https://music.trackylab.com">BETA <Arrow /></a></div></article>
          <article className="product-card career-card"><div className="card-topline"><span>02</span><span className="status">In development</span></div><div className="product-icon"><Briefcase /></div><h3>Interview Tracker</h3><strong>A calmer way to manage your job search.</strong><p>A structured workspace for organizing applications, interviews, contacts, and next steps throughout the hiring process.</p><div className="product-actions"><div className="tags"><span>Applications</span><span>Interviews</span><span>Progress</span></div><a className="product-link" href="https://interviews.trackylab.com">BETA <Arrow /></a></div></article>
        </div>
      </div></section>

      <section className="about shell" id="about"><div className="section-label">02 / About</div><div><h2>Useful technology,<br /><em>thoughtfully made.</em></h2><p>TrackyLab is an independent software studio building practical products at the intersection of artificial intelligence, thoughtful design, and everyday workflows.</p><p>We focus on small, useful tools that make complicated work feel clear and manageable.</p></div></section>
      <section className="contact"><div className="shell contact-inner"><div><span>Have a question or want to connect?</span><h2>Let&apos;s talk.</h2></div><a href="/contact">Contact TrackyLab <Arrow /></a></div></section>
      <footer className="footer shell"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Wave /></span><span>trackylab</span></a><p>© 2026 TrackyLab. Built in Tel Aviv.</p><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Contact</a></div></footer>
    </main>
  );
}
