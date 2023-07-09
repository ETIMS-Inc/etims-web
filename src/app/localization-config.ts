import translationEn from "../assets/localization/en.json";
import translationDe from "../assets/localization/de.json";
import translationFr from "../assets/localization/fr.json";
import translationUk from "../assets/localization/uk.json";
import {
    APP_INITIALIZER,
    LOCALE_ID,
} from "@angular/core";
import {
    defaultInterpolationFormat,
    I18NEXT_SERVICE,
    I18NextLoadResult,
    I18NextModule,
    ITranslationService,
} from "angular-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocizeApi from "i18next-locize-backend";

const i18nextOptions = {
    debug: true,
    fallbackLng: "en",
    resources: {
        en: translationEn,
        de: translationDe,
        fr: translationFr,
        uk: translationUk,
    },
    interpolation: {
        format: I18NextModule.interpolationFormat(defaultInterpolationFormat),
    },
};

export function appInit(i18next: ITranslationService): () => Promise<I18NextLoadResult> {
    return () => i18next
        .use(LocizeApi)
        .use<any>(LanguageDetector)
        .init(i18nextOptions);
}

export function localeIdFactory(i18next: ITranslationService) {
    return i18next.language;
}

export const I18N_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: appInit,
        deps: [I18NEXT_SERVICE],
        multi: true,
    },
    {
        provide: LOCALE_ID,
        deps: [I18NEXT_SERVICE],
        useFactory: localeIdFactory,
    },
];
