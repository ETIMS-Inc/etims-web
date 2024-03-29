import {
    CoreSidebarChipType,
    CoreSidebarNavGroup,
} from "../components/core-sidebar/core-sidebar.model";

// TODO: use translations
export const coreSidebarNavGroups: CoreSidebarNavGroup[] = [
    [
        {
            name: "sidebar.tab.favorites",
            icon: "star",
            url: "/main",
        },
        {
            name: "sidebar.tab.recents",
            icon: "time",
            url: "/main",
        },
    ],
    [
        {
            name: "sidebar.tab.home",
            icon: "home",
            url: "/home",
        },
        {
            name: "sidebar.tab.account",
            icon: "user-round",
            url: "/account",
        },
        {
            name: "sidebar.tab.courses",
            icon: "grid",
            url: "/courses",
        },
        {
            name: "sidebar.tab.icons",
            icon: "file",
            url: "/icons",
        },
    ],
    [
        {
            name: "Temp1",
            icon: "eye-off",
            url: "/Temp1",
            chip: {
                num: 5,
                type: CoreSidebarChipType.INFO,
            }
        },
        {
            name: "Temp2",
            icon: "eye",
            url: "/Temp2",
            chip: {
                num: 2,
                type: CoreSidebarChipType.WARNING,
            }
        },
    ],
    [
        {
            name: "404",
            icon: "eye-off",
            url: "/404",
        },
        {
            name: "sidebar.tab.settings",
            icon: "eye",
            url: "/settings",
            chip: {
                num: 2,
                type: CoreSidebarChipType.WARNING,
            },
            childrenItems: [
                {
                    name: "Recover password",
                    url: "/recover-password",
                    chip: {
                        num: 2,
                        type: CoreSidebarChipType.WARNING,
                    }
                },
                {
                    name: "Temp",
                    url: "/main",
                },
            ],
        },
    ],
];
