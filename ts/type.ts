const courseName = 'MEAN stack';
// export type courseDetails={
//     name: string;
//     technology: {
//         name: string;
//         courseContent: string[];
//     }[];
// };
export interface CourseDetails{
    name: string;
    technology: {
        name: string;
        courseContent: string[];
    }[];
};

let courseDetails: CourseDetails;
let courseDetails1: CourseDetails;
courseDetails = {
    name: 'MEAN stack',
    technology: [
        {
            name: 'Angular',
            courseContent: [
                'TS',
                'Component',
                'Form'
            ]
        }
    ]
}

