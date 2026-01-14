export interface Speaker {
  name: string
  position: string
  image: string
  isKeynote?: boolean
}

export const keynoteSpeaker: Speaker = {
  name: "Raphael Quisumbing",
  position: "AWS Community Hero | IT & Cloud Advisor | Head of Product Innovation MediaTrack",
  image: "/images/speakers/raphael-quisumbing.jpg",
  isKeynote: true,
}

export const speakers: Speaker[] = [
  {
    name: "Raphael Jambalos",
    position: "AWS Community Hero | Head of Modernization and Security, eCloudValley Technology Philippines",
    image: "/images/speakers/raphael-jambalos.jpg",
  },
  {
    name: "Joshua Arvin Lat",
    position: "AWS Machine Learning Hero | Chief Technology Officer (CTO) of NuWorks Interactive Labs, Inc",
    image: "/images/speakers/joshua-arvin-lat.jpg",
  },
  {
    name: "Aldwyn Cabarrubias",
    position: "Senior Ops Engineer at ING Hubs Philippines",
    image: "/images/speakers/aldwyn-cabarrubias.jpg",
  },
  {
    name: "Cyrus Pastelero",
    position: "Senior Software Engineer | Reap | Certified AWS Solution Architect | Ex-Founder",
    image: "/images/speakers/cyrus-pastelero.jpeg",
  },
  {
    name: "Andrew Matheu",
    position: "Founder and CEO of TechStart TV",
    image: "/images/speakers/andrew-matheu.jpg",
  },
  {
    name: "Cleo Credo",
    position: "CTO of Full Scale | Google Developer Expert | Co-lead PizzaPy",
    image: "/images/speakers/cleo-credo.jpg",
  },
  {
    name: "Ron Michael Khu",
    position: "Sr. Java Developer/Software Architect",
    image: "/images/speakers/ron-michael-khu.jpeg",
  },
  {
    name: "Rafael Louie Miguel",
    position: "Fullstack Engineer/Project Lead @ TutorialsDojo",
    image: "/images/speakers/rafael-louie-miguel.jpg",
  },
  {
    name: "Nhyl Bryle Ibanez",
    position: "DevSecOps Engineer at Ingenuity Software",
    image: "/images/speakers/nhyl-bryle-ibanez.jpg",
  },
  {
    name: "Rodrick Alcantara",
    position: "Software Engineer and Tech Content Creator",
    image: "/images/speakers/rodrick-alcantara.jpg",
  },
  {
    name: "Ace Kenneth Batacandulo",
    position: "Cloud Consultant at Tutorials Dojo",
    image: "/images/speakers/ace-kenneth-batacandulo.jpg",
  },
  {
    name: "Trixie Nicole Organiza",
    position: "Cloud Engineer Intern at Elevate Innovations Corp",
    image: "/images/speakers/trixie-nicole-organiza.jpg",
  },
  {
    name: "Romar Cablao",
    position: "AWS Community Builder",
    image: "/images/speakers/romar-cablao.png",
  },
  {
    name: "Mark Achiles Flores Jr.",
    position: "Cloud Engineer at Elevate Innovations Corp.",
    image: "/images/speakers/mark-achiles-flores.jpeg",
  },
]
