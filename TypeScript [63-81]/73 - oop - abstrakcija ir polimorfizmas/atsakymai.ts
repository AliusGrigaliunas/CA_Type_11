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

// 80min
console.group('1. Implementuokite figūrų abstrakciją ir polimorfizmą naudojant abstrakčią klasę');
{
  // ↓↓↓↓ Klasės ↓↓↓↓
  abstract class Shape2D {
    public abstract getPerimeter(): number;

    public abstract getArea(): number;
  }

  class Rectangle extends Shape2D {
    private height: number;

    private width: number;

    public constructor(width: number, height: number) {
      super();

      this.width = width;
      this.height = height;
    }

    public getPerimeter = (): number => 2 * this.height + 2 * this.width;

    public getArea = (): number => this.width * this.height;
  }

  class Circle extends Shape2D {
    private radius: number;

    public constructor(radius: number) {
      super();

      this.radius = radius;
    }

    public getPerimeter = (): number => 2 * Math.PI * this.radius;

    public getArea = (): number => Math.PI * this.radius ** 2;
  }

  // ↑↑↑↑ Klasės ↑↑↑↑

  // 10min
  console.log('1.1. Sukurkite abstrakčią klasę Shape2D, kuri turėtų 2 abstrakčius metodus. Abu šie metodai neturi parametrų ir grąžina skaičių: "getPerimeter" ir "getArea"');

  // 30min
  console.log('1.2. Sukurkite Rectangle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');

  // 30min
  console.log('1.3. Sukurkite Circle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');

  // 10min
  console.groupCollapsed('1.4. Sukurkite "Shape2D" tipo masyvą, kuriame būtų 2 apskritimai ir 2 keturkampiai. Atspausdinkite visų figūrų plotus ir perimetrus naudodami "Shape2D" klasės abstrakčius metodus');
  {
    const shapes: Shape2D[] = [
      new Rectangle(500, 200),
      new Rectangle(300, 300),
      new Circle(40),
      new Circle(70),
    ];

    console.log('Figūros:');
    console.table(shapes);

    console.group('Perimetrai:');
    shapes.forEach((shape) => {
      console.log(shape.getPerimeter());
    });
    console.groupEnd();

    console.group('Plotai:');
    shapes.forEach((shape) => {
      console.log(shape.getPerimeter());
    });
    console.groupEnd();
  }
  console.groupEnd();
}
console.groupEnd();

// 20min
console.group('2. Implementuokite figūrų abstrakciją ir polimorfizmą naudojant interface\'ą');
{
  // ↓↓↓↓ Klasės ↓↓↓↓
  interface Shape2D {
    getPerimeter(): number;
    getArea(): number;
  }

  class Rectangle implements Shape2D {
    public constructor(private width: number, private height: number) { }

    public getPerimeter = (): number => 2 * this.height + 2 * this.width;

    public getArea = (): number => this.width * this.height;
  }

  class Circle implements Shape2D {
    public constructor(private radius: number) { }

    public getPerimeter = (): number => 2 * Math.PI * this.radius;

    public getArea = (): number => Math.PI * this.radius ** 2;
  }

  // ↑↑↑↑ Klasės ↑↑↑↑

  // 5min
  console.log('2.1. Sukurkite abstrakčią klasę Shape2D, kuri turėtų 2 abstrakčius metodus. Abu šie metodai neturi parametrų ir grąžina skaičių: "getPerimeter" ir "getArea"');

  // 5min
  console.log('2.2. Sukurkite Rectangle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');

  // 5min
  console.log('2.3. Sukurkite Circle klasę kuri paveldi Shape2D klasę ir implementuokite metodus. Konstruktoriaus ir savybes pasirinkite taip, kad galėtumėte implementuoti abstrakčių metodų logiką.');

  // 5min
  console.groupCollapsed('2.4. Sukurkite "Shape2D" tipo masyvą, kuriame būtų 2 apskritimai ir 2 keturkampiai. Atspausdinkite visų figūrų plotus ir perimetrus naudodami "Shape2D" klasės abstrakčius metodus');
  {
    const shapes: Shape2D[] = [
      new Rectangle(500, 200),
      new Rectangle(300, 300),
      new Circle(40),
      new Circle(70),
    ];

    console.log('Figūros:');
    console.table(shapes);

    console.group('Perimetrai:');
    shapes.forEach((shape) => {
      console.log(shape.getPerimeter());
    });
    console.groupEnd();

    console.group('Plotai:');
    shapes.forEach((shape) => {
      console.log(shape.getPerimeter());
    });
    console.groupEnd();
  }
  console.groupEnd();
}
console.groupEnd();
