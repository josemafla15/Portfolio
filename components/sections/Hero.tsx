export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white flex items-center justify-center p-7">

      <style suppressHydrationWarning>{`
        .hero-box {
          max-width: 980px; width: 100%; margin: 0 auto;
          background: #FBBA16; border-radius: 20px;
          border: 2.5px solid #111; box-shadow: 6px 6px 0px #111;
          padding: 64px 80px; display: flex; align-items: center;
          gap: 48px; position: relative; min-height: 520px;
          animation: scaleIn 0.7s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-left { flex-shrink: 0; width: 420px; position: relative; }
        .hero-blue {
          background: #1E2A50; border-radius: 14px; padding: 36px 48px;
          position: relative; z-index: 1;
          border: 2.5px solid #111; box-shadow: 6px 6px 0px #111;
          animation: fadeUp 0.85s 0.3s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-name { font-family: 'Anton',sans-serif; font-size: 88px; line-height: 0.93; color: #EFE6DE; display: block; }
        .hero-red {
          background: #8B0000; border-radius: 14px; padding: 22px 32px;
          position: absolute; left: 48px; right: -40px; top: calc(100% - 20px); z-index: 2;
          border: 2.5px solid #111; box-shadow: 6px 6px 0px #111;
          animation: fadeUp 0.85s 0.55s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-right {
          flex: 1; display: flex; flex-direction: column; gap: 24px;
          align-self: stretch; padding-top: 8px; padding-bottom: 72px;
          font-family: 'Cabinet Grotesk',sans-serif;
          animation: fadeUp 0.85s 0.45s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-tagline { font-size: 26px; font-weight: 500; line-height: 1.2; color: #111; letter-spacing: -0.03em; max-width: 240px; }

        @media (max-width: 1024px) {
          .hero-box { padding: 48px; gap: 32px; }
          .hero-left { width: 340px; }
          .hero-name { font-size: 72px; }
          .hero-blue { padding: 28px 36px; }
          .hero-red { left: 36px; right: -24px; }
          .hero-tagline { font-size: 22px; }
        }
        @media (max-width: 640px) {
          .hero-box { flex-direction: column; align-items: stretch; padding: 32px 24px 56px; gap: 0; min-height: unset; }
          .hero-left { width: 100%; margin-bottom: 80px; }
          .hero-blue { padding: 28px; }
          .hero-name { font-size: clamp(56px, 14vw, 80px); }
          .hero-red { left: 32px; right: -12px; top: calc(100% - 16px); }
          .hero-right { padding-top: 0; padding-bottom: 0; align-self: auto; }
          .hero-tagline { font-size: 20px; max-width: 100%; }
        }
      `}</style>

      <div className="hero-box">

        <div className="hero-left">
          <div className="hero-blue">
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px'}}>
              <span style={{display:'block', width:'24px', height:'1px', background:'rgba(239,230,222,0.25)'}} />
              <span style={{fontFamily:"'Cabinet Grotesk',sans-serif", fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(239,230,222,0.4)'}}>Dev &amp; Design</span>
            </div>
            <span className="hero-name">Jose<br />Manuel</span>
          </div>

          <div className="hero-red">
            <p style={{fontFamily:"'Cabinet Grotesk',sans-serif", fontSize:'16px', fontWeight:300, lineHeight:1.5, color:'rgba(239,230,222,0.92)'}}>
              Desarrollo experiencias web.
            </p>
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-tagline">
            Diseño que <em style={{fontStyle:'italic', fontWeight:300, color:'#555'}}>funciona.</em><br />
            Código que <em style={{fontStyle:'italic', fontWeight:300, color:'#555'}}>se siente.</em>
          </p>
          <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
            <div style={{width:'100%', height:'1px', background:'rgba(17,17,17,0.1)'}} />
            <div style={{display:'flex', alignItems:'center', gap:'9px'}}>
              <span style={{width:'7px', height:'7px', borderRadius:'50%', background:'#1E2A50', flexShrink:0, display:'inline-block'}} />
              <span style={{fontSize:'12px', color:'rgba(17,17,17,0.55)'}}>Disponible para proyectos</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}