import {
    Component,
    HostBinding,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from "@angular/core";
import {IconHolderComponent} from "../icon-holder/icon-holder.component";

@Component({
    selector: "ets-icon-lazy-holder",
    template: "<div #iconHolder></div>",
})
export class IconLazyHolderComponent implements OnInit {
    @HostBinding("style.display") public display = "none";
    @ViewChild("iconHolder", {read: ViewContainerRef}) public iconHolder!: ViewContainerRef;

    public ngOnInit(): void {
        import("../icon-holder/icon-holder.component").then(({IconHolderComponent}) => {
            this.iconHolder.clear();
            this.iconHolder.createComponent(IconHolderComponent);
        });
    }
}
