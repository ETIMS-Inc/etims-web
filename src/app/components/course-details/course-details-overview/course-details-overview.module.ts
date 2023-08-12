import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import {CourseDetailsOverviewComponent} from "./course-details-overview.component";

@NgModule({
    declarations: [
        CourseDetailsOverviewComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        TabViewModule,
    ],
    exports: [
        CourseDetailsOverviewComponent,
    ],
})
export class CourseDetailsOverviewModule {
}
