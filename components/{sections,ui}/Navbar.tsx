'use client'

import { useEffect, useState, useRef } from 'react'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [entered, setEntered] = useState(false)
  const lastY = useRef(0)
  const autoScrolling = useRef(false)
  const autoScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrollDelta = useRef(0)

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 50)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)

      if (autoScrolling.current) return

      if (y < 10) {
        setVisible(true)
        scrollDelta.current = 0
      } else if (y > lastY.current) {
        scrollDelta.current += y - lastY.current
        if (scrollDelta.current > 200) setVisible(false)
      } else {
        scrollDelta.current = 0
        setVisible(true)
      }

      lastY.current = y
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (!el) return

    autoScrolling.current = true
    setVisible(true)
    el.scrollIntoView({ behavior: 'smooth' })

    if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current)
    autoScrollTimer.current = setTimeout(() => {
      autoScrolling.current = false
      lastY.current = window.scrollY
      scrollDelta.current = 0
    }, 1200)
  }

  const links = [
    { label: 'Inicio', id: 'home' },
    { label: 'Acerca de mí', id: 'about' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Testimonios', id: 'testimonials' },
    { label: 'Contacto', id: 'contact' },
  ]

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#EFE6DE',
        borderBottom: '1px solid rgba(17,17,17,0.08)',
        opacity: entered ? 1 : 0,
        transform: entered ? (visible ? 'translateY(0)' : 'translateY(-110%)') : 'translateY(-10px)',
        transition: entered
          ? 'opacity 0.45s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1)'
          : 'none',
      }}>
        <style suppressHydrationWarning>{`
          .nav-link {
            font-family: 'Cabinet Grotesk', sans-serif;
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(17,17,17,0.76);
            text-decoration: none;
            position: relative;
            padding-bottom: 3px;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: rgba(17,17,17,0.76);
            transition: width 0.25s ease;
          }
          .nav-link:hover::after { width: 100%; }
          .nav-contact {
            font-family: 'Cabinet Grotesk', sans-serif;
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #111;
            text-decoration: none;
            padding-bottom: 3px;
            border-bottom: 1.5px solid #111;
            transition: opacity 0.25s ease;
          }
          .nav-contact:hover { opacity: 0.5; }
          .nav-desktop { display: flex; }
          .nav-mobile-btn { display: none; }

          @media (max-width: 768px) {
            .nav-desktop { display: none !important; }
            .nav-mobile-btn { display: block; }
          }

          /* ── Mobile menu overlay ── */
          .mobile-menu {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: #1E2A50;
            z-index: 49;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 48px 24px;
            transform: translateY(-100%);
            transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
            overflow: hidden;
          }
          .mobile-menu.open { transform: translateY(0); }

          /* ── Cards stack ── */
          .mobile-card {
            background: #EFE6DE;
            border: 2px solid #111;
            box-shadow: 5px 5px 0px #111;
            border-radius: 14px;
            padding: 0;
            margin-bottom: -14px;
            position: relative;
            opacity: 0;
            transform: translateY(32px);
            transition:
              opacity 0.65s cubic-bezier(0.16,1,0.3,1),
              transform 0.65s cubic-bezier(0.16,1,0.3,1),
              box-shadow 0.2s ease;
          }
          .mobile-menu.open .mobile-card { opacity: 1; transform: translateY(0); }

          .mobile-menu.open .mobile-card:nth-child(1) { transition-delay: 0.10s; }
          .mobile-menu.open .mobile-card:nth-child(2) { transition-delay: 0.22s; }
          .mobile-menu.open .mobile-card:nth-child(3) { transition-delay: 0.34s; }
          .mobile-menu.open .mobile-card:nth-child(4) { transition-delay: 0.46s; }
          .mobile-menu.open .mobile-card:nth-child(5) { transition-delay: 0.58s; }

          .mobile-card:last-child {
            background: #FBBA16;
            margin-bottom: 0;
            z-index: 5;
          }
          .mobile-card:nth-child(1) { z-index: 1; }
          .mobile-card:nth-child(2) { z-index: 2; }
          .mobile-card:nth-child(3) { z-index: 3; }
          .mobile-card:nth-child(4) { z-index: 4; }

          .mobile-card-link {
            font-family: 'Anton', sans-serif;
            font-size: clamp(36px, 9vw, 52px);
            line-height: 1;
            color: #111;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 18px 24px;
            letter-spacing: 0.01em;
          }
          .mobile-card:last-child .mobile-card-link { color: #111; }
          .mobile-card-link:active { opacity: 0.7; }

          .mobile-card-num {
            font-family: 'Cabinet Grotesk', sans-serif;
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 0.18em;
            color: rgba(17,17,17,0.3);
            align-self: flex-start;
            margin-top: 6px;
          }

          .mobile-card:hover {
            box-shadow: 7px 7px 0px #111;
            transform: translateY(-2px) !important;
            z-index: 10;
          }

          .nav-mobile-btn:active { transform: translateY(1px) scale(0.96); opacity: 0.7; transition: transform 0.15s ease, opacity 0.15s ease; }
        `}</style>

        <nav style={{
          display: 'flex',
          alignItems: 'center',
          height: scrolled ? '42px' : '52px',
          padding: '0 32px',
          position: 'relative',
          transition: 'height 0.3s ease',
          overflow: 'visible',
        }}>

          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            style={{fontFamily:"'Anton',sans-serif", fontSize:'16px', color:'#111', letterSpacing:'0.02em', textDecoration:'none'}}
          >
            JOSE MANUEL
          </a>

          <div className="nav-desktop" style={{position:'absolute', left:'50%', transform:'translateX(-50%)', gap:'28px', alignItems:'center'}}>
            {links.slice(0, 4).map((link) => (
              <a key={link.id} href={`#${link.id}`} className="nav-link" onClick={(e) => handleNavClick(e, link.id)}>
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-contact nav-desktop" style={{marginLeft:'auto'}} onClick={(e) => handleNavClick(e, 'contact')}>
            Contacto
          </a>

          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{marginLeft:'auto', background:'none', border:'none', cursor:'pointer', fontFamily:"'Cabinet Grotesk',sans-serif", fontSize:'11px', fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'#111', padding:0}}
          >
            {menuOpen ? 'CERRAR' : 'MENÚ'}
          </button>

        </nav>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>

        <div style={{marginBottom:'24px', paddingLeft:'4px'}}>
          <span style={{fontFamily:"'Cabinet Grotesk',sans-serif", fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(239,230,222,0.4)'}}>
            — Navegación
          </span>
        </div>

        <div style={{display:'flex', flexDirection:'column'}}>
          {links.map((link, i) => (
            <div key={link.id} className="mobile-card">
              <a
                href={`#${link.id}`}
                className="mobile-card-link"
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
                <span className="mobile-card-num">0{i + 1}</span>
              </a>
            </div>
          ))}
        </div>

        <div style={{marginTop:'40px', paddingLeft:'4px'}}>
          <span style={{fontFamily:"'Cabinet Grotesk',sans-serif", fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(239,230,222,0.25)'}}>
            Jose Manuel · 2025
          </span>
        </div>
      </div>
    </>
  )
}