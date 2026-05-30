import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import Reveal from "../common/Reveal"

import { timeline } from "../../data"

const Rider = () => {
  return (
    <section id="rider" className="relative py-32">
      <Container>
        <Reveal>
          <SectionTitle
            title="Lorem Ipsum"
            subtitle="Dolor sit amet"
          />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Reveal>

          <Reveal>
            <div className="space-y-8">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="border-l border-blue-500 pl-6"
                >
                  <p className="text-sm tracking-widest text-blue-400">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-2 text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Rider
