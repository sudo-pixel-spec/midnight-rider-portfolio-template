import { motion, useReducedMotion } from "framer-motion"

import Container from "../common/Container"
import GlowButton from "../common/GlowButton"

import heroBike from "../../assets/images/bike.jpg"
import { scrollToSection } from "../../lib/lenis"

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <motion.img
        src={heroBike}
        alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        initial={shouldReduceMotion ? false : { scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 2 }}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--bg)]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <Container className="relative z-20">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1 }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-blue-400">
            Lorem ipsum
          </p>

          <h1 className="font-['Bebas_Neue'] text-7xl uppercase leading-none md:text-9xl lg:text-[12rem]">
            Dolor
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <GlowButton onClick={() => scrollToSection("rides")}>
              Lorem Ipsum
            </GlowButton>

            <button
              type="button"
              onClick={() => scrollToSection("rider")}
              className="rounded-full border border-white/10 px-8 py-4 text-sm uppercase tracking-[0.3em] text-slate-300 transition hover:border-blue-500 hover:text-white"
            >
              Dolor Sit
            </button>
          </div>

          {!shouldReduceMotion && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-20 text-sm uppercase tracking-[0.4em] text-slate-500"
              aria-hidden="true"
            >
              Amet Consectetur
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
