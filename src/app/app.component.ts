import {
    Component,
} from "@angular/core";
import {
    BehaviorSubject,
} from "rxjs";
import {coreSidebarNavGroups} from "./mocks/sidebar";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
})
export class AppComponent {
    public title = "etims-web";
    public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public sidebarGroups = coreSidebarNavGroups;
}
