import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {homeImages} from "../../../mocks/home-images";
import {
    homePageContacts,
    homePageFAQs,
    homePagePlans,
    homePageSolutions,
} from "../../../mocks/home-page";
import {
    HomePageContacts,
    HomePageFAQ,
    HomePagePlan,
    HomePageSolution,
} from "./home-page.model";

@Component({
    selector: "ets-home-page",
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.less"],
})
export class HomePageComponent {

    public images: unknown[] | undefined = homeImages;
    public solutions: HomePageSolution[] = homePageSolutions;
    public plans: HomePagePlan[] = homePagePlans;
    public faqs: Record<string, HomePageFAQ[]> = homePageFAQs;
    public contactDetails: HomePageContacts[] = homePageContacts;

    constructor(private router: Router) {
    }

    public handleStartedChange(): void {
        this.router.navigateByUrl("sign-in");
    }

    public handleDemoChange(): void {
        console.warn("handleDemoChange clicked");
    }
}
