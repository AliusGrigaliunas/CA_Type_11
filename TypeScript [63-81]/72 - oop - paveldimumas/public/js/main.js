"use strict";
console.group('1. Sukurkite klasę tėvinę Person vaikinėms klasėms ir išsaugokite joje bendrą funkcionalumą.');
{
    class Person {
        static count = 0;
        namePrivate;
        surnamePrivate;
        id;
        constructor(name, surname) {
            Person.count += 1;
            this.id = `Person_${Person.count}`;
            this.name = name;
            this.surname = surname;
        }
        set name(val) {
            this.namePrivate = val;
        }
        set surname(val) {
            this.surnamePrivate = val;
        }
        get fullname() {
            return `${this.namePrivate} ${this.surnamePrivate}`;
        }
    }
    class Student extends Person {
        marks;
        constructor(name, surname) {
            super(name, surname);
            this.marks = [];
        }
        get avg() {
            return this.marks.length > 0
                ? this.marks.reduce((sum, mark) => sum + mark) / this.marks.length
                : 0;
        }
        addMark(mark) {
            if (mark < 1)
                throw new Error('Pažymys negali būti mažesnis už 1');
            if (mark > 10)
                throw new Error('Pažymys negali būti didesnis už 10');
            if (mark % 1 !== 0)
                throw new Error('Pažymys turi būti sveikas skaičius');
            this.marks.push(mark);
        }
    }
    class Lecturer extends Person {
        static MIN_SALARY = 1800;
        static MAX_SALARY = 4400;
        static GPM_PERC = 0.20;
        static PSD_PERC = 0.0698;
        static VSD_PERC = 0.1252;
        salaryPrivate;
        constructor(salary, name, surname) {
            super(name, surname);
            this.salary = salary;
        }
        set salary(value) {
            if (value < Lecturer.MIN_SALARY || value > Lecturer.MAX_SALARY) {
                throw new Error(`Lecturer salary must be in range ${Lecturer.MIN_SALARY}-${Lecturer.MAX_SALARY}`);
            }
            const valStr = String(value);
            const numbersAfterFor = valStr.split('.')[1];
            if (numbersAfterFor !== undefined && numbersAfterFor.length > 2) {
                throw new Error('Lecturer salary precision must be no more than 2 points');
            }
            this.salaryPrivate = value;
        }
        get salary() {
            return this.salaryPrivate;
        }
        get salaryNeto() {
            const gmpTax = this.salaryPrivate * Lecturer.GPM_PERC;
            const psdTax = this.salaryPrivate * Lecturer.PSD_PERC;
            const vsdTax = this.salaryPrivate * Lecturer.VSD_PERC;
            return Math.round(this.salaryPrivate - gmpTax - psdTax - vsdTax);
        }
    }
    const people = [
        new Person('Marikzas', 'Bauda'),
        new Person('Staska', 'Virėjas'),
    ];
    console.group('1.1. Sukurkite klasę Person, kurios objektams būtų galima priskirti vardą ir pavardę. Šios klasės objektams susigeneruoti id - unikalus raktas. Taip pat sukurkite get"erį fullname, kuris grąžina vardą ir pavardę atskirtus tarpu. Atspausdinkite kelis šios klasės objektus, ir pademonstruokite get"erio veikimą.');
    {
        console.log(people);
        people.forEach((p) => console.log(p.fullname));
    }
    console.groupEnd();
    console.group('1.2. Sukurkite klasę Student, kuri paveldėtų klasę Person. Be Person klasės paveldimų savybių, klasę Student turi turėti savybę "marks", kurioje bus saugomi studento pažymiai. Konstruktoriaus vykdymo metu, "marks" reikšmei turi būti sukuriamas tuščias masyvas. Student klasėje sukurkite metodą "addMark" kuris leistų įdėti naują pažymį - sveiką skaičių nuo 1 iki 10. Taip pat sukurkite get"erį "avg", kuris skaičiuotų studento vidurkį pagal esamus pažymius. Sukurkite bent 2 Student klasės objektus ir atspausdinkite visus get"erius ir pavaizduokite metodų funkcionalumą konsolėje.');
    {
        const stud1 = new Student('Kiauraklis', 'Balkonėjus');
        const stud2 = new Student('Sulinda', 'Gylaitaitė');
        const students = [stud1, stud2];
        console.group('Studenčiokai');
        students.forEach((s) => console.log(s));
        console.groupEnd();
        console.group('Studentų vidurkiai:');
        students.forEach(({ fullname, avg }) => console.log({ fullname, avg }));
        console.groupEnd();
        console.group('Pridedami pažymiai:');
        const marks1 = [5, 6, 7];
        console.log(`Pirmam studentui: ${marks1.join(', ')}`);
        marks1.forEach((mark) => stud1.addMark(mark));
        const marks2 = [5, 9, 10];
        console.log(`Antram studentui: ${marks2.join(', ')}`);
        marks2.forEach((mark) => stud2.addMark(mark));
        console.groupEnd();
        console.group('Studentų vidurkiai po pridėjimo:');
        students.forEach(({ fullname, avg }) => console.log({ fullname, avg }));
        console.groupEnd();
    }
    console.groupEnd();
    console.group('1.3. Sukurkite klasę Lecturer, kuri paveldėtų klasę Person. Papildomai klasei Lecturer sukurkite savybę "salary", kuri privalo būti priskirta objekto sukūrimo metu. Inkapsuliuokite savybę "salary" taip, kad ji galėtų būti skaičius nuo 1800 iki 4400 su ne daugiau nei 2 skaičiais po kablelio. Taip pat sukurkite get"erį "salaryNeto", kuris atspausdintų suapvalintą atlyginimą iki sveikų skaičių atskaičiavus mokesčius: GPM 20%, PSD 6.98%, VSD 12.52%. Sukurkite bent 2 Lecturer klasės objektus ir atspausdinkite visus get"erius konsolėje.');
    {
        const lecturer1 = new Lecturer(3000, 'Servacijus', 'Tritonas');
        const lecturer2 = new Lecturer(3200, 'Vorė', 'Tinklaitienė');
        const lecturers = [lecturer1, lecturer2];
        console.group('Dėstytuvai:');
        lecturers.forEach((l) => console.log(l));
        console.groupEnd();
        console.group('Dėstytojų atlyginimai:');
        lecturers.forEach(({ fullname, salary, salaryNeto }) => console.log({
            fullname,
            salary,
            salaryNeto,
        }));
        console.groupEnd();
    }
    console.groupEnd();
    console.group('1.4. Sukurkite viešai [1.] užduočiai pasiekiamą masyvą "allPeople". [1.1], [1.2] ir [1.3] užduotyse sukurtus objektus įdėkite į šį masyvą. Atspausdinkite visų žmonių elementų "fullname"');
    {
    }
}
console.groupEnd();
//# sourceMappingURL=main.js.map