// Object de-structuring

const course = {
    courseName: "Learn JavaScript",
    price: 999,
    courseInstructor: "Hitesh Choudhary"
};


// console.log(course.courseName); // Learn JavaScript

const { courseInstructor: instructor } = course;

// console.log(instructor);

//   API intro
// this is how API response looks like
// we have to extract data from this object


// {
//     "courseName": "Learn JavaScript",
//     "price": "free",
//     "courseInstructor": "Hitesh Choudhary",
// }

[
    {},
    {},
    {}
] // array of objects