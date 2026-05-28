import { TbLayoutDashboard, TbBrandReact, TbPalette, TbWorldWww, TbShoppingCart, TbCode } from 'react-icons/tb'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'

export const services = [
    {
        id: "01",
        icon: <TbLayoutDashboard size={26} />,
        title: "UI/UX Design",
        description: "Crafting clean, intentional interfaces that feel modern and well thought out. Every pixel has a purpose.",
        tags: ["Figma", "Wireframing", "Prototyping"],
    },
    {
        id: "02",
        icon: <TbBrandReact size={26} />,
        title: "React Development",
        description: "Building fast, scalable React applications with clean component architecture and smooth user experiences.",
        tags: ["ReactJS", "JavaScript", "TailwindCSS"],
    },
    {
        id: "03",
        icon: <HiOutlineDevicePhoneMobile size={26} />,
        title: "Responsive Design",
        description: "Pixel-perfect layouts that look and feel great on every screen — from mobile to widescreen.",
        tags: ["Mobile First", "CSS Grid", "Flexbox"],
    },
    {
        id: "04",
        icon: <TbWorldWww size={26} />,
        title: "Landing Pages",
        description: "High-converting landing pages that capture attention, communicate value, and drive action.",
        tags: ["HTML", "CSS", "Performance"],
    },
    {
        id: "05",
        icon: <TbShoppingCart size={26} />,
        title: "CMS & E-Commerce",
        description: "Shopify and WordPress setups tailored to your brand — beautiful storefronts that sell.",
        tags: ["Shopify", "WordPress", "WooCommerce"],
    },
    {
        id: "06",
        icon: <TbCode size={26} />,
        title: "Frontend Consulting",
        description: "Code reviews, architecture advice, and hands-on help to level up your existing frontend projects.",
        tags: ["Code Review", "Mentorship", "Best Practices"],
    },
]

export const process = [
    {
        step: "01",
        title: "Discovery",
        description: "We start with a conversation. I learn about your goals, your users, and what success looks like for your project.",
    },
    {
        step: "02",
        title: "Planning",
        description: "I map out the structure, tech stack, and timeline. You get a clear picture of what's being built and when.",
    },
    {
        step: "03",
        title: "Design & Build",
        description: "I design and develop in parallel — sharing progress along the way so there are no surprises at the end.",
    },
    {
        step: "04",
        title: "Review & Refine",
        description: "You review, give feedback, and I refine until it's exactly right. No rushed handoffs.",
    },
    {
        step: "05",
        title: "Launch",
        description: "I handle deployment, final testing, and make sure everything is live and running smoothly.",
    },
    {
        step: "06",
        title: "Support",
        description: "After launch, I'm still available for updates, fixes, and improvements as your product grows.",
    },
]

export const pricing = [
    {
        plan: "Starter",
        price: "₦80,000",
        description: "Perfect for individuals and small businesses needing a clean online presence.",
        features: [
            "Single page website",
            "Mobile responsive",
            "Basic animations",
            "Contact form",
            "1 revision round",
            "5-day delivery",
        ],
        cta: "Get Started",
        highlight: false,
    },
    {
        plan: "Professional",
        price: "₦200,000",
        description: "For businesses that need a polished, multi-page site with advanced features.",
        features: [
            "Up to 5 pages",
            "React application",
            "Advanced animations",
            "CMS integration",
            "3 revision rounds",
            "10-day delivery",
            "1 month support",
        ],
        cta: "Most Popular",
        highlight: true,
    },
    {
        plan: "Custom",
        price: "Let's Talk",
        description: "For complex projects with unique requirements. Fully tailored to your needs.",
        features: [
            "Unlimited pages",
            "Custom functionality",
            "E-commerce setup",
            "Performance optimization",
            "Unlimited revisions",
            "Priority support",
            "3 months support",
        ],
        cta: "Contact Me",
        highlight: false,
    },
]

export const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "It depends on the scope. A simple landing page can be done in 3-5 days. A full multi-page React app usually takes 2-4 weeks. I'll give you a realistic timeline upfront.",
    },
    {
        question: "Do you work with clients outside Nigeria?",
        answer: "Absolutely. I work remotely with clients worldwide. Communication is mostly via email, WhatsApp, or video calls — whatever works best for you.",
    },
    {
        question: "What information do you need to get started?",
        answer: "A brief description of your project, your target audience, any design references you like, and your timeline. We can figure out the rest together.",
    },
    {
        question: "Do you offer revisions?",
        answer: "Yes. Every plan includes at least one revision round. I want you to be genuinely happy with the result, so I'll work with you until it's right.",
    },
    {
        question: "Can you work with my existing codebase?",
        answer: "Yes. Whether it's a legacy project or a modern stack, I can jump in, understand the existing code, and make improvements without breaking things.",
    },
    {
        question: "How do payments work?",
        answer: "I typically take 50% upfront and 50% on completion. For larger projects we can agree on milestone-based payments.",
    },
]