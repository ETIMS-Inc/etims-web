import {
    Component,
    Inject,
    OnDestroy,
    OnInit,
} from "@angular/core";
import {
    I18NEXT_SERVICE,
    ITranslationService,
} from "angular-i18next";
import {SvgIconRegistryService} from "angular-svg-icon";
import {
    BehaviorSubject,
    Subscription,
} from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit, OnDestroy {
    public language: string = "en";
    public readonly languages: string[] = [
        "en",
        "de",
    ];
    public title = "etims-web";
    public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private iconRegSubscription: Subscription | undefined = new Subscription();

    constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
                private iconReg: SvgIconRegistryService) {
    }

    public ngOnInit(): void {
        // TODO: remove SvgIconRegistryService and the corresponding dependency
        this.iconReg.loadSvg("assets/images/icons/colorful/logo.svg", "logo")?.subscribe();

        this.i18NextService.events.initialized.subscribe((e) => {
            if (e) {
                this.updateState(this.i18NextService.language);
            }
        });
    }

    public changeLanguage(lang: string): void {
        if (lang !== this.i18NextService.language) {
            this.i18NextService.changeLanguage(lang).then(x => {
                this.updateState(lang);
                document.location.reload();
            });
        }
    }

    public ngOnDestroy(): void {
        this.iconRegSubscription?.unsubscribe();
    }

    private updateState(lang: string): void {
        this.language = lang;
    }
}
