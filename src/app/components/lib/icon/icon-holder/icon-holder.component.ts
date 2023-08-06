import {
    Component,
    HostBinding,
} from "@angular/core";

@Component({
    selector: "ets-icon-holder",
    templateUrl: "./icon-holder.component.html",
})
export class IconHolderComponent {
    @HostBinding("style.display") public display = "none";
}
