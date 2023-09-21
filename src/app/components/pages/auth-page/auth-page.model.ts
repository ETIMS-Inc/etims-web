import {InfoPanelModel} from "./info-panel/info-panel.model";

export enum AuthMode {
    SIGN_IN = "sign_in",
    SIGN_UP = "sign_up",
}

export const InfoPanelContent: Record<AuthMode, InfoPanelModel> = {
    [AuthMode.SIGN_IN]: {
        title: "Welcome to",
        secondTitle: "ETIMS CLOUD",
        description: "The system is intended to control learning process. Register right now",
        buttonLabel: "Sign Up",
    },
    [AuthMode.SIGN_UP]: {
        title: "Already",
        secondTitle: "have an account?",
        description: "Log in to your account and you can continue building and editing your learning process",
        buttonLabel: "Sign In",
    },
};
