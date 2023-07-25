import {CourseCard} from "../components/course/course-card/course-card.model";
import {Authors} from "./authors";
import {Chips} from "./chips";

export const withoutTagCourses: CourseCard[] = [
    {
        name: "Course without tag 1",
        description: "Unknown desc",
        author: Authors.mike,
    },
];

export const favouriteCourses: CourseCard[] = [
    {
        name: "Favourite 1",
        description: "Fav desc",
        tags: [Chips.favourite],
        author: Authors.mike,
    },
    {
        name: "Favourite 2",
        description: "Fav desc",
        tags: [Chips.favourite],
        author: Authors.mike,
    },
    {
        name: "Favourite 3",
        description: "Fav desc",
        tags: [Chips.favourite],
        author: Authors.steve,
    },
];

export const programmingCourses: CourseCard[] = [
    {
        name: "Programming 1",
        description: "Prog desc",
        tags: [Chips.programming],
        author: Authors.heisenberg,
    },
    {
        name: "Programming 2",
        description: "Prog desc",
        tags: [Chips.programming],
        author: Authors.heisenberg,
    },
    {
        name: "Programming 3",
        description: "Prog desc",
        tags: [Chips.programming],
        author: Authors.tim,
    },
];

export const allCourses: CourseCard[] = [
    ...withoutTagCourses,
    ...favouriteCourses,
    ...programmingCourses,
];
