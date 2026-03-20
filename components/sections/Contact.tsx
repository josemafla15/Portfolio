import Head from "next/head"

export default function Contact() {
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" />
    </Head>
    <section
      id="contact"
      style={{
        height: '100vh',
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 28px',
        overflow: 'hidden',
      }}
    >
      <style suppressHydrationWarning>{`
        .contact-cta {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: #EFE6DE;
          color: #111;
          border-radius: 999px;
          padding: 16px 40px;
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.35s ease, color 0.35s ease;
        }
        .contact-cta:hover {
          background: #1E2A50;
          color: #EFE6DE;
        }
        .contact-cta:hover .contact-cta-line {
          background: #EFE6DE;
        }

        .contact-cta-line {
          width: 20px;
          height: 1px;
          background: #111;
          display: block;
          transition: background 0.35s ease;
        }

        @media (max-width: 1024px) {
          #contact { padding: 0 40px; }
        }

        @media (max-width: 640px) {
          #contact {
            height: 100dvh;
            min-height: unset;
            padding: 0 24px;
            overflow: hidden;
          }
          .contact-cta {
            padding: 14px 28px;
            font-size: 12px;
          }
          .contact-cta:hover {
            background: #EFE6DE;
            color: #111;
          }
          .contact-cta:hover .contact-cta-line {
            background: #111;
          }
        }
        @media (hover: none) {
          .contact-cta:active {
            transform: translateY(1px) scale(0.98);
            background: #d4cfc9;
          }
        }
      `}</style>

      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '32px',
        }}
      >

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.2)', display: 'block' }} />
          <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
            Contacto
          </span>
          <span style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.2)', display: 'block' }} />
        </div>

        <h2
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontSize: 'clamp(56px,8vw,96px)',
            fontWeight: 400,
            lineHeight: '0.95',
            color: '#EFE6DE',
            margin: 0,
          }}
        >
          Trabajemos<br />juntos.
        </h2>

        <p
          style={{
            fontFamily: "'Cabinet Grotesk',sans-serif",
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '380px',
            margin: 0,
          }}
        >
          ¿Tienes un proyecto en mente? Me encantaría escucharlo. Escríbeme y lo conversamos.
        </p>

        <a
          href="https://wa.me/573146879157?text=Hola%20Jose%20Manuel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-cta"
        >
          <span>Hablemos por WhatsApp</span>
          <span className="contact-cta-line" />
        </a>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontFamily: "'Cabinet Grotesk',sans-serif",
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
            marginTop: '16px',
          }}
        >
          <span>Jose Manuel</span>
          <span style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.2)', display: 'block' }} />
          <span>Design & Development</span>
        </div>

      </div>
    </section>
    </>
  )
}