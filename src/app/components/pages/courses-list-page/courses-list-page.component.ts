import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import {coursesTabs} from "../../../mocks/courses-tabs";
import {RoutePath} from "../../../models/app-routing.model";
import {CourseCardDisplayMode} from "../../course/course-card/course-card.component";
import {CourseCard} from "../../course/course-card/course-card.model";
import {CoursesTab} from "./courses-tab.model";

interface DisplayMode {
    icon: string;
    mode: CourseCardDisplayMode;
}

@Component({
    selector: "ets-courses-list-page",
    templateUrl: "./courses-list-page.component.html",
    styleUrls: ["./courses-list-page.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListPageComponent {
    // FIXME: use real data instead of mock
    // TODO: support pagination
    public tabs: CoursesTab[] = coursesTabs; // TODO: get tabs from be
    public activeTab: CoursesTab = this.tabs[0];
    public displayModes: DisplayMode[] = [
        {icon: "pi pi-list", mode: CourseCardDisplayMode.FULL_WIDTH},
        {icon: "pi pi-th-large", mode: CourseCardDisplayMode.TILE},
    ];
    public currentMode: DisplayMode = this.displayModes[0];
    public courseCardDisplayMode = CourseCardDisplayMode;


    constructor(private router: Router) {
    }

    public onActiveItemChange(tab: MenuItem) {
        this.activeTab = tab as CoursesTab;
    }

    public previewClicked() {
        this.router.navigate([RoutePath.CourseDetails]);
    }
}
