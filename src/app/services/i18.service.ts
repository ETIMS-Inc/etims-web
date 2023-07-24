import {
    Inject,
    Injectable,
} from "@angular/core";
import {
    I18NEXT_SERVICE,
    ITranslationService,
} from "angular-i18next";

@Injectable({
    providedIn: "root",
})
export class I18Service {

    public language: string = "en";

    constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {
        this.i18NextService.events.initialized.subscribe((e) => {
            if (e) {
                this.updateState(this.i18NextService.language);
            }
        });
    }

    public changeLanguage(lang: string): void {
        if (lang !== this.i18NextService.language) {
            this.i18NextService.changeLanguage(lang).then(() => {
                this.updateState(lang);
                //document.location.reload();
            });
        }
    }

    private updateState(lang: string): void {
        this.language = lang;
    }
}
