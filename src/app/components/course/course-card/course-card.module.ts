import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {I18NextModule} from "angular-i18next";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {LibModule} from "../../lib/lib.module";
import {CourseCardComponent} from "./course-card.component";

@NgModule({
    declarations: [
        CourseCardComponent,
    ],
    imports: [
        CommonModule,
        LibModule,
        ButtonModule,
        I18NextModule,
        DividerModule,
    ],
    exports: [
        CourseCardComponent,
    ],
})
export class CourseCardModule {
}
