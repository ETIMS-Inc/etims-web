import {CoreSidebarNavGroup} from "../components/core-sidebar/core-sidebar.model";

// TODO: use translations
export const coreSidebarNavGroups: CoreSidebarNavGroup[] = [
    [
        {
            name: "Favorites",
            icon: "star",
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
            icon: "grid",
            url: "/main",
        },
        {
            name: "Analytics",
            icon: "chart",
            url: "/main",
        },
        {
            name: "Grades",
            icon: "chart-vertical",
            url: "/main",
        },
        {
            name: "Icons",
            icon: "file",
            url: "/icons",
        },
    ],
];
