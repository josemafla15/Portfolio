'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-animate]')
    if (!els) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay ?? '0s'
            el.style.animation = `fadeUp 0.85s ${delay} cubic-bezier(0.16,1,0.3,1) both`
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >
      <style suppressHydrationWarning>{`
        .about-section {
          min-height: 100vh;
          background: #1E2A50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 64px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about-red {
          position: absolute;
          left: 44px;
          right: -22px;
          bottom: -60px;
          background: #8B0000;
          border-radius: 14px;
          border: 2px solid #111;
          box-shadow: 6px 6px 0px #111;
          padding: 32px 24px;
          z-index: 2;
        }
        .about-red-text {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.5;
          color: rgba(239,230,222,0.9);
          letter-spacing: 0.02em;
        }

        @media (max-width: 1024px) {
          .about-section { padding: 80px 40px; }
          .about-grid { gap: 48px; }
        }

        @media (max-width: 640px) {
          .about-section { padding: 72px 24px 100px; overflow-x: hidden; }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-yellow-card { width: 85% !important; }
          .about-red {
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
            margin-top: -20px;
            width: 90%;
            align-self: flex-end;
            padding: 20px 20px;
          }
          .about-red-text { font-size: 15px; }
          .about-red-text { font-size: 16px; }
        }
      `}</style>

      <div style={{ maxWidth: '860px', width: '100%' }}>

        <div
          data-animate
          data-delay="0s"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}
        >
          <span style={{ display: 'block', width: '32px', height: '1px', background: 'rgba(239,230,222,0.25)' }} />
          <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(239,230,222,0.4)' }}>
            Sobre mí
          </span>
        </div>

        <div className="about-grid">

          {/* LEFT */}
          <div>
            <h2
              data-animate
              data-delay="0.1s"
              style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(40px,6vw,72px)', lineHeight: '0.95', color: '#EFE6DE', marginBottom: '32px' }}
            >
              Soy Jose<br />Manuel.
            </h2>
            <p
              data-animate
              data-delay="0.2s"
              style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(239,230,222,0.7)', maxWidth: '440px' }}
            >
              Ingeniero de software enfocado en crear experiencias web con identidad, buen gusto y
              atención al detalle. Me interesa el punto donde el desarrollo y el diseño se
              encuentran para construir sitios que no solo funcionen bien, sino que también
              comuniquen una identidad clara y una personalidad visual definida.
            </p>
          </div>

          {/* RIGHT */}
          <div style={{ paddingTop: '8px', position: 'relative', display: 'flex', flexDirection: 'column' }}>

            <div
              data-animate
              data-delay="0.25s" className="about-yellow-card"
              style={{
                position: 'relative',
                background: '#FBBA16',
                borderRadius: '18px',
                border: '2px solid #111',
                boxShadow: '6px 6px 0px #111',
                padding: '32px 28px 68px',
                zIndex: 1,
              }}
            >
              <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.42)', display: 'block', marginBottom: '26px' }}>
                Enfoque
              </span>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {['Desarrollo web', 'Diseño visual', 'Experiencias con carácter'].map((item, i) => (
                  <div
                    key={i}
                    style={{ borderTop: '1px solid rgba(17,17,17,0.12)', padding: '18px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}
                  >
                    <span style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(18px,2.5vw,26px)', lineHeight: 1, color: '#111', letterSpacing: '0.01em' }}>{item}</span>
                    <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.35)', flexShrink: 0 }}>0{i + 1}</span>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid rgba(17,17,17,0.12)' }} />
              </div>
            </div>

            <div
              data-animate
              data-delay="0.4s"
              className="about-red"
            >
              <span className="about-red-text">
                Diseño + código con una dirección visual clara.
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}