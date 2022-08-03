"use strict";
const numbers = [1, 2, 3, 4, 5, 6];
const names = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
const people = [{
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
const printString = (str) => console.log(str);
const printStrings = (strings) => {
    strings.forEach(printString);
};
const numberSumReducer = (sum, num) => sum + num;
const sumNumbers = (nums) => nums.reduce(numberSumReducer, 0);
const createPeopleArray = (p1, p2) => [p1, p2];
console.groupCollapsed('Panaudojimo pavyzdžiai:');
{
    console.group('printStrings');
    {
        printStrings(names);
    }
    console.groupEnd();
    console.group('sumNumbers');
    {
        const result = sumNumbers(numbers);
        console.log({
            numbers,
            result,
        });
    }
    console.groupEnd();
    console.group('createPeopleArray');
    {
        const couple = createPeopleArray(people[0], people[1]);
        console.log(couple);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('Užduotys');
{
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        const nums = [1, -8, -6, 7, 5, 1];
        const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
        function addPositiveNumbers(arr) {
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
        const createAbbrevation = (words) => words
            .reduce((prevAbbrv, word) => prevAbbrv + word[0], '');
        const stringMatrix = [
            ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
            ['Lietuvos', 'Respublikos', 'Televizija'],
            ['Loughing', 'Out', 'Loud'],
        ];
        stringMatrix.forEach((words) => {
            console.log(`[ ${words.join(', ')}] ->`, createAbbrevation(words));
        });
    }
    console.groupEnd();
    console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
    {
        const multiplyNumbers = (nums) => nums.reduce((prevProduct, num) => prevProduct * num);
        const numberMatrix = [
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
//# sourceMappingURL=main.js.map