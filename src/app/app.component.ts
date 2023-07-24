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
import {Subscription} from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit, OnDestroy {
    public title = "etims-landing-ui";
    private iconRegSubscription: Subscription | undefined = new Subscription();

    constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
                private iconReg: SvgIconRegistryService) {
    }

    public ngOnInit(): void {
        this.iconReg.loadSvg("assets/icons/logo.svg", "logo")?.subscribe();
        this.iconReg.loadSvg("assets/icons/global.svg", "global")?.subscribe();
        this.iconReg.loadSvg("assets/icons/search.svg", "search")?.subscribe();
        this.iconReg.loadSvg("assets/icons/dark-mode.svg", "dark-mode")?.subscribe();
        this.iconReg.loadSvg("assets/icons/white-mode.svg", "white-mode")?.subscribe();
        this.iconReg.loadSvg("assets/icons/flags/english.svg", "english")?.subscribe();
        this.iconReg.loadSvg("assets/icons/flags/germany.svg", "germany")?.subscribe();
        this.iconReg.loadSvg("assets/icons/flags/ukraine.svg", "ukraine")?.subscribe();
    }

    public ngOnDestroy(): void {
        this.iconRegSubscription?.unsubscribe();
    }
}
