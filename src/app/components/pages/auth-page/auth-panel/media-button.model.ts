export type MediaButtonType =
    | "google"
    | "twitter"
    | "facebook";

export interface MediaButton {
    id: MediaButtonType;
    name: string;
}

export const mediaBtnList: MediaButton[] = [
    {
        id: "google",
        name: "google",
    },
    {
        id: "twitter",
        name: "twitter",
    },
    {
        id: "facebook",
        name: "facebook",
    },
];
