type Student = {
  name: string,
  surname: string,
  course: number,
  avg: number,
}

type StudentFirstCourse = {
  name: string,
  surname: string,
  course: 1,
  avg: number,
}

type Fullname = string;

const students: Student[] = [{
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
const fullnames: Fullname[] = students.map<Fullname>(({ name, surname }) => `${name} ${surname}`);
console.table(fullnames);
console.groupEnd();

console.group('pirmo kurso studentai');
const studentsFirstCourse: StudentFirstCourse[] = students
  .filter(({ course }) => course === 1) as StudentFirstCourse[];
console.table(studentsFirstCourse);
console.groupEnd();

console.group('visų studentų vidurkis');
const avg: number = students
  .reduce((prevSum, student) => prevSum + student.avg, 0) / students.length;
console.table(avg);
console.groupEnd();
