import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CourseCardComponent} from "./course-card.component";

@NgModule({
    declarations: [
        CourseCardComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CourseCardComponent,
    ],
})
export class CourseCardModule {
}
