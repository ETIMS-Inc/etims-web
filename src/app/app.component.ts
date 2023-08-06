import {
    Component,
    OnDestroy,
    OnInit,
} from "@angular/core";
import {SvgIconRegistryService} from "angular-svg-icon";
import {Subscription} from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit, OnDestroy {
    public title = "etims-web";
    private iconRegSubscription: Subscription | undefined = new Subscription();

    constructor(private iconReg: SvgIconRegistryService) {
    }

    public ngOnInit(): void {
        // TODO: remove SvgIconRegistryService and the corresponding dependency
        this.iconReg.loadSvg("assets/images/icons/colorful/logo.svg", "logo")?.subscribe();
    }

    public ngOnDestroy(): void {
        this.iconRegSubscription?.unsubscribe();
    }
}
