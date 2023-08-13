import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {homeImages} from "../../../mocks/home-images";

@Component({
    selector: "ets-home-page",
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.less"],
})
export class HomePageComponent {

    public images: unknown[] | undefined = homeImages;

    constructor(private router: Router) {
    }

    public handleStartedChange(): void {
        this.router.navigateByUrl("sign-in");
    }

    public handleDemoChange(): void {
        console.warn("handleDemoChange clicked");
    }
}
