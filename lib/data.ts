export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },  
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Pet Adoption Platform",
    description:
      "This platform for pet adoption incorporates secure user authentication via Django Allauth, alongside browsing capabilities and advanced searching and filtering using ORM. It offers a responsive design with Tailwind CSS, detailed pet profiles, and a streamlined adoption process. Users can manage adoption requests, engage in real-time chat via WebSockets, and maintain personal profiles with a favorite list. The platform also includes pet management for admins and a reporting functionality for user safety.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL"],
    repoUrl: "https://github.com/eidraffin/pet-adoption-platform",
  },
  {
    title: "Dunphy Estates",
    description:
      "An interactive real estate listing platform that enables users to find and view properties, featuring advanced search options with customizable filters. It incorporates secure user authentication through OAuth with Firebase, ensuring a seamless login experience. Users can easily browse listings, utilize enhanced search capabilities, and access detailed property profiles.",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Firebase"],
    repoUrl: "https://github.com/eidraffin/dunphy-estates",
  },
  {
    title: "EcoSaviour: Implementing an integrated agricultural system",
    description:
      "Modern agriculture and landscaping have revolutionized plant care with innovative solutions with the help of IoT. This system Ecosaviour combines sensors, intelligent controllers, valves, detecting harm from substances and bugs, and various irrigation methods, revolutionizing the way we water gardens, lawns, and fields.",
    tags: [ "C++", "Arduino", "Next.js", "TypeScript", "Flask"],
    repoUrl: "https://github.com/eidraffin/EcoSaviour-Implementing-an-integrated-agricultural-system",
  },
] as const;