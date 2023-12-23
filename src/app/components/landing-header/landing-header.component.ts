import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewChild,
} from "@angular/core";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import {OverlayPanel} from "primeng/overlaypanel";
import {RoutePath} from "../../models/app-routing.model";
import {I18Service} from "../../services/i18.service";
import {
    ActionType,
    HeaderMenuItemType,
    Language,
    languageList,
    primaryNavTabsList,
    secondaryNavTabsList,
} from "./landing-header.model";
import {LandingHeaderService} from "./landing-header.service";

@Component({
    selector: "ets-landing-header",
    templateUrl: "./landing-header.component.html",
    styleUrls: ["./landing-header.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeaderComponent implements OnInit {
    @ViewChild("overlayPanel", {static: true})
    public overlayPanel: OverlayPanel;
    public languages: Language[] = languageList;
    public selectedLanguage: Language;
    public primaryNavTabs: MenuItem[] = primaryNavTabsList;
    public activeItem: MenuItem;
    public secondaryNavTabs: HeaderMenuItemType[] = secondaryNavTabsList;

    constructor(
        private headerService: LandingHeaderService,
        private i18Service: I18Service,
        private router: Router,
    ) {
    }

    public ngOnInit(): void {
        this.selectedLanguage = this.languages.find(language =>
            language.code.toLowerCase() === this.i18Service.languageCode.toLowerCase(),
        );
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

    public onActiveItemChange(event: MenuItem): void {
        this.activeItem = event;
    }

    public onLanguageChangeHandler(value: Language): void {
        this.i18Service.changeLanguage(value.code.toLowerCase());
    }

    public handleLogoClick(): void {
        this.router.navigateByUrl(RoutePath.Home);
    }
}
