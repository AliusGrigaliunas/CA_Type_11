"use strict";
const students = [{
        name: 'Valius',
        surname: 'Koridas',
        course: 1,
        avg: 7.2,
    }, {
        name: 'Virga',
        surname: 'Maikaitė',
        course: 2,
        avg: 6.3,
    }, {
        name: 'Šurna',
        surname: 'Mauzytė',
        course: 1,
        avg: 8.1,
    }, {
        name: 'Grybas',
        surname: 'Beržauskas',
        course: 1,
        avg: 8.1,
    }, {
        name: 'Surtė',
        surname: 'Koridaitė',
        course: 3,
        avg: 9.7,
    }, {
        name: 'Vazonius',
        surname: 'Sėkla',
        course: 4,
        avg: 5.2,
    }];
console.group('pilnų vardų masyvas');
const fullnames = students.map(({ name, surname }) => `${name} ${surname}`);
console.table(fullnames);
console.groupEnd();
console.group('pirmo kurso studentai');
const studentsFirstCourse = students
    .filter(({ course }) => course === 1);
console.table(studentsFirstCourse);
console.groupEnd();
console.group('visų studentų vidurkis');
const avg = students
    .reduce((prevSum, student) => prevSum + student.avg, 0) / students.length;
console.table(avg);
console.groupEnd();
//# sourceMappingURL=main.js.map