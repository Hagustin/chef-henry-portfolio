interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    liveDemo?: string;
    github?: string;
    image?: string;
}

const projects: Project[] = [
    {
        id: "flexpay",
        title: "FlexPay",
        description: "A fintech solution enabling digital payments in rural areas. Features secure transactions, QR code payments, and user authentication.",
        techStack: ["React", "Node.js", "MongoDB", "GraphQL", "TypeScript"],
        liveDemo: "https://flexpay-nmt5.onrender.com/",
        github: "https://github.com/Hagustin/FlexPay",
        image: "/images/flexpay.png"
    },
    {
        id: "cryptolab",
        title: "CryptoLab",
        description: "A crypto news and portfolio tracking platform that integrates live price data and market news.",
        techStack: ["React", "Express", "MongoDB", "TailwindCSS", "TypeScript"],
        liveDemo: "https://cryptolab.example.com",
        github: "https://github.com/Hagustin/CryptoLab",
        image: "/images/cryptolab.png"
    },
    {
        id: "grub",
        title: "Grub",
        description: "A group project focused on restaurant menu management, featuring a reservation system and order tracking.",
        techStack: ["Vue.js", "Firebase", "TailwindCSS"],
        liveDemo: "https://grub.example.com",
        github: "https://github.com/team/grub",
        image: "/images/grub.png"
    },
    { 
        id: "tradieconnect",
        title: "TradieConnect (Upcoming)",
        description: "A personal project aimed at connecting tradespeople with clients through a streamlined job booking platform.",
        techStack: ["React", "Node.js", "PostgreSQL", "GraphQL"],
        image: "/images/tradieconnect.png"
    }
];

export default projects;
