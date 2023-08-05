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
        progress: 35,
    },
    {
        name: "Favourite 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Tortor at risus viverra adipiscing at. Amet consectetur adipiscing elit ut aliquam purus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Tortor at risus viverra adipiscing at. Amet consectetur adipiscing elit ut aliquam purus sit amet.",
        tags: [Chips.favourite],
        author: Authors.steve,
        progress: 0,
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
        progress: 78,
    },
    {
        name: "Programming 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Tortor at risus viverra adipiscing at. Amet consectetur adipiscing elit ut aliquam purus sit amet.",
        tags: [Chips.programming],
        author: Authors.tim,
    },
];

export const allCourses: CourseCard[] = [
    ...withoutTagCourses,
    ...favouriteCourses,
    ...programmingCourses,
];
