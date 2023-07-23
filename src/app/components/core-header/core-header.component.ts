import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewChild,
} from "@angular/core";
import {MenuItem} from "primeng/api";
import {OverlayPanel} from "primeng/overlaypanel";
import {
    ButtonType,
    MenuItemType,
    navTabsList,
    userMenuList,
} from "./core-header.model";

@Component({
    selector: "ets-core-header",
    templateUrl: "./core-header.component.html",
    styleUrls: ["./core-header.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreHeaderComponent implements OnInit {

    @ViewChild("overlayPanel", {static: true})
    public overlayPanel: OverlayPanel;

    public selectedControlType: ButtonType;
    public tabsList: MenuItemType[] = navTabsList;
    public readonly userMenuItems: MenuItem[] = userMenuList;

    public ngOnInit(): void {
        this.listenForBadgesChange();
    }

    private listenForBadgesChange(): void {
        this.tabsList = this.tabsList
            .map((tab: MenuItemType) => ({...tab, amount: 3, caption: "Thomas Shelby", avatar: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" }));
    }

    public handleControlClick(
        evt: MouseEvent,
        target: HTMLDivElement,
        item: MenuItemType,
    ): void {
        this.selectedControlType = item?.type;
        this.overlayPanel.toggle(evt, target);
    }
}
