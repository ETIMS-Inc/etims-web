import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewChild,
} from "@angular/core";
import {MenuItem} from "primeng/api";
import {OverlayPanel} from "primeng/overlaypanel";
import {
    headerTab,
    messagePreviewItems,
    notificationPreviewItems,
} from "../../mocks/core-header";
import {
    ButtonType,
    MenuItemType,
    navTabsList,
    userMenuList,
} from "./core-header.model";
import {PreviewItem} from "./preview-item/preview-item.model";

@Component({
    selector: "ets-core-header",
    templateUrl: "./core-header.component.html",
    styleUrls: ["./core-header.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreHeaderComponent implements OnInit {

    @ViewChild("overlayPanel", {static: true})
    public overlayPanel: OverlayPanel;

    public buttonType = ButtonType;
    public selectedControlType: ButtonType;
    public tabsList: MenuItemType[] = navTabsList;
    public readonly userMenuItems: MenuItem[] = userMenuList;
    public readonly messageItems: PreviewItem[] = messagePreviewItems;
    public readonly notificationItems: PreviewItem[] = notificationPreviewItems;

    public ngOnInit(): void {
        this.listenForBadgesChange();
    }

    private listenForBadgesChange(): void {
        this.tabsList = this.tabsList
            .map((tab: MenuItemType) => ({
                ...tab,
                ...headerTab,
            }));
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
