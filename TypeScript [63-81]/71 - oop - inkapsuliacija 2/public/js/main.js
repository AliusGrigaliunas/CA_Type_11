"use strict";
const capitalize = (word) => {
    const words = word.trim().split(' ');
    const capitalizedWords = words.map((w) => w[0].toUpperCase() + w.slice(1));
    return capitalizedWords.join(' ');
};
class Person {
    privateName;
    surname;
    age;
    constructor(name, surname, age) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
    }
    setName(name) {
        if (name === '')
            throw new Error('Negali būti tuščias');
        if (name.length < 2)
            throw new Error('Vardas turi būti bent iš 2 raidžių');
        this.privateName = capitalize(name);
    }
    setSurname(surname) {
        if (surname === '')
            throw new Error('Negali būti tuščias');
        if (surname.length < 2)
            throw new Error('Pavardė turi būti bent iš 2 raidžių');
        this.surname = capitalize(surname);
    }
    setAge(age) {
        if (age % 1 !== 0)
            throw new Error('Amžius turi būti sveikas skaičius');
        if (age < 1)
            throw new Error('Amžius negali būti mažesnis nei 1');
        if (age > 150)
            throw new Error('Amžius negali būti didesnis už 150');
        this.age = age;
    }
    getFullname() {
        return `${this.privateName} ${this.surname}`;
    }
    getAge() {
        return this.age;
    }
}
const people = [
    new Person('Liudvikas', 'XVIII', 31),
    new Person('varaloja', 'karksė barsė', 35),
    new Person('Ana maria', 'Laikauskaitė', 39),
];
console.groupCollapsed('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    const fullnames = people.map((p) => p.getFullname());
    console.log(fullnames);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    const ages = people.map((p) => p.getAge());
    console.log(ages);
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
}
console.groupEnd();
console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
}
console.groupEnd();
console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
}
console.groupEnd();
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
//# sourceMappingURL=main.js.map