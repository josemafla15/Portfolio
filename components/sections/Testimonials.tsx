'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: 'Jose logró convertir una idea general en una tienda online clara, funcional y muy bien cuidada visualmente. El proceso fue ordenado y el resultado superó lo que esperábamos.',
    name: 'Mariana Gómez',
    role: 'Fundadora de marca de cosméticos',
    highlight: 'Diseño + ejecución sólida',
  },
  {
    quote: 'Necesitábamos una solución que se viera profesional y al mismo tiempo funcionara bien en el día a día. Jose entendió muy rápido lo que buscábamos y lo llevó a algo real.',
    name: 'Carlos Ramírez',
    role: 'Gerente de operación',
    highlight: 'Proceso claro y aterrizado',
  },
  {
    quote: 'Lo que más valoro fue su capacidad para cuidar tanto la parte visual como la funcional. No solo se enfocó en que se viera bien, sino en que realmente cumpliera su objetivo.',
    name: 'Laura Martínez',
    role: 'Dueña de negocio',
    highlight: 'Atención al detalle',
  },

]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-animate]')
    if (!els) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const anim = el.dataset.animate ?? 'fadeUp'
            const delay = el.dataset.delay ?? '0s'
            el.style.animation = `${anim} 0.85s ${delay} cubic-bezier(0.16,1,0.3,1) both`
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
      id="testimonials"
      className="testi-section"
    >
      <style suppressHydrationWarning>{`
        .testi-section {
          height: 100vh;
          background: #8B0000;
          padding: 56px 28px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .testi-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .testi-section { padding: 48px 24px 32px; }
          .testi-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
        }

        @media (max-width: 640px) {
          .testi-section {
            height: auto;
            min-height: 100vh;
            padding: 72px 20px 48px;
            overflow-y: auto;
          }
          .testi-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .testi-grid article {
            min-height: unset;
          }
          .testi-grid article p {
            font-size: 15px !important;
          }
        }
      `}</style>

      <div style={{ width: '100%', maxWidth: '980px' }}>

        <div data-animate="fadeUp" data-delay="0s">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <span style={{ width: '32px', height: '1px', background: 'rgba(239,230,222,0.22)', display: 'block' }} />
            <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(239,230,222,0.44)' }}>
              Testimonios
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '36px' }}>
            <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(48px,7vw,96px)', lineHeight: '0.9', color: '#EFE6DE', letterSpacing: '-0.03em', margin: 0 }}>
              LO QUE<br />DICEN.
            </h2>
          </div>
        </div>

        <div className="testi-grid">

          <article
            data-animate="scaleIn"
            data-delay="0.15s"
            style={{
              background: '#EFE6DE',
              borderRadius: '22px',
              border: '2px solid #111',
              boxShadow: '6px 6px 0px #111',
              padding: '28px 28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', display: 'block', marginBottom: '18px' }}>
              {testimonials[0].highlight}
            </span>
            <p style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: 'clamp(16px,2vw,22px)', lineHeight: 1.28, letterSpacing: '-0.03em', color: '#111', margin: 0 }}>
              "{testimonials[0].quote}"
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '18px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(17,17,17,0.12)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '14px', fontWeight: 500, color: '#111' }}>{testimonials[0].name}</span>
                <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.42)' }}>{testimonials[0].role}</span>
              </div>
              <span style={{ fontFamily: "'Anton',sans-serif", fontSize: '54px', lineHeight: 1, color: '#8B0000', opacity: 0.95 }}>"</span>
            </div>
          </article>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {testimonials.slice(1).map((t, i) => (
              <article
                key={i}
                data-animate="slideInRight"
                data-delay={`${0.25 + i * 0.15}s`}
                style={{
                  background: '#EFE6DE',
                  borderRadius: '20px',
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: '2px solid #111',
                  boxShadow: '6px 6px 0px #111',
                }}
              >
                <div>
                  <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.36)', display: 'block', marginBottom: '12px' }}>
                    {t.highlight}
                  </span>
                  <p style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '14px', lineHeight: 1.6, color: '#111', margin: 0 }}>"{t.quote}"</p>
                </div>
                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(17,17,17,0.1)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '13px', fontWeight: 500, color: '#111' }}>{t.name}</span>
                  <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.42)' }}>{t.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}