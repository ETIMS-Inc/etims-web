import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {
    ActionType,
    HeaderMenuItemType,
    Language,
    languageList,
    defaultLanguage,
    primaryNavTabsList,
    secondaryNavTabsList
} from "./landing-header.model";
import {LandingHeaderService} from "./landing-header.service";
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
    selector: 'ets-header',
    templateUrl: './landing-header.component.html',
    styleUrls: ['./landing-header.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent {

    constructor(private headerService: LandingHeaderService) {
    }

    @ViewChild('overlayPanel', {static: true})
    public overlayPanel: OverlayPanel;

    public languages: Language[] = languageList;
    public selectedLanguage: Language = defaultLanguage;
    public primaryNavTabs: MenuItem[] = primaryNavTabsList;
    public secondaryNavTabs: HeaderMenuItemType[] = secondaryNavTabsList;

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

}
