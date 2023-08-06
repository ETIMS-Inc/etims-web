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
        // TODO: remove SvgIconRegistryService and the corresponding dependency
        this.iconReg.loadSvg("assets/images/icons/colorful/logo.svg", "logo")
            .pipe(untilDestroyed(this))?.subscribe();
    }
}
