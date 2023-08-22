import {
    Component,
} from "@angular/core";
import {
    BehaviorSubject,
} from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
})
export class AppComponent {
    public title = "etims-web";
    public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(true);
}
