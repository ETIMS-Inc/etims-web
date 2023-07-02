export type RecoverPasswordType =
    | "email"
    | "password"
    | "successAction";

export interface RecoverPasswordCard {
    width: number;
    height: number;
}

export const passwordCardSizes: Record<string, RecoverPasswordCard> = {
    small: {
        width: 576,
        height: 152,
    },
    medium: {
        width: 576,
        height: 376,
    },
};
