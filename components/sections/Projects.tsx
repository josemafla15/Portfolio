const projects = [
  {
    num: '01',
    title: 'Glow Beauty',
    category: 'Ecommerce maquillaje',
    tags: ['Django', 'Angular', 'API Wompi'],
    desc: 'Una experiencia visual con foco en conversión.',
    year: '2026',
  },
  {
    num: '02',
    title: 'Sistema de inventario y pedidos',
    category: 'Dashboard operativo',
    tags: ['Django', 'Angular', 'API'],
    desc: 'Una interfaz pensada para centralizar inventario, pedidos y seguimiento diario en un solo lugar.',
    year: '2024',
  },
  {
    num: '03',
    title: 'Proyecto Gamma',
    category: 'Sitio para marca',
    tags: ['Branding', 'Web', 'Motion'],
    desc: 'Identidad digital y sitio web para marca creativa emergente.',
    year: '2023',
  },
]

const CardPreviewEcommerce = () => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: '10px' }}>
    <svg width="100%" height="100%" viewBox="0 0 340 210" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* BG */}
      <rect x="0" y="0" width="340" height="210" fill="#1a0a0e"/>
      {/* Top bar */}
      <rect x="0" y="0" width="340" height="20" fill="#120608"/>
      <rect x="8" y="5" width="30" height="10" rx="5" fill="#c9547a" fillOpacity="0.9"/>
      <rect x="46" y="6" width="24" height="8" rx="4" fill="#ffffff" fillOpacity="0.07"/>
      <rect x="74" y="6" width="24" height="8" rx="4" fill="#ffffff" fillOpacity="0.07"/>
      <rect x="102" y="6" width="24" height="8" rx="4" fill="#ffffff" fillOpacity="0.07"/>
      <rect x="220" y="5" width="72" height="10" rx="5" fill="#ffffff" fillOpacity="0.06"/>
      <rect x="300" y="5" width="14" height="10" rx="5" fill="#c9547a" fillOpacity="0.3"/>
      <rect x="318" y="5" width="14" height="10" rx="5" fill="#ffffff" fillOpacity="0.08"/>
      {/* Hero banner */}
      <rect x="8" y="28" width="324" height="40" rx="6" fill="#2a0d14"/>
      <rect x="16" y="35" width="54" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="16" y="44" width="86" height="10" rx="3" fill="#ffffff" fillOpacity="0.22"/>
      <rect x="16" y="58" width="44" height="8" rx="4" fill="#c9547a" fillOpacity="0.85"/>
      <ellipse cx="270" cy="48" rx="28" ry="16" fill="#c9547a" fillOpacity="0.15"/>
      <rect x="254" y="36" width="22" height="24" rx="5" fill="#c9547a" fillOpacity="0.45"/>
      <circle cx="310" cy="34" r="3" fill="#e8a0b4" fillOpacity="0.4"/>
      <circle cx="318" cy="42" r="2" fill="#c9547a" fillOpacity="0.5"/>
      <circle cx="306" cy="54" r="4" fill="#8b2244" fillOpacity="0.5"/>
      {/* Filter sidebar */}
      <rect x="8" y="78" width="54" height="124" rx="6" fill="#ffffff" fillOpacity="0.04"/>
      <rect x="14" y="86" width="28" height="4" rx="2" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="14" y="96" width="38" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="14" y="104" width="8" height="8" rx="2" fill="#c9547a" fillOpacity="0.7"/>
      <rect x="24" y="106" width="24" height="4" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="14" y="116" width="8" height="8" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="24" y="118" width="20" height="4" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="14" y="128" width="8" height="8" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="24" y="130" width="28" height="4" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <line x1="14" y1="144" x2="54" y2="144" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="0.5"/>
      <rect x="14" y="150" width="28" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1"/>
      <circle cx="18" cy="162" r="5" fill="#c9547a"/>
      <circle cx="30" cy="162" r="5" fill="#8b2244"/>
      <circle cx="42" cy="162" r="5" fill="#e8a0b4"/>
      <circle cx="18" cy="174" r="5" fill="#d4685a"/>
      <circle cx="30" cy="174" r="5" fill="#a0522d"/>
      <circle cx="42" cy="174" r="5" fill="#e8c9a0"/>
      <rect x="14" y="184" width="40" height="3" rx="1.5" fill="#c9547a" fillOpacity="0.5"/>
      <circle cx="38" cy="185" r="3" fill="#c9547a"/>
      {/* Product grid 3x2 */}
      {/* R1 P1 */}
      <rect x="70" y="78" width="82" height="58" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="70" y="78" width="82" height="36" rx="6" fill="#2a0d14"/>
      <rect x="70" y="108" width="82" height="6" fill="#2a0d14"/>
      <ellipse cx="111" cy="96" rx="15" ry="12" fill="#c9547a" fillOpacity="0.18"/>
      <rect x="100" y="84" width="22" height="24" rx="4" fill="#c9547a" fillOpacity="0.5"/>
      <rect x="76" y="118" width="42" height="4" rx="2" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="76" y="126" width="24" height="6" rx="3" fill="#c9547a" fillOpacity="0.8"/>
      {/* R1 P2 */}
      <rect x="160" y="78" width="82" height="58" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="160" y="78" width="82" height="36" rx="6" fill="#1a0810"/>
      <rect x="160" y="108" width="82" height="6" fill="#1a0810"/>
      <ellipse cx="201" cy="95" rx="13" ry="11" fill="#8b2244" fillOpacity="0.3"/>
      <rect x="190" y="83" width="20" height="22" rx="10" fill="#8b2244" fillOpacity="0.6"/>
      <rect x="166" y="118" width="36" height="4" rx="2" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="166" y="126" width="28" height="6" rx="3" fill="#c9547a" fillOpacity="0.8"/>
      <rect x="222" y="80" width="16" height="8" rx="4" fill="#c9547a"/>
      {/* R1 P3 */}
      <rect x="250" y="78" width="82" height="58" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="250" y="78" width="82" height="36" rx="6" fill="#0e0508"/>
      <rect x="250" y="108" width="82" height="6" fill="#0e0508"/>
      <ellipse cx="291" cy="96" rx="16" ry="12" fill="#d4685a" fillOpacity="0.2"/>
      <rect x="280" y="83" width="18" height="18" rx="9" fill="#d4685a" fillOpacity="0.5"/>
      <rect x="256" y="118" width="48" height="4" rx="2" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="256" y="126" width="22" height="6" rx="3" fill="#c9547a" fillOpacity="0.8"/>
      {/* R2 P4 */}
      <rect x="70" y="144" width="82" height="56" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="70" y="144" width="82" height="34" rx="6" fill="#180810"/>
      <rect x="70" y="172" width="82" height="6" fill="#180810"/>
      <ellipse cx="111" cy="161" rx="14" ry="11" fill="#e8a0b4" fillOpacity="0.2"/>
      <rect x="101" y="150" width="20" height="22" rx="4" fill="#e8a0b4" fillOpacity="0.5"/>
      <rect x="76" y="182" width="40" height="4" rx="2" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="76" y="190" width="26" height="6" rx="3" fill="#c9547a" fillOpacity="0.8"/>
      {/* R2 P5 */}
      <rect x="160" y="144" width="82" height="56" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="160" y="144" width="82" height="34" rx="6" fill="#150610"/>
      <rect x="160" y="172" width="82" height="6" fill="#150610"/>
      <ellipse cx="201" cy="161" rx="12" ry="10" fill="#c9547a" fillOpacity="0.25"/>
      <rect x="191" y="150" width="18" height="18" rx="9" fill="#c9547a" fillOpacity="0.4"/>
      <rect x="166" y="182" width="34" height="4" rx="2" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="166" y="190" width="28" height="6" rx="3" fill="#c9547a" fillOpacity="0.8"/>
      <rect x="210" y="190" width="5" height="5" rx="1" fill="#EF9F27" fillOpacity="0.7"/>
      <rect x="217" y="190" width="5" height="5" rx="1" fill="#EF9F27" fillOpacity="0.7"/>
      <rect x="224" y="190" width="5" height="5" rx="1" fill="#EF9F27" fillOpacity="0.4"/>
      {/* R2 P6 */}
      <rect x="250" y="144" width="82" height="56" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="250" y="144" width="82" height="34" rx="6" fill="#120508"/>
      <rect x="250" y="172" width="82" height="6" fill="#120508"/>
      <ellipse cx="291" cy="161" rx="15" ry="12" fill="#8b2244" fillOpacity="0.2"/>
      <rect x="281" y="150" width="18" height="18" rx="5" fill="#8b2244" fillOpacity="0.45"/>
      <rect x="256" y="182" width="46" height="4" rx="2" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="256" y="190" width="24" height="6" rx="3" fill="#c9547a" fillOpacity="0.8"/>
      <rect x="308" y="146" width="22" height="10" rx="5" fill="#EF9F27" fillOpacity="0.9"/>
      {/* Pagination */}
      <rect x="70"  y="204" width="12" height="8" rx="4" fill="#c9547a" fillOpacity="0.8"/>
      <rect x="86"  y="204" width="12" height="8" rx="4" fill="#ffffff" fillOpacity="0.07"/>
      <rect x="102" y="204" width="12" height="8" rx="4" fill="#ffffff" fillOpacity="0.07"/>
      <rect x="118" y="204" width="12" height="8" rx="4" fill="#ffffff" fillOpacity="0.07"/>
    </svg>
  </div>
)

const CardPreviewDashboard = () => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: '10px' }}>
    <svg width="100%" height="100%" viewBox="0 0 340 210" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="340" height="210" fill="#1a1f2e"/>
      <rect x="0" y="0" width="340" height="22" fill="#141824"/>
      <circle cx="12" cy="11" r="3" fill="#ffffff" fillOpacity="0.15"/>
      <circle cx="22" cy="11" r="3" fill="#ffffff" fillOpacity="0.15"/>
      <circle cx="32" cy="11" r="3" fill="#ffffff" fillOpacity="0.15"/>
      <rect x="48" y="5" width="36" height="12" rx="6" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="90" y="5" width="36" height="12" rx="6" fill="#ffffff" fillOpacity="0.06"/>
      <rect x="132" y="5" width="36" height="12" rx="6" fill="#ffffff" fillOpacity="0.06"/>
      <rect x="258" y="5" width="52" height="12" rx="6" fill="#ffffff" fillOpacity="0.08"/>
      <rect x="316" y="5" width="18" height="12" rx="6" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="8" y="30" width="72" height="36" rx="6" fill="#ffffff" fillOpacity="0.06"/>
      <rect x="8" y="30" width="3" height="36" rx="1.5" fill="#EF9F27"/>
      <rect x="16" y="37" width="32" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="16" y="47" width="48" height="10" rx="3" fill="#ffffff" fillOpacity="0.3"/>
      <rect x="68" y="47" width="8" height="10" rx="3" fill="#EF9F27" fillOpacity="0.8"/>
      <rect x="88" y="30" width="72" height="36" rx="6" fill="#ffffff" fillOpacity="0.06"/>
      <rect x="88" y="30" width="3" height="36" rx="1.5" fill="#1D9E75"/>
      <rect x="96" y="37" width="38" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="96" y="47" width="44" height="10" rx="3" fill="#ffffff" fillOpacity="0.3"/>
      <rect x="144" y="47" width="12" height="10" rx="3" fill="#1D9E75" fillOpacity="0.8"/>
      <rect x="168" y="30" width="72" height="36" rx="6" fill="#ffffff" fillOpacity="0.06"/>
      <rect x="168" y="30" width="3" height="36" rx="1.5" fill="#378ADD"/>
      <rect x="176" y="37" width="30" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="176" y="47" width="52" height="10" rx="3" fill="#ffffff" fillOpacity="0.3"/>
      <rect x="232" y="47" width="6" height="10" rx="3" fill="#378ADD" fillOpacity="0.8"/>
      <rect x="248" y="30" width="84" height="36" rx="6" fill="#ffffff" fillOpacity="0.06"/>
      <rect x="248" y="30" width="3" height="36" rx="1.5" fill="#E24B4A"/>
      <rect x="256" y="37" width="44" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="256" y="47" width="56" height="10" rx="3" fill="#ffffff" fillOpacity="0.3"/>
      <rect x="316" y="47" width="10" height="10" rx="3" fill="#E24B4A" fillOpacity="0.8"/>
      <rect x="8" y="74" width="202" height="90" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="16" y="81" width="44" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2"/>
      <line x1="16" y1="154" x2="202" y2="154" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.5"/>
      <line x1="16" y1="144" x2="202" y2="144" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.5"/>
      <line x1="16" y1="134" x2="202" y2="134" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.5"/>
      <line x1="16" y1="124" x2="202" y2="124" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.5"/>
      <path d="M16 148 L50 136 L84 141 L118 126 L152 130 L186 118 L202 121" fill="none" stroke="#EF9F27" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M16 148 L50 136 L84 141 L118 126 L152 130 L186 118 L202 121 L202 154 L16 154 Z" fill="#EF9F27" fillOpacity="0.12"/>
      <path d="M16 152 L50 145 L84 148 L118 138 L152 142 L186 132 L202 135" fill="none" stroke="#378ADD" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M16 152 L50 145 L84 148 L118 138 L152 142 L186 132 L202 135 L202 154 L16 154 Z" fill="#378ADD" fillOpacity="0.1"/>
      <rect x="16"  y="156" width="14" height="4" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="50"  y="156" width="14" height="4" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="84"  y="156" width="14" height="4" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="118" y="156" width="14" height="4" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="152" y="156" width="14" height="4" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="186" y="156" width="14" height="4" rx="2" fill="#ffffff" fillOpacity="0.1"/>
      <rect x="218" y="74" width="114" height="46" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="226" y="81" width="40" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2"/>
      <circle cx="252" cy="105" r="13" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="7"/>
      <circle cx="252" cy="105" r="13" fill="none" stroke="#1D9E75" strokeWidth="7" strokeDasharray="33 49" strokeDashoffset="-8"/>
      <circle cx="252" cy="105" r="13" fill="none" stroke="#EF9F27" strokeWidth="7" strokeDasharray="18 64" strokeDashoffset="-41"/>
      <rect x="272" y="96" width="5" height="5" rx="1" fill="#1D9E75"/>
      <rect x="272" y="106" width="5" height="5" rx="1" fill="#EF9F27"/>
      <rect x="272" y="116" width="5" height="5" rx="1" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="280" y="96"  width="34" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.15"/>
      <rect x="280" y="106" width="26" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.15"/>
      <rect x="280" y="116" width="30" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.15"/>
      <rect x="218" y="128" width="114" height="36" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="226" y="134" width="36" height="4" rx="2" fill="#ffffff" fillOpacity="0.2"/>
      <rect x="226" y="142" width="58" height="4" rx="2" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="290" y="141" width="28" height="6" rx="3" fill="#EF9F27" fillOpacity="0.3"/>
      <rect x="226" y="150" width="52" height="4" rx="2" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="290" y="149" width="22" height="6" rx="3" fill="#1D9E75" fillOpacity="0.3"/>
      <rect x="226" y="158" width="62" height="4" rx="2" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="290" y="157" width="32" height="6" rx="3" fill="#378ADD" fillOpacity="0.3"/>
      <rect x="8" y="172" width="324" height="30" rx="6" fill="#ffffff" fillOpacity="0.05"/>
      <rect x="8" y="172" width="324" height="10" rx="6" fill="#ffffff" fillOpacity="0.08"/>
      <rect x="8" y="178" width="324" height="4" fill="#ffffff" fillOpacity="0.08"/>
      <rect x="16"  y="174" width="36" height="4" rx="2" fill="#ffffff" fillOpacity="0.3"/>
      <rect x="88"  y="174" width="48" height="4" rx="2" fill="#ffffff" fillOpacity="0.3"/>
      <rect x="172" y="174" width="30" height="4" rx="2" fill="#ffffff" fillOpacity="0.3"/>
      <rect x="236" y="174" width="36" height="4" rx="2" fill="#ffffff" fillOpacity="0.3"/>
      <rect x="294" y="174" width="32" height="4" rx="2" fill="#ffffff" fillOpacity="0.3"/>
      <rect x="16"  y="186" width="28" height="4" rx="2" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="88"  y="186" width="42" height="4" rx="2" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="172" y="186" width="24" height="4" rx="2" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="236" y="186" width="26" height="4" rx="2" fill="#ffffff" fillOpacity="0.12"/>
      <rect x="294" y="184" width="28" height="8" rx="4" fill="#1D9E75" fillOpacity="0.3"/>
    </svg>
  </div>
)

const CardPreviewGeneric = () => (
  <div style={{ background: '#EFE6DE', borderRadius: '14px', padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
      {[0.28, 0.16, 0.1].map((o, i) => (
        <span key={i} style={{ width: '8px', height: '8px', borderRadius: '999px', background: `rgba(17,17,17,${o})`, display: 'inline-block' }} />
      ))}
    </div>
    <div style={{ height: '70px', borderRadius: '10px', background: 'rgba(30,42,80,0.1)' }} />
    <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '8px' }}>
      <div style={{ height: '90px', borderRadius: '10px', background: 'rgba(30,42,80,0.1)' }} />
      <div style={{ display: 'grid', gap: '8px' }}>
        <div style={{ height: '41px', borderRadius: '10px', background: 'rgba(139,0,0,0.14)' }} />
        <div style={{ height: '41px', borderRadius: '10px', background: 'rgba(30,42,80,0.08)' }} />
      </div>
    </div>
  </div>
)

export default function Projects() {
  const previews = [CardPreviewEcommerce, CardPreviewDashboard, CardPreviewGeneric]

  return (
    <section id="projects" className="projects-section">
      <style suppressHydrationWarning>{`
        @keyframes scroll-x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .projects-section {
          height: 100vh;
          background: #FBBA16;
          padding: 56px 0 32px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .projects-track {
          animation: scroll-x 45s linear infinite;
          display: flex;
          gap: 24px;
          width: max-content;
          height: 100%;
        }
        .projects-track-wrapper {
          overflow: hidden;
          flex: 1;
          padding: 8px 0;
        }
        .project-card {
          min-width: 820px;
          max-width: 820px;
          height: 100%;
          flex-shrink: 0;
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(17,17,17,0.06);
          background: #1E2A50;
          display: flex;
          flex-direction: row;
        }
        .project-card-left {
          flex: 1;
          padding: 36px 34px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 1;
        }
        .project-card-right {
          width: 50%;
          background: #8B0000;
          border-radius: 18px;
          margin: 24px 24px 24px 0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .project-card { min-width: 640px; max-width: 640px; }
        }
        @media (max-width: 640px) {
          .projects-section {
            height: auto;
            min-height: 100vh;
            padding: 56px 20px 48px;
            overflow-y: auto;
          }
          .projects-track-wrapper { overflow: visible; flex: none; padding: 0; }
          .projects-track { animation: none; flex-direction: column; width: 100%; gap: 20px; height: auto; }
          .project-card { min-width: 100%; max-width: 100%; height: auto; flex-direction: column; }
          .project-card-right { width: auto; margin: 0 16px 16px; }
        }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 28px 32px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '18px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'block', width: '32px', height: '1px', background: 'rgba(17,17,17,0.24)' }} />
              <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.42)' }}>Proyectos</span>
            </div>
            <h2 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(48px,7vw,96px)', lineHeight: '0.9', color: '#111', letterSpacing: '-0.03em', margin: 0 }}>
              TRABAJO<br />SELECTO.
            </h2>
          </div>
        </div>
        <p style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '14px', lineHeight: 1.7, color: 'rgba(17,17,17,0.55)', maxWidth: '460px' }}>
          Algo de mi trabajo.
        </p>
      </div>

      {/* Scrolling track */}
      <div className="projects-track-wrapper">
        <div className="projects-track">
          {projects.map((p, idx) => {
            const Preview = previews[idx]
            return (
              <article key={idx} className="project-card">
                <div className="project-card-left">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                      <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '11px', color: 'rgba(239,230,222,0.34)', letterSpacing: '0.18em' }}>{p.num}</span>
                      <span style={{ width: '26px', height: '1px', background: 'rgba(239,230,222,0.16)', display: 'block' }} />
                      <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(239,230,222,0.38)' }}>{p.category}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Anton',sans-serif", fontSize: 'clamp(36px,5vw,66px)', lineHeight: '0.94', color: '#EFE6DE', letterSpacing: '-0.02em', marginBottom: '18px' }}>{p.title}</h3>
                    <p style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '16px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(239,230,222,0.72)' }}>{p.desc}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginTop: '28px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {p.tags.map((tag) => (
                        <span key={tag} style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(239,230,222,0.9)', border: '1px solid rgba(239,230,222,0.16)', borderRadius: '999px', padding: '7px 12px' }}>{tag}</span>
                      ))}
                    </div>
                    <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '12px', color: 'rgba(239,230,222,0.34)', flexShrink: 0 }}>{p.year}</span>
                  </div>
                </div>
                <div className="project-card-right">
                  <Preview />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(239,230,222,0.44)' }}>Preview visual</span>
                    <span style={{ fontFamily: "'Cabinet Grotesk',sans-serif", fontSize: '12px', color: 'rgba(239,230,222,0.88)' }}>Ver proyecto</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}