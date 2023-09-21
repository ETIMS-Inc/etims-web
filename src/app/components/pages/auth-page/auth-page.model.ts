import {RoutePath} from "../../../models/app-routing.model";
import {InfoPanelModel} from "./info-panel/info-panel.model";

export enum AuthMode {
    SIGN_IN = RoutePath.SignIn,
    SIGN_UP = RoutePath.SignUp,
}

export const InfoPanelContent: Record<AuthMode, InfoPanelModel> = {
    [AuthMode.SIGN_IN]: {
        title: "auth.page.info.panel.sign.in.title",
        secondTitle: "auth.page.info.panel.sign.in.second.title",
        description: "auth.page.info.panel.sign.in.description",
        buttonLabel: "auth.page.info.panel.sign.in.button.label",
    },
    [AuthMode.SIGN_UP]: {
        title: "auth.page.info.panel.sign.up.title",
        secondTitle: "auth.page.info.panel.sign.up.second.title",
        description: "auth.page.info.panel.sign.up.description",
        buttonLabel: "auth.page.info.panel.sign.up.button.label",
    },
};

export const AuthPageFlexDirection: Record<AuthMode, string> = {
    [AuthMode.SIGN_IN]: "row",
    [AuthMode.SIGN_UP]: "row-reverse",
};
