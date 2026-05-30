import { motion, useReducedMotion } from "framer-motion"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

import Container from "../common/Container"
import GlowButton from "../common/GlowButton"

import { socials } from "../../data"

const socialIcons = [FaInstagram, FaLinkedin, FaGithub]

const Contact = () => {
  const shouldReduceMotion = useReducedMotion()

  const motionProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: delay > 0 ? 30 : 40 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay, duration: delay > 0 ? 0.8 : 1 },
        }

  return (
    <section id="contact" className="relative overflow-hidden py-40">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>
        <div className="relative z-10 text-center">
          <motion.p
            {...motionProps()}
            className="mb-6 text-sm uppercase tracking-[0.5em] text-blue-400"
          >
            Ullamco laboris
          </motion.p>

          <motion.h2
            {...motionProps()}
            className="mx-auto max-w-5xl font-['Bebas_Neue'] text-6xl uppercase leading-none md:text-8xl lg:text-[10rem]"
          >
            Nisi Ut
            <br />
            Aliquip Ex
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: 1 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            Ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </motion.p>

          <motion.div
            {...motionProps(0.4)}
            className="mt-12"
          >
            <GlowButton href="mailto:lorem@ipsum.com">
              Lorem Ipsum
            </GlowButton>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: 1 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-6"
          >
            {socials.map((social, index) => {
              const Icon = socialIcons[index]

              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-slate-300 backdrop-blur-xl transition duration-500 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
                >
                  <span className="text-xl text-blue-400">
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="text-sm uppercase tracking-[0.2em]">
                    {social.name}
                  </span>
                </a>
              )
            })}
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: 1 }}
            className="mt-24"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
              Excepteur sint occaecat cupidatat.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
