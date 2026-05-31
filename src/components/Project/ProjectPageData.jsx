import ponytelle from "../../assets/ponytelle.webp"
import shopbuy from "../../assets/shopbuy.webp"
import salarySplit from "../../assets/salary-spliter.webp"
import qikMeet from "../../assets/qikMeet.webp"
import aippt from "../../assets/aippt.webp"
import nairabank from "../../assets/nairabank.webp"
import riyans from "../../assets/riyans.webp"
import hospitality from "../../assets/hospitality.webp"

export const allProjects = [
    {
        id: 1,
        title: "Ponytelle",
        description: "Luxury wig e-commerce with persistent cart, global search, and wishlist — built to feel like a real brand.",
        image: ponytelle,
        category: "E-Commerce",
        stack: ["React", "Redux Toolkit", "Tailwind CSS"],
        liveUrl: "#",
        codeUrl: "#",
        featured: true,
    },
    {
        id: 2,
        title: "ShopBuy Dashboard",
        description: "E-commerce admin UI with lazy-loaded pages, dark/light theme, and Context API state management.",
        image: shopbuy,
        category: "Dashboard",
        stack: ["React", "Vite", "Tailwind CSS"],
        liveUrl: "https://shop-buy-admin.vercel.app",
        codeUrl: "#",
        featured: true,
    },
    {
        id: 3,
        title: "Salary Splitter",
        description: "Smart budgeting tool that splits your salary into expenses, savings, and emergency funds in real time.",
        image: salarySplit,
        category: "Utility",
        stack: ["HTML", "CSS", "JavaScript"],
        liveUrl: "#",
        codeUrl: "#",
        featured: false,
    },
    {
        id: 4,
        title: "QikMeet",
        description: "Instant video calls with shareable room links — no account, no friction, just click and meet.",
        image: qikMeet,
        category: "Real-Time App",
        stack: ["JavaScript", "ZEGOCLOUD API"],
        liveUrl: "#",
        codeUrl: "#",
        featured: true,
    },
    {
        id: 5,
        title: "AIPPT",
        description: "Full-stack AI app that turns a topic into a downloadable PowerPoint — with live editor and PDF preview.",
        image: aippt,
        category: "Full-Stack / AI",
        stack: ["React", "Node.js", "OpenAI API"],
        liveUrl: "#",
        codeUrl: "#",
        featured: true,
    },
    {
        id: 6,
        title: "NairaBank",
        description: "A banking dashboard UI that mirrors real fintech products — clean, trustworthy, and precision-designed.",
        image: nairabank,
        category: "UI Design",
        stack: ["React", "Tailwind CSS"],
        liveUrl: "#",
        codeUrl: "#",
        featured: false,
    },
    {
        id: 7,
        title: "Riyans",
        description: "A modern multi-page brand website with smooth animations and a polished, responsive layout.",
        image: riyans,
        category: "Web Design",
        stack: ["React", "Tailwind CSS", "Framer Motion"],
        liveUrl: "#",
        codeUrl: "#",
        featured: false,
    },
    {
        id: 8,
        title: "Hospitality",
        description: "A clean hospitality landing page designed to convert visitors into guests with a warm, premium feel.",
        image: hospitality,
        category: "Web Design",
        stack: ["React", "Tailwind CSS"],
        liveUrl: "#",
        codeUrl: "#",
        featured: false,
    },
]

export const categories = ["All", "E-Commerce", "Dashboard", "Utility", "Real-Time App", "Full-Stack / AI", "UI Design", "Web Design"]