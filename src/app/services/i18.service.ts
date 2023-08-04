import {
    Inject,
    Injectable,
} from "@angular/core";
import {
    I18NEXT_SERVICE,
    ITranslationService,
} from "angular-i18next";
import {defaultLanguage} from "../components/landing-header/landing-header.model";
import {filter} from "rxjs";

@Injectable({
    providedIn: "root",
})
export class I18Service {

    public languageCode: string = defaultLanguage.code;

    constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {
        this.i18NextService.events.initialized.pipe(filter(Boolean)).subscribe(() =>
            this.languageCode = this.i18NextService.language);
    }

    public changeLanguage(lang: string): void {
        if (lang !== this.i18NextService.language) {
            this.i18NextService.changeLanguage(lang).then(() => {
                this.languageCode = lang;
                document.location.reload();
            });
        }
    }
}
