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

type StringPair = [string, string];

// 10 min - 8:45
console.groupCollapsed('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
  const toUpperCase = (str: string): string => str.toUpperCase();

  const arg1 = 'labas';
  const arg2 = 'visogero';
  const arg3 = 'man patinka bananai';

  console.table({
    [`toUpperCase(${arg1})`]: toUpperCase(arg1),
    [`toUpperCase(${arg2})`]: toUpperCase(arg2),
    [`toUpperCase(${arg3})`]: toUpperCase(arg3),
    empty: undefined,
  });
}
console.groupEnd();

// 10 min - 9:13
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
  const symbolCount = (str1: string, str2: string): number => str1.length + str2.length;

  const args1: StringPair = ['labas', 'vakaras'];
  const args2: StringPair = ['viso', 'gero'];
  const args3: StringPair = ['laba', 'diena'];

  console.table({
    [`symbolCount(${JSON.stringify(args1)})`]: symbolCount(...args1),
    [`symbolCount(${JSON.stringify(args2)})`]: symbolCount(...args2),
    [`symbolCount(${JSON.stringify(args3)})`]: symbolCount(...args3),
    empty: undefined,
  });
}
console.groupEnd();

// 10 min - 9:45
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
  const includesLetter = (str: string, letter: string): boolean => str.includes(letter);

  const args1: StringPair = ['labas', 'l'];
  const args2: StringPair = ['labas', 'z'];
  const args3: StringPair = ['kepenys', 'e'];

  console.table({
    [`includesLetter(${JSON.stringify(args1)})`]: includesLetter(...args1),
    [`includesLetter(${JSON.stringify(args2)})`]: includesLetter(...args2),
    [`includesLetter(${JSON.stringify(args3)})`]: includesLetter(...args3),
    empty: undefined,
  });
}
console.groupEnd();

// 10 min - 10:17
console.group('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
  const equalSymbolCount = (str: string): boolean => str.length % 2 === 0;

  const arg1 = 'labas';
  const arg2 = 'visogero';
  const arg3 = 'man patinka bananai';

  console.table({
    [`equalSymbolCount(${arg1})`]: equalSymbolCount(arg1),
    [`equalSymbolCount(${arg2})`]: equalSymbolCount(arg2),
    [`equalSymbolCount(${arg3})`]: equalSymbolCount(arg3),
    empty: undefined,
  });
}
console.groupEnd();

// 15 min - 10:43
// hint: regex
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{

}
console.groupEnd();

// 15 min
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{

}
console.groupEnd();

// 15 min
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{

}
console.groupEnd();

// 20 min
//  8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{

}
console.groupEnd();

// 60 min
// 9. Sukurkite funkciją, kuri taiso teksto klaidas, pagal tokius reikalavimus:
//  * Pirma sakinio raidė didžioji.
//  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
//  * Pašalinti tarpus aplink visą tekstą
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{

}
console.groupEnd();
