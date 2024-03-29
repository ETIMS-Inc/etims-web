import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {I18NextModule} from "angular-i18next";
import {ButtonModule} from "primeng/button";
import {SelectButtonModule} from "primeng/selectbutton";
import {TabMenuModule} from "primeng/tabmenu";
import {CourseCardModule} from "../../course/course-card/course-card.module";
import {EmptyContentModule} from "../../empty-content/empty-content.module";
import {CoursesListPageRoutingModule} from "./courses-list-page-routing.module";
import {CoursesListPageComponent} from "./courses-list-page.component";

@NgModule({
    declarations: [
        CoursesListPageComponent,
    ],
    imports: [
        CommonModule,
        CoursesListPageRoutingModule,
        I18NextModule,
        ButtonModule,
        SelectButtonModule,
        FormsModule,
        TabMenuModule,
        EmptyContentModule,
        CourseCardModule,
    ],
})
export class CoursesListPageModule {
}
