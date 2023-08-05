import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ProgressBarModule} from "primeng/progressbar";
import {ChipComponent} from "./chip/chip.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";

@NgModule({
    declarations: [
        ChipComponent,
        ProgressBarComponent,
    ],
    imports: [
        CommonModule,
        ProgressBarModule,
    ],
    exports: [
        ChipComponent,
        ProgressBarComponent,
    ],
})
export class LibModule {
}
