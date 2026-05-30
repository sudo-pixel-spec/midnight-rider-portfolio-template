import { useState, type MouseEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"

import { navLinks } from "../../data"
import { lenis, scrollToSection } from "../../lib/lenis"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault()
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed left-0 top-0 z-[60] w-full backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault()
              lenis.scrollTo(0)
            }}
            className="font-['Bebas_Neue'] text-3xl tracking-widest"
            aria-label="Hunter home"
          >
            HUNTER
          </a>

          <nav className="hidden gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleNavClick(event, link.id)}
                className="text-sm uppercase tracking-[0.2em] text-slate-300 transition hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-3xl text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-black"
          >
            <nav className="space-y-8 text-center" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNavClick(event, link.id)}
                  className="block font-['Bebas_Neue'] text-5xl uppercase tracking-widest text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
