import {
    Component,
    Input,
} from "@angular/core";
import {CourseCard} from "./course-card.model";

export enum CourseCardDisplayMode {
    
}

@Component({
  selector: 'ets-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent {
    @Input() public card: CourseCard;
    
}
