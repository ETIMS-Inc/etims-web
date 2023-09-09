import {EtcIcon} from "../lib/icon/icon.model";

export enum CoreSidebarMode {
    Full,
    Collapsed,
}

export type CoreSidebarNavGroup = CoreSidebarNavItem[];

export enum CoreSidebarChipType {
    INFO,
    WARNING,
}

export interface CoreSidebarChip {
    counter: number,
    type: CoreSidebarChipType,
}

export interface CoreSidebarNavItem {
    name: string;
    icon: EtcIcon;
    url: string;
    chip?: CoreSidebarChip,
    childrenItems?: Omit<CoreSidebarNavItem, "childrenItems" | "icon">[];
}
