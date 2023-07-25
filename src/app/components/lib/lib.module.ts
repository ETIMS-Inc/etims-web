import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ChipComponent} from "./chip/chip.component";

@NgModule({
    declarations: [ChipComponent],
    imports: [CommonModule],
    exports: [ChipComponent],
})
export class LibModule {
}