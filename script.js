const strategies = [
    "Create a middle or aggregating layer",
    "Build a marketplace",
    "Build a data co-op",
    "Offer a more flexible or customizable product",
    "Make it developer-friendly",
    "Build it as SaaS",
    "Make an expensive product cheaper or free",
    "Target the long tail of startups or SMBs",
    "Build a bundled offering",
    "Build a messaging interaction model",
    "Make it mobile-native",
    "Build enterprise software that can be used as consumer software",
    "Leverage AI or machine learning to offer a unique product",
    "Create a new interaction model",
    "Make it a service",
    "Commercialize popular open source",
    "Surface data in a unique way (third-party or proprietary)",
    "Build an assistive experience",
    "Capitalize on an emerging platform shift",
    "Sell enabling technology",
    "Target a narrow segment of the market or use case",
    "Automate a process",
    "Build a plug-and-play solution",
    "Make it peer-to-peer",
    "Create original and exclusive content",
    "Streamline a process through technology",
    "Offer loans or insurance",
    "Leverage hardware to unlock new use cases",
    "Target an emerging market",
    "Create a bridge between online and offline"
];

const domains = [
    "Finance", "Productivity", "Hiring", "Communication", "Workflow",
    "Storage", "Analytics", "Customer Support", "Marketing", "Legal",
    "Office", "Software Development", "Loans", "Insurance", "Real Estate",
    "Transportation", "Healthcare", "eCommerce", "Security", "Content Management",
    "Market Research", "Business Intelligence", "Human Resources", "Advertising",
    "Industrials & Manufacturing", "Local Services", "Sales & CRM", "Biotech",
    "Media", "Government", "Food & Hospitality", "Travel", "Nonprofits",
    "Education", "Agriculture"
];

document.getElementById('generate').addEventListener('click', function() {
    const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    document.getElementById('result').textContent = `${randomStrategy} for ${randomDomain}`;
});
