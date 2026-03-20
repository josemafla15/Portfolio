import Hero        from '@/components/sections/Hero'
import About       from '@/components/sections/About'
import Projects    from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Contact     from '@/components/sections/Contact'
import Navbar from '@/components/{sections,ui}/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}
