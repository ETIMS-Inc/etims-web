import {
    Component,
    OnInit,
} from "@angular/core";
import {
    UntilDestroy,
    untilDestroyed,
} from "@ngneat/until-destroy";
import {SvgIconRegistryService} from "angular-svg-icon";

@UntilDestroy()
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
    public title = "etims-web";

    constructor(private iconReg: SvgIconRegistryService) {
    }

    public ngOnInit(): void {
        this.iconReg.loadSvg("assets/icons/logo.svg", "logo")
            .pipe(untilDestroyed(this))?.subscribe();
        this.iconReg.loadSvg("assets/icons/global.svg", "global")
            .pipe(untilDestroyed(this))?.subscribe();
        this.iconReg.loadSvg("assets/icons/search.svg", "search")
            .pipe(untilDestroyed(this))?.subscribe();
        this.iconReg.loadSvg("assets/icons/dark-mode.svg", "dark-mode")
            .pipe(untilDestroyed(this))?.subscribe();
        this.iconReg.loadSvg("assets/icons/white-mode.svg", "white-mode")
            .pipe(untilDestroyed(this))?.subscribe();
        this.iconReg.loadSvg("assets/icons/flags/english.svg", "english")
            .pipe(untilDestroyed(this))?.subscribe();
        this.iconReg.loadSvg("assets/icons/flags/germany.svg", "germany")
            .pipe(untilDestroyed(this))?.subscribe();
        this.iconReg.loadSvg("assets/icons/flags/ukraine.svg", "ukraine")
            .pipe(untilDestroyed(this))?.subscribe();
    }
}
