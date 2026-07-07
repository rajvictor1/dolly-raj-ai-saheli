import { useEffect } from 'react';

const lessons = [
  ['peach', '✦', 'AI & ChatGPT Basics', 'AI kya hai, ChatGPT kaise use karein aur Hindi/Hinglish prompts kaise likhein.', 'Start from zero'],
  ['yellow', '⌂', 'Smart Home Planning', 'Daily routine, grocery list, meal planning aur ghar ka budget easily manage karein.', 'Save your time'],
  ['blue', '✎', 'Kids Ki Study', 'Homework, projects aur difficult topics ko bachchon ke liye simple banayein.', 'Learn together'],
  ['pink', '♡', 'Content & Design', 'WhatsApp messages, invitations, captions aur Canva se beautiful designs banayein.', 'Create with confidence'],
  ['green', '↗', 'Home Business', 'Apne talent ko business banane ke ideas, marketing content aur earning options.', 'Grow your dream'],
  ['cream', '◉', 'Voice Se AI', 'Typing ki tension nahi. Apni awaaz se sawaal poochhein aur kaam karwayein.', 'Speak naturally'],
];

function Brand() {
  return <a className="brand" href="#top"><span className="brand-mark">dr</span><span>Dolly ki AI Saheli</span></a>;
}

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.learn-card, .benefit-art, .benefit-copy, .prompt-demo');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <>
    <nav className="nav wrap" aria-label="Main navigation"><Brand /><a className="nav-cta" href="#start">Free mein jaanein <span>→</span></a></nav>
    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span>♡</span> Dolly Raj ke saath easy AI learning</div>
          <h1>Housewife ke liye<br /><em>AI seekhna</em> ab easy hai.<span className="title-heart" aria-hidden="true">♥</span></h1>
          <p className="hero-lead">Ghar, bachche, sapne — sab sambhalte hue, ab technology se dosti kijiye. Mobile par, simple language mein.</p>
          <div className="hero-actions"><a className="button primary" href="#start">Aaj se start karein <span>→</span></a><a className="text-link" href="#learn">Kya seekhengi? <span>↓</span></a></div>
          <div className="trust-row"><div className="avatars" aria-hidden="true"><span>न</span><span>स</span><span>प</span></div><p><strong>English zaroori nahi.</strong><br />Bas seekhne ki ichha chahiye.</p></div>
        </div>
        <div className="hero-visual reveal delay-1">
          <div className="photo-note">Aap bhi kar sakti hain! <span>♡</span></div>
          <div className="photo-frame"><img src="/assets/family-photo.png" alt="Dolly Raj apne husband Raj Kamal, son Apoorva aur daughter Aandu ke saath" /></div>
          <div className="floating-card time-card"><span className="icon">◷</span><div><strong>30 min</strong><small>roz ki practice</small></div></div>
          <div className="floating-card phone-card"><span className="icon">⌁</span><div><strong>Sirf mobile se</strong><small>kabhi bhi, kahin bhi</small></div></div>
          <div className="doodle" aria-hidden="true">✿</div><div className="mini-heart heart-one" aria-hidden="true">♥</div><div className="mini-heart heart-two" aria-hidden="true">♡</div>
          <div className="family-caption"><strong>Dolly Raj & family</strong><small>Raj Kamal · Apoorva · Aandu</small></div>
        </div>
      </section>
      <section className="marquee" aria-label="Program benefits"><div>AI basics <span>✦</span> Smart ghar <span>✦</span> Kids ki study <span>✦</span> Canva designs <span>✦</span> Home business <span>✦</span> Hindi prompts</div></section>
      <section className="intro wrap section"><div className="section-label">Yeh aapke liye hai</div><div className="intro-grid"><h2>Technology se dar nahi,<br /><em>dosti</em> kijiye.</h2><div><p>Agar English ya technology thodi difficult lagti hai, toh koi baat nahi. AI se aap bilkul waise hi baat kar sakti hain jaise kisi dost se.</p><p className="accent-note"><span>✓</span> Zero technical knowledge needed</p></div></div></section>
      <section className="love-strip wrap" aria-label="Easy learning promise"><div><span>🌷</span><strong>Bilkul basic se</strong><small>Koi technical tension nahi</small></div><div><span>💬</span><strong>Apni language mein</strong><small>Hindi, Hinglish ya voice</small></div><div><span>🫶</span><strong>Pyaar se guidance</strong><small>Har step par, aaram se</small></div></section>
      <section className="prompt-demo wrap"><div className="prompt-copy"><span className="mini-label">Bas boliye ya type kijiye</span><h3>“Mere child ko Class 5 Maths easy way mein samjhao.”</h3><p>AI aapki language samajhta hai — Hindi, Hinglish, ya voice typing.</p></div><div className="chat-window" aria-label="ChatGPT conversation example"><div className="chat-top"><span className="dots">● ● ●</span><strong>AI Assistant</strong><span>✦</span></div><div className="message user">Kal ke liye simple lunch idea batao.</div><div className="message bot"><span>✦</span><div>Bilkul! Aap veg pulao, raita aur cucumber salad bana sakti hain. Tasty bhi, easy bhi! 😊</div></div><div className="typing">Hindi mein message likhein… <span>➤</span></div></div></section>
      <section id="learn" className="learn section"><div className="wrap"><div className="section-heading"><div><div className="section-label">Aap kya seekhengi?</div><h2>Roz ke kaam, ab aur<br /><em>smart tareeke se. ♡</em></h2></div><p>Step-by-step, simple examples ke saath. Har lesson aapki real life se juda hua.</p></div><div className="cards">{lessons.map((lesson, index) => <article className={`learn-card ${lesson[0]}`} key={lesson[2]}><span className="card-number">{String(index + 1).padStart(2, '0')}</span><div className="card-icon">{lesson[1]}</div><h3>{lesson[2]}</h3><p>{lesson[3]}</p><span className="tag">{lesson[4]}</span></article>)}</div></div></section>
      <section className="benefits wrap section"><div className="benefit-art"><div className="blob"><span>30</span><strong>MIN</strong><small>roz</small></div><div className="orbit one">✦</div><div className="orbit two">♡</div><div className="orbit three">⌁</div></div><div className="benefit-copy"><div className="section-label">Chhoti practice, bada confidence</div><h2>Sirf 30 minute roz.</h2><p>Dheere-dheere technology easy lagne lagegi, kaam jaldi honge aur aapka confidence badhega.</p><ul><li><span>✓</span> Mobile ka smart use</li><li><span>✓</span> Ghar ka better planning</li><li><span>✓</span> Bachchon ki study mein help</li><li><span>✓</span> Side income ke naye ideas</li></ul></div></section>
      <section id="start" className="cta-section"><div className="wrap cta-box"><div><div className="eyebrow light"><span>✦</span> Dolly Raj ke saath pehla step lijiye</div><h2>AI difficult nahi hai.<br /><em>Aap bilkul seekh sakti hain. ♡</em></h2><p>Bas 3 cheezein chahiye — mobile, internet aur seekhne ki ichha.</p></div><div className="cta-action"><a className="button whatsapp" href="https://wa.me/?text=Hi%20Dolly%2C%20mujhe%20simple%20Hindi%2FHinglish%20mein%20AI%20seekhna%20hai." target="_blank" rel="noopener noreferrer"><span className="wa-icon">◉</span><span>Dolly ko WhatsApp karein<small>“Hi Dolly, mujhe AI seekhna hai.”</small></span><b>→</b></a><p>Koi pressure nahi. Pehle apne sawaal poochhiye. ☺</p></div></div></section>
    </main>
    <footer className="wrap"><Brand /><p>Har woman ke liye technology, simple language mein.</p><span>Made with ♡ for curious minds</span></footer>
  </>;
}

export default App;
