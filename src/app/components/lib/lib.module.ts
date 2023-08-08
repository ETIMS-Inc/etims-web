import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ProgressBarModule} from "primeng/progressbar";
import {ChipComponent} from "./chip/chip.component";
import {IconComponent} from "./icon/icon.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";

@NgModule({
    declarations: [
        ChipComponent,
        IconComponent,
        ProgressBarComponent,
    ],
    imports: [
        CommonModule,
        ProgressBarModule,
    ],
    exports: [
        ChipComponent,
        IconComponent,
        ProgressBarComponent,
    ],
})
export class LibModule {
}
