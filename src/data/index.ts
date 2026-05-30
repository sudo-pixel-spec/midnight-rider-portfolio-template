export type Ride = {
  id: number
  title: string
  category: string
}

export type TimelineEntry = {
  year: string
  title: string
  description: string
}

export type SkillGroup = {
  title: string
  description: string
  skills: string[]
}

export type GalleryImage = {
  src: string
  alt: string
}

export type SocialLink = {
  name: string
  link: string
}

export type NavLink = {
  label: string
  id: string
}

export const navLinks: NavLink[] = [
  { label: "Rider", id: "rider" },
  { label: "Specs", id: "specs" },
  { label: "Rides", id: "rides" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
]

export const rides: Ride[] = [
  {
    id: 1,
    title: "Lorem Ipsum",
    category: "Dolor sit amet",
  },
  {
    id: 2,
    title: "Consectetur",
    category: "Adipiscing elit",
  },
  {
    id: 3,
    title: "Sed Eiusmod",
    category: "Tempor incididunt",
  },
]

export const timeline: TimelineEntry[] = [
  {
    year: "0001",
    title: "Lorem ipsum dolor",
    description:
      "Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    year: "0002",
    title: "Ut labore et dolore",
    description:
      "Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    year: "0003",
    title: "Ullamco laboris nisi",
    description:
      "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: ["Ipsum", "Dolor", "Sit", "Amet"],
  },
  {
    title: "Consectetur",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: ["Adipiscing", "Elit", "Sed", "Eiusmod"],
  },
  {
    title: "Tempor",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    skills: ["Incididunt", "Labore", "Dolore", "Magna"],
  },
  {
    title: "Aliqua",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    skills: ["Veniam", "Quis", "Nostrud", "Exercitation"],
  },
]

export const socials: SocialLink[] = [
  {
    name: "Lorem",
    link: "https://instagram.com",
  },
  {
    name: "Ipsum",
    link: "https://linkedin.com",
  },
  {
    name: "Dolor",
    link: "https://github.com",
  },
]