import {CoreSidebarNavGroup} from "../components/core-sidebar/core-sidebar.model";


// TODO: use translations
export const coreSidebarNavGroups: CoreSidebarNavGroup[] = [
    [
        {
            name: "Favorites",
            icon: "heart",
            url: "/main",
        },
        {
            name: "Recents",
            icon: "time",
            url: "/main",
        },
    ],
    [
        {
            name: "Dashboard",
            icon: "menu-square",
            url: "/main",
        },
        {
            name: "Analytics",
            icon: "analytics",
            url: "/main",
        },
        {
            name: "Reports",
            icon: "analytics",
            url: "/main",
        },
        {
            name: "Icons",
            icon: "eye-open",
            url: "/icons",
        },
    ],
];
