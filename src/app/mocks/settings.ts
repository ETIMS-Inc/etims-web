import {NavItem} from "../components/lib/nav-item/nav-item.model";

export const settingsNavMenuItems: NavItem[] = [
    {
        name: "settings.menu.tab.profile",
        icon: "user-square",
        url: "/home",
    },
    {
        name: "settings.menu.tab.privacy",
        icon: "lock-on",
        url: "/account",
    },
    {
        name: "settings.menu.tab.security",
        icon: "shield",
        url: "/courses",
    },
    {
        name: "settings.menu.tab.notifications",
        icon: "bell",
        url: "/icons",
    },
    {
        name: "settings.menu.tab.integrations",
        icon: "refresh",
        url: "/icons",
    },
];
