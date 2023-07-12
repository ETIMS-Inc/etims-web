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

@Component({
    selector: "ets-courses-list-page",
    templateUrl: "./courses-list-page.component.html",
    styleUrls: ["./courses-list-page.component.less"],
})
export class CoursesListPageComponent {
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
    public displayModes: any[] = [
        {icon: "pi pi-list"},
        {icon: "pi pi-th-large"},
    ];
    public currentMode: any = this.displayModes[0];

    public onActiveItemChange($event: MenuItem) {
    }
}
