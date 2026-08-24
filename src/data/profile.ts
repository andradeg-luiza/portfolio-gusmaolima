export interface Profile {
  name: string;
  tagline: string;
  photoUrl: string;
  photoAlt: string;
  bio: string[];
  links: { label: string; url: string }[];
}

export const profile: Profile = {
  name: "Luiza Gusmão de Andrade Lima",
  tagline: "Desenvolvedora de Software | Criando sistemas com IA",
  photoUrl: "/images/profile.jpeg",
  photoAlt: "Foto de perfil de Luiza Gusmão de Andrade Lima",
  bio: [
    "Mais de 16 anos de experiência em tecnologia, passando por Suporte Técnico, Quality Assurance e desenvolvimento de software.",
    "Experiência prática com C# .NET, SQL, JavaScript, APIs REST e automação de testes (Cypress, PactumJS, K6), sempre com foco em transformar requisitos técnicos em soluções de qualidade.",
    "Atualmente me dedico a expandir minha atuação como Desenvolvedora de Software, explorando projetos com IA generativa, automação e plataformas low-code — como os sistemas documentados neste portfólio.",
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/andradegluiza/" },
    { label: "GitHub", url: "https://github.com/andradeg-luiza" },
  ],
};
