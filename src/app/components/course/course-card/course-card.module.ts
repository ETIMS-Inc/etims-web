import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {I18NextModule} from "angular-i18next";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {ChipComponent} from "../../lib/chip/chip.component";
import {ProgressBarComponent} from "../../lib/progress-bar/progress-bar.component";
import {CourseCardComponent} from "./course-card.component";

@NgModule({
    declarations: [
        CourseCardComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        I18NextModule,
        DividerModule,
        ChipComponent,
        ProgressBarComponent,
    ],
    exports: [
        CourseCardComponent,
    ],
})
export class CourseCardModule {
}
