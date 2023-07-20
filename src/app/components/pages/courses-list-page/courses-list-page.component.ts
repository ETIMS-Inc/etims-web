import {Component} from "@angular/core";
import {MenuItem} from "primeng/api";

interface TempCourse { // TODO: use the real course model
    id: string;
}

interface Tab {
    id: string;
    label: string;
    courses?: TempCourse[];
}

interface DisplayMode {
    icon: string;
}

@Component({
    selector: "ets-courses-list-page",
    templateUrl: "./courses-list-page.component.html",
    styleUrls: ["./courses-list-page.component.less"],
})
export class CoursesListPageComponent {
    // FIXME: use real data instead of mock
    public tabs: Tab[] = [
        {
            id: "1",
            label: "All",
            courses: [
                {id: "1"},
                {id: "2"},
            ],
        },
        {id: "2", label: "Favourite"},
    ];
    public activeTab: Tab = this.tabs[0];
    public displayModes: DisplayMode[] = [
        {icon: "pi pi-list"},
        {icon: "pi pi-th-large"},
    ];
    public currentMode: DisplayMode = this.displayModes[0];

    public onActiveItemChange(tab: MenuItem) {
        this.activeTab = tab as Tab;
    }
}
