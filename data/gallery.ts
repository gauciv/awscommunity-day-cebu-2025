export interface GalleryPhoto {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    src: "/images/community-gallery/community-pic1.jpg",
    alt: "AWS Community Day Cebu - Workshop Session",
    title: "Hands-on Learning",
    description: "Participants engaging in interactive AWS workshops and technical sessions",
  },
  {
    id: 2,
    src: "/images/community-gallery/community-pic2.jpg",
    alt: "AWS Community Day Cebu - Keynote Presentation",
    title: "Expert Insights",
    description: "Industry leaders sharing their knowledge and AWS best practices",
  },
  {
    id: 3,
    src: "/images/community-gallery/community-pic3.jpg",
    alt: "AWS Community Day Cebu - Networking Session",
    title: "Community Networking",
    description: "Developers and cloud enthusiasts connecting and sharing experiences",
  },
  {
    id: 4,
    src: "/images/community-gallery/community-pic4.jpg",
    alt: "AWS Community Day Cebu - Technical Demo",
    title: "Live Demonstrations",
    description: "Real-world AWS solutions and architecture demonstrations",
  },
  {
    id: 5,
    src: "/images/community-gallery/community-pic5.jpg",
    alt: "AWS Community Day Cebu - Group Discussion",
    title: "Collaborative Learning",
    description: "Interactive discussions and knowledge sharing among participants",
  },
  {
    id: 6,
    src: "/images/community-gallery/community-pic6.jpg",
    alt: "AWS Community Day Cebu - Community Group",
    title: "Together We Grow",
    description: "The vibrant AWS community in Cebu coming together for learning and growth",
  },
]
