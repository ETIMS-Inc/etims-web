import {
    HomePageContacts,
    HomePageFAQ,
    HomePagePlan,
    HomePageSolution,
} from "../components/pages/home-page/home-page.model";
import {Color} from "../models/colors";

export const homePageSolutions: HomePageSolution[] = [
    {
        icon: "dollar-coins",
        caption: "Optimize Your Spending",
        description: "We present you a proposal and discuss niffty-gritty like",
    },
    {
        icon: "mountain",
        caption: "Achieve Top Knowledge's",
        description: "We present you a proposal and discuss niffty-gritty like",
    },
    {
        icon: "statistics",
        caption: "Business Idea Planning",
        description: "We present you a proposal and discuss niffty-gritty like",
    },
    {
        icon: "suitcase",
        caption: "Instant Learning Process",
        description: "We present you a proposal and discuss niffty-gritty like",
    },
];

export const homePagePlans: HomePagePlan[] = [
    {
        icon: "logo",
        tag: "CLOUD",
        features: [
            "Up to 15 courses",
            "Up to 30 users",
            "Reporting and analytics",
            "Chats and dashboards",
            "Managing courses and assignments",
        ],
        pricing: "FREE",
        users: "0-30",
        plan: () => {},
    },
    {
        icon: "logo",
        tag: "CLOUD PLUS",
        features: [
            "Up to 15 courses",
            "Up to 30 users",
            "Reporting and analytics",
            "Chats and dashboards",
            "Managing courses and assignments",
        ],
        pricing: "100 $ / month",
        users: "0-30",
        plan: () => {},
    },
    {
        icon: "logo",
        tag: "ENTERPRISE",
        features: [
            "Up to 15 courses",
            "Up to 30 users",
            "Reporting and analytics",
            "Chats and dashboards",
            "Managing courses and assignments",
        ],
        pricing: "CUSTOM",
        users: "CUSTOM",
        plan: () => {},
    },
];

export const homePageFAQsFirst: HomePageFAQ[] = [
    {
        question: "Who did we work with?",
        details: "Most of our clients are large financial organizations and companies. You can view the list of clients who have given permission to publish works in the Recent Works block",
    },
    {
        question: "What services do we offer to clients?",
        details: "Most of our clients are large financial organizations and companies. You can view the list of clients who have given permission to publish works in the Recent Works block",
    },
    {
        question: "How is the cost of the project formed?",
        details: "Most of our clients are large financial organizations and companies. You can view the list of clients who have given permission to publish works in the Recent Works block",
    },
];

export const homePageFAQsSecond: HomePageFAQ[] = [
    {
        question: "Who owns the right to created solutions?",
        details: "Most of our clients are large financial organizations and companies. You can view the list of clients who have given permission to publish works in the Recent Works block",
    },
    {
        question: "What technologies are used?",
        details: "Most of our clients are large financial organizations and companies. You can view the list of clients who have given permission to publish works in the Recent Works block",
    },
    {
        question: "How long does it take to develop a project?",
        details: "Most of our clients are large financial organizations and companies. You can view the list of clients who have given permission to publish works in the Recent Works block",
    },
];

export const homePageFAQs: Record<string, HomePageFAQ[]> = {
    first: homePageFAQsFirst,
    second: homePageFAQsSecond,
};

export const homePageContacts: HomePageContacts[] = [
    {
        caption: "Phone",
        details: "+81-258-47-1377",
    },
    {
        caption: "Email",
        details: "contactus@gmail.com",
    },
    {
        caption: "Address",
        details: "3011 Earl Rudder Fwy Suite 100,College Station, TX 77845",
    },
    {
        caption: "Hours",
        details: "Open 8 AM to 5 PM",
    },
];
