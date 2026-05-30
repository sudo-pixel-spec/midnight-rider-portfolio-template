import { motion } from "framer-motion"

import Container from "../common/Container"
import GlassCard from "../common/GlassCard"
import Reveal from "../common/Reveal"
import SectionTitle from "../common/SectionTitle"

import { rides } from "../../data"

const Rides = () => {
  return (
    <section id="rides" className="py-32">
      <Container>
        <Reveal>
          <SectionTitle
            title="Sed Eiusmod"
            subtitle="Tempor incididunt"
          />
        </Reveal>

        <div className="space-y-8">
          {rides.map((ride, index) => (
            <Reveal key={ride.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="group relative overflow-hidden p-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
                        0{index + 1}
                      </p>

                      <h3 className="text-4xl font-black uppercase">
                        {ride.title}
                      </h3>

                      <p className="mt-3 text-slate-400">{ride.category}</p>
                    </div>

                    <motion.div
                      whileHover={{ x: 10 }}
                      className="text-5xl text-blue-400"
                      aria-hidden="true"
                    >
                      →
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Rides
