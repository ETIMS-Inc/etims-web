import {EtcIconType} from "../lib/icon/icon.model";

export enum CoreSidebarMode {
    Full,
    Collapsed,
}

export type CoreSidebarNavGroup = CoreSidebarNavItem[];

export interface CoreSidebarNavItem {
    name: string;
    icon: EtcIconType;
    url: string;
    childrenItems?: CoreSidebarNavItem[];
}
