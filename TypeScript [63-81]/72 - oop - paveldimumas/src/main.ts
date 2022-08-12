/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:
  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.
  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?
  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.
    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.
  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

console.group('1. Sukurkite klasę tėvinę Person vaikinėms klasėms ir išsaugokite joje bendrą funkcionalumą.');
{
  class Person {
    private static count: number = 0;

    private namePrivate!: string;

    private surnamePrivate!: string;

    public readonly id: string;

    public constructor(name: string, surname: string) {
      Person.count += 1;
      this.id = `Person_${Person.count}`;
      this.name = name;
      this.surname = surname;
    }

    public set name(val: string) {
      this.namePrivate = val;
    }

    public set surname(val: string) {
      this.surnamePrivate = val;
    }

    public get fullname(): string {
      return `${this.namePrivate} ${this.surnamePrivate}`;
    }
  }

  class Student extends Person {
    private marks: number[];

    public constructor(name: string, surname: string) {
      super(name, surname);
      this.marks = [];
    }

    public get avg() {
      return this.marks.length > 0
        ? this.marks.reduce((sum, mark) => sum + mark) / this.marks.length
        : 0;
    }

    public addMark(mark: number): void {
      if (mark < 1) throw new Error('Pažymys negali būti mažesnis už 1');
      if (mark > 10) throw new Error('Pažymys negali būti didesnis už 10');
      if (mark % 1 !== 0) throw new Error('Pažymys turi būti sveikas skaičius');

      this.marks.push(mark);
    }
  }

  class Lecturer extends Person {
    private static MIN_SALARY = 1800;

    private static MAX_SALARY = 4400;

    private static GPM_PERC = 0.20;

    private static PSD_PERC = 0.0698;

    private static VSD_PERC = 0.1252;
  }

  const people: Person[] = [
    new Person('Marikzas', 'Bauda'),
    new Person('Staska', 'Virėjas'),
  ];

  // 20min
  console.group('1.1. Sukurkite klasę Person, kurios objektams būtų galima priskirti vardą ir pavardę. Šios klasės objektams susigeneruoti id - unikalus raktas. Taip pat sukurkite get"erį fullname, kuris grąžina vardą ir pavardę atskirtus tarpu. Atspausdinkite kelis šios klasės objektus, ir pademonstruokite get"erio veikimą.');
  {
    console.log(people);
    people.forEach((p) => console.log(p.fullname));
  }
  console.groupEnd();

  // 40min
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

  // 50min
  console.group('1.3. Sukurkite klasę Lecturer, kuri paveldėtų klasę Person. Papildomai klasei Lecturer sukurkite savybę "salary", kuri privalo būti priskirta objekto sukūrimo metu. Inkapsuliuokite savybę "salary" taip, kad ji galėtų būti skaičius nuo 1800 iki 4400 su ne daugiau nei 2 skaičiais po kablelio. Taip pat sukurkite get"erį "salaryNeto", kuris atspausdintų suapvalintą atlyginimą iki sveikų skaičių atskaičiavus mokesčius: GPM 20%, PSD 6.98%, VSD 12.52%. Sukurkite bent 2 Lecturer klasės objektus ir atspausdinkite visus get"erius konsolėje.');
  {
  }
  console.groupEnd();

  // 10min
  console.group('1.4. Sukurkite viešai [1.] užduočiai pasiekiamą masyvą "allPeople". [1.1], [1.2] ir [1.3] užduotyse sukurtus objektus įdėkite į šį masyvą. Atspausdinkite visų žmonių elementų "fullname"');
  {
  }
}
console.groupEnd();
