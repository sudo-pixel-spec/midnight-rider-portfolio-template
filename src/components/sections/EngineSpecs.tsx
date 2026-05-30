import Container from "../common/Container"
import GlassCard from "../common/GlassCard"
import Reveal from "../common/Reveal"
import SectionTitle from "../common/SectionTitle"

import { skillGroups } from "../../data"

const EngineSpecs = () => {
  return (
    <section id="specs" className="py-32">
      <Container>
        <Reveal>
          <SectionTitle
            title="Consectetur"
            subtitle="Adipiscing elit"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <GlassCard className="p-8 transition duration-500 hover:border-blue-500/40 hover:bg-blue-500/5">
                <h3 className="font-['Bebas_Neue'] text-5xl uppercase tracking-wide">
                  {group.title}
                </h3>

                <p className="mt-4 max-w-md text-slate-400">
                  {group.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.15em] text-slate-300 transition hover:border-blue-500/40 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default EngineSpecs
