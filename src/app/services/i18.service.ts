import {
    Inject,
    Injectable,
} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {
    I18NEXT_SERVICE,
    ITranslationService,
} from "angular-i18next";
import {filter} from "rxjs";
import {defaultLanguage} from "../components/landing-header/landing-header.model";

@Injectable({
    providedIn: "root",
})
export class I18Service {

    public languageCode: string = defaultLanguage.code;

    constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {
        this.i18NextService.events.initialized
            .pipe(
                filter(Boolean),
                takeUntilDestroyed(),
            ).subscribe(() => this.languageCode = this.i18NextService.language);
    }

    public changeLanguage(lang: string): void {
        if (lang !== this.i18NextService.language) {
            this.i18NextService.changeLanguage(lang).then(() => {
                this.languageCode = lang;
                document.location.reload();
            });
        }
    }

    public translateObjectProperty = <T extends object, K extends keyof T>(object: T, propertyKey: K): T =>
        ({
            ...object,
            [propertyKey]: this.i18NextService.t(object[propertyKey]),
        });

    public translateObjectsProperty = <T extends object, K extends keyof T>(objects: T[], propertyKey: K): T[] =>
        objects.map(obj => ({
            ...obj,
            [propertyKey]: this.i18NextService.t(obj[propertyKey]),
        }));
}
