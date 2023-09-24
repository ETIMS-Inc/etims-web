export interface HomePageSolution {
    icon: string;
    caption: string;
    description: string;
}

export interface HomePagePlan {
    icon: string;
    tag: string;
    features: string[];
    pricing: string;
    users: string;
    plan: () => void;
}

export interface HomePageFAQ {
    question: string;
    details: string;
}

export interface HomePageContacts {
    caption: string;
    details: string;
}
