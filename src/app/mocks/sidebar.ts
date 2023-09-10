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
            name: "Home",
            icon: "home",
            url: "/home",
        },
        {
            name: "Account",
            icon: "user-round",
            url: "/account",
        },
        {
            name: "Courses",
            icon: "grid",
            url: "/courses",
        },
        {
            name: "Icons",
            icon: "file",
            url: "/icons",
        },
    ],
    [
        {
            name: "Temp1",
            icon: "eye-off",
            url: "/Temp1",
        },
        {
            name: "Temp2",
            icon: "eye",
            url: "/Temp2",
        },
    ],
    [
        {
            name: "404",
            icon: "eye-off",
            url: "/404",
        },
        {
            name: "Settings",
            icon: "eye",
            url: "/settings",
            childrenItems: [
                {
                    name: "Recover password",
                    url: "/recover-password",
                },
                {
                    name: "Temp",
                    url: "/main",
                },
            ],
        },
    ],
];
