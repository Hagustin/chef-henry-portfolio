interface Project {
    title: string;
    description: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
}

const projects: Project[] = [
    {
        title: "FlexPay",
        description: "A fintech solution enabling digital payments in rural areas. Features secure transactions, QR code payments, and user authentication.",
        techStack: ["React", "Node.js", "MongoDB", "GraphQL", "TypeScript"],
        liveUrl: "https://flexpay-nmt5.onrender.com/",
        githubUrl: "https://github.com/Hagustin/FlexPay",
        imageUrl: "/images/flexpay.png"
    },
    {
        title: "CryptoLab",
        description: "A crypto news and portfolio tracking platform that integrates live price data and market news.",
        techStack: ["React", "Express", "MongoDB", "TailwindCSS", "TypeScript"],
        liveUrl: "https://cryptolab.example.com",
        githubUrl: "https://github.com/Hagustin/CryptoLab",
        imageUrl: "/images/cryptolab.png"
    },
    {
        title: "Grub",
        description: "A group project focused on restaurant menu management, featuring a reservation system and order tracking.",
        techStack: ["Vue.js", "Firebase", "TailwindCSS"],
        liveUrl: "https://grub.example.com",
        githubUrl: "https://github.com/team/grub",
        imageUrl: "/images/grub.png"
    },
    {
        title: "TradieConnect (Upcoming)",
        description: "A personal project aimed at connecting tradespeople with clients through a streamlined job booking platform.",
        techStack: ["React", "Node.js", "PostgreSQL", "GraphQL"],
        imageUrl: "/images/tradieconnect.png"
    }
];

export default projects;
