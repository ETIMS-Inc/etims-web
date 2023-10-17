import {NavItem} from "../components/lib/nav-item/nav-item.model";

export const settingsNavMenuItems: NavItem[] = [
    {
        name: "settings.menu.tab.profile",
        icon: "user-square",
        url: "/settings/profile", // TODO: rework with relative path?
    },
    {
        name: "settings.menu.tab.privacy",
        icon: "lock-on",
        url: "/settings/privacy",
    },
    {
        name: "settings.menu.tab.security",
        icon: "shield",
        url: "/settings/security",
    },
    {
        name: "settings.menu.tab.notifications",
        icon: "bell",
        url: "/settings/notifications",
    },
    {
        name: "settings.menu.tab.integrations",
        icon: "refresh",
        url: "/settings/integrations",
    },
];
