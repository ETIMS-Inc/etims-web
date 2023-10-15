import {EtcIcon} from "../icon/icon.model";

export interface NavItem {
    name: string;
    icon: EtcIcon;
    url?: string;
    chip?: NavItemChip,
    childrenItems?: Omit<NavItem, "childrenItems" | "icon">[];
}

export enum NavItemChipType {
    INFO,
    WARNING,
}

export interface NavItemChip {
    num: number,
    type: NavItemChipType,
}
