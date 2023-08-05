import {CoursesTab} from "../components/pages/courses-list-page/courses-tab.model";
import {
    allCourses,
    favouriteCourses,
    programmingCourses,
} from "./courses";

export const coursesTabs: CoursesTab[] = [
    {
        label: "All",
        courses: allCourses,
    },
    {
        label: "Favourite",
        courses: favouriteCourses,
    },
    {
        label: "Programming",
        courses: programmingCourses,
    },
];
