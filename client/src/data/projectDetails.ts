const projectDetails = {
    flexpay: {
        impact: "FlexPay enables cashless transactions for remote areas, improving financial inclusion. Rural businesses can now accept digital payments, increasing sales and security.",
        struggles: "Developing an easy-to-use interface while ensuring security was a major challenge. Collaboration was tough due to remote teams, but we successfully implemented secure transactions and a scalable system.",
        future: "Integration with more local banks and micro-finance institutions. Adding AI-powered fraud detection and smart budgeting tools.",
        stats: {
            usersImpacted: 5000,
            transactionsPerDay: 1200, // Ensuring consistent naming
            growthRate: 35,
        }
    },
    cryptolab: {
        impact: "CryptoLab provides real-time cryptocurrency news and tracking, empowering traders with reliable data.",
        struggles: "APIs had rate limits, requiring optimization. Implementing real-time updates was challenging but rewarding.",
        future: "Developing a mobile app, adding predictive analytics for market trends.",
        stats: {
            usersImpacted: 2000,
            transactionsPerDay: null, // Standardizing so TypeScript doesn't throw errors
            articlesFetched: 8000, // Different metric for CryptoLab
            growthRate: 20,
        }
    },
};

export default projectDetails;
