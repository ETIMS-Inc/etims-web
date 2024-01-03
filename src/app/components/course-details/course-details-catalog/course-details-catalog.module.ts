import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CourseDetailsCatalogComponent} from "./course-details-catalog.component";

@NgModule({
    declarations: [
        CourseDetailsCatalogComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CourseDetailsCatalogComponent,
    ],
})
export class CourseDetailsCatalogModule {
}
