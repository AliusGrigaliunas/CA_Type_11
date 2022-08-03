/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */
/*
  Aprašant masyvų tipus reikia nurodyti kokie elementai sudarys masyvai, galimos 2 sintaksės:
    * tipas[] -> number[], string[], Person[] ir t.t.
    * Array<tipas> -> Array<number>, Array<string>, Array<Person> ir t.t.
*/

type Person = {
  id: string,
  name: string,
  surname: string,
  age: number,
  height?: number, // Neprivaloma savybė
  weight?: number, // Neprivaloma savybė
};

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const names: Array<string> = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
const people: Person[] = [{
  id: '39304075689',
  name: 'Verundijus',
  surname: 'Bauda',
  age: 51,
}, {
  id: '39304075689',
  name: 'Ryja',
  surname: 'Žaneirytė',
  age: 41,
  height: 1.65,
  weight: 55,
}, {
  id: '39304075689',
  name: 'Brudas',
  surname: 'Veilokas',
  age: 11,
  height: 1.45,
  weight: 45,
}];

// Kaip ir kiti tipai, masyvai gali būti naudojami funkcijų parametrams arba funkcijų grąžinimo
// tipams aprašyti
type CreatePeopleArrayFunction = (p1: Person, p2: Person) => Person[];

const printString = (str: string): void => console.log(str);

const printStrings = (strings: string[]): void => {
  strings.forEach(printString);
};

const numberSumReducer = (sum: number, num: number): number => sum + num;

const sumNumbers = (nums: Array<number>): number => nums.reduce(numberSumReducer, 0);

const createPeopleArray: CreatePeopleArrayFunction = (p1, p2) => [p1, p2];

console.groupCollapsed('Panaudojimo pavyzdžiai:');
{
  console.group('printStrings');
  {
    printStrings(names);
  }
  console.groupEnd();

  console.group('sumNumbers');
  {
    const result: number = sumNumbers(numbers);
    console.log({
      numbers,
      result,
    });
  }
  console.groupEnd();

  console.group('createPeopleArray');
  {
    const couple: Array<Person> = createPeopleArray(people[0], people[1]);
    console.log(couple);
  }
  console.groupEnd();
}
console.groupEnd();

console.group('Užduotys');
{
  console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
  {
    const nums: number[] = [1, -8, -6, 7, 5, 1];

    const positiveNumberReducer = (
      sum: number,
      num: number,
    ): number => (num > 0 ? sum + num : sum);

    function addPositiveNumbers(arr: number[]): number {
      return arr.reduce(positiveNumberReducer, 0);
    }

    console.log({
      nums,
      sumOfPositiveNumbers: addPositiveNumbers(nums),
    });
  }
  console.groupEnd();

  console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
  {
    /*
      Pvz.:
       * ['Lietuviškas', 'Nepriklausomas', 'Kanalas'] -> LNK
       * ['Lietuvos', 'Respublikos', 'Televizija'] -> LRT
       * ['Loughing', 'Out', 'Loud'] -> LOL
    */
    const createAbbrevation = (words: string[]): string => words
      .reduce((prevAbbrv, word) => prevAbbrv + word[0], '');

    const stringMatrix: string[][] = [
      ['Lietuviškas', 'Nepriklausomas', 'Kanalas'], // 0
      ['Lietuvos', 'Respublikos', 'Televizija'], // 1
      ['Loughing', 'Out', 'Loud'], // 2
    ];

    stringMatrix.forEach((words) => {
      console.log(`[ ${words.join(', ')}] ->`, createAbbrevation(words));
    });
  }
  console.groupEnd();

  console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
  {
    /*
      Pvz.:
       * [1, 7, 8] -> 56
       * [98, 74, 5, 0] -> 0
       * [17, 10, 5] -> 850
    */

    const multiplyNumbers = (nums: number[]): number => nums.reduce(
      (prevProduct, num) => prevProduct * num,
    );

    const numberMatrix: number[][] = [
      [1, 7, 8],
      [98, 74, 5, 0],
      [17, 10, 5],
    ];

    numberMatrix.forEach((nums) => {
      console.log(`[ ${nums.join(', ')}] ->`, multiplyNumbers(nums));
    });
  }
  console.groupEnd();
}
console.groupEnd();
