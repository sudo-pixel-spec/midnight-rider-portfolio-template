import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import Reveal from "../common/Reveal"

import bike from "../../assets/images/bike.jpg"

const images = [
  {
    src: bike,
    alt: "Lorem ipsum dolor sit amet",
  },
  {
    src: bike,
    alt: "Consectetur adipiscing elit sed do",
  },
  {
    src: bike,
    alt: "Eiusmod tempor incididunt ut labore",
  },
  {
    src: bike,
    alt: "Et dolore magna aliqua ut enim",
  },
  {
    src: bike,
    alt: "Minim veniam quis nostrud exercitation",
  },
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-32">
      <Container>
        <Reveal>
          <SectionTitle
            title="Ut Labore"
            subtitle="Et dolore magna"
          />
        </Reveal>

        <div className="columns-1 gap-6 md:columns-2">
          {images.map((image) => (
            <Reveal key={image.alt}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="mb-6 rounded-3xl"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Gallery
