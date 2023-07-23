import {CourseAuthor} from "../../../models/course-author.model";
import {CourseTag} from "../course-tag/course-tag.model";

export interface CourseCard {
    name: string;
    description?: string;
    badges?: CourseTag[];
    author: CourseAuthor;
}
