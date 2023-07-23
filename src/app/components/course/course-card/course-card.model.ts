import {CourseAuthor} from "../../../models/course-author.model";
import {Chip} from "../../lib/chip/chip.model";

export interface CourseCard {
    name: string;
    description?: string;
    tags?: Chip[];
    author: CourseAuthor;
}
