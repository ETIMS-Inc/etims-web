import {
    Component,
    HostBinding,
} from "@angular/core";

@Component({
    selector: "ets-not-found-page",
    templateUrl: "./not-found-page.component.html",
    styleUrls: ["./not-found-page.component.less"],
})
export class NotFoundPageComponent {
    @HostBinding("class") public hostClass = "ets-not-found-page";
}
