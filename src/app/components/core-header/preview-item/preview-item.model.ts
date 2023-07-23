export type ItemShapeType =
    | "circle"
    | "square";

export interface PreviewItem {
    label?: string;
    shape: ItemShapeType;
    userName: string;
    time: string;
    description?: string;
    image?: string;
}
