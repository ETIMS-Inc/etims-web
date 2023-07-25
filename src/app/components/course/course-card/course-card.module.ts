import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LibModule} from "../../lib/lib.module";
import {CourseCardComponent} from "./course-card.component";

@NgModule({
    declarations: [
        CourseCardComponent,
    ],
    imports: [
        CommonModule,
        LibModule,
    ],
    exports: [
        CourseCardComponent,
    ],
})
export class CourseCardModule {
}
