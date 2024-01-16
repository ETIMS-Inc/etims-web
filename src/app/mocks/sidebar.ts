import {
    CoreSidebarNavGroup,
} from "../components/core-sidebar/core-sidebar.model";
import {NavItemChipType} from "../components/lib/nav-item/nav-item.model";

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
                type: NavItemChipType.INFO,
            }
        },
        {
            name: "Temp2",
            icon: "eye",
            url: "/Temp2",
            chip: {
                num: 2,
                type: NavItemChipType.WARNING,
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
            url: "/eye",
            chip: {
                num: 2,
                type: NavItemChipType.WARNING,
            },
            childrenItems: [
                {
                    name: "Recover password",
                    url: "/recover-password",
                    chip: {
                        num: 2,
                        type: NavItemChipType.WARNING,
                    }
                },
                {
                    name: "Settings",
                    url: "/settings",
                },
            ],
        },
    ],
];

export const coreSidebarNavBottomGroups: CoreSidebarNavGroup[] = [
    [
        {
            name: "sidebar.tab.settings",
            icon: "settings",
            url: "/settings",
        },
    ],
];
