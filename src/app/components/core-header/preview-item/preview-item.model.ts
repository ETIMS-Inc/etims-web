export type ItemShapeType =
    | "circle"
    | "square";

export type UserStatusType =
    | "active"
    | "away"
    | "busy";

export type EventStatusType =
    | "Due Soon"
    | "Upcoming"
    | "Finished";

export interface PreviewItem {
    label?: string;
    userStatus?: UserStatusType;
    shape: ItemShapeType;
    userName: string;
    time: string;
    description?: string;
    image?: string;
    eventStatus?: EventStatusType;
}
