const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export default function ContactPage() {
  return <main className="contact-page"><div className="contact-shell">
    <a className="legal-back" href="/">← Back to TrackyLab</a>
    <div className="contact-page-grid">
      <div><p className="legal-kicker">Contact</p><h1>Let&apos;s build<br /><em>something useful.</em></h1></div>
      <div className="contact-details">
        <p>Have a question about TrackyLab, Track Analysis, or Interview Tracker? We&apos;d be happy to hear from you.</p>
        <a className="contact-email" href="mailto:itai@trackylab.com">itai@trackylab.com <Arrow /></a>
        <div className="contact-topics"><span>Track Analysis</span><span>Interview Tracker</span><span>General inquiry</span></div>
        <p className="contact-note">Email is the best way to reach us. We&apos;ll reply as soon as possible.</p>
      </div>
    </div>
  </div></main>;
}
