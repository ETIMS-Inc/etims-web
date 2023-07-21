import {
    ChangeDetectionStrategy,
    Component,
    ViewChild,
} from "@angular/core";
import {MenuItem} from "primeng/api";
import {OverlayPanel} from "primeng/overlaypanel";
import {
    ActionType,
    defaultLanguage,
    HeaderMenuItemType,
    Language,
    languageList,
    primaryNavTabsList,
    secondaryNavTabsList,
} from "./landing-header.model";
import {LandingHeaderService} from "./landing-header.service";

@Component({
    selector: "landing-header",
    templateUrl: "./landing-header.component.html",
    styleUrls: ["./landing-header.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent {
    @ViewChild("overlayPanel", {static: true})
    public overlayPanel: OverlayPanel;
    public languages: Language[] = languageList;
    public selectedLanguage: Language = defaultLanguage;
    public primaryNavTabs: MenuItem[] = primaryNavTabsList;
    public _activeItem: MenuItem;
    public secondaryNavTabs: HeaderMenuItemType[] = secondaryNavTabsList;

    constructor(private headerService: LandingHeaderService) {
    }

    public handleButtonChange(type: ActionType): void {
        switch (type) {
            case "globe":
                this.overlayPanel.toggle(event);
                break;
            case "search":
                break;
            case "theme":
                this.headerService.toggleTheme();
                break;
            case "start":
                this.headerService.startAction();
                break;
            default:
                const errorType: unknown = type;
                console.warn("unknown type: ", errorType);
        }
    }

    public onActiveItemChange(event: MenuItem) {
        this._activeItem = event;
    }
}
