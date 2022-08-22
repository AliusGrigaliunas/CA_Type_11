"use strict";
class ListNode {
    data;
    next;
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class List {
    head;
    tail;
    constructor(data) {
        if (data === undefined) {
            this.head = null;
            this.tail = null;
        }
        else {
            const newNode = new ListNode(data);
            this.head = newNode;
            this.tail = newNode;
        }
    }
    unshift = (data) => {
        const newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    };
    push = (data) => {
        const newNode = new ListNode(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    };
    forEach = (callback) => {
        if (this.head === null)
            return;
        let currentNode = this.head;
        while (true) {
            if (currentNode.next === null)
                break;
            callback(currentNode.data);
            currentNode = currentNode.next;
        }
    };
}
const stringList = new List();
const numberList = new List(5);
console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
    const stringNode1 = { data: 'labas', next: null };
    const stringNode2 = { data: 'vakaras', next: stringNode1 };
    console.log({
        listNode1: stringNode1,
        listNode2: stringNode2,
    });
}
console.groupEnd();
console.group('2. Sukurkite sąrašo klasę List');
{
    console.log('Tučias string sąrašas');
    console.log(stringList);
    console.log('number sąrašas');
    console.log(numberList);
}
console.groupEnd();
console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
    console.log('String sąrašas');
    console.log(stringList);
    console.log('Pridedamas 1', 'pirmas');
    stringList.unshift('pirmas');
    console.log('Sąrašas po pridėjimo', { ...stringList });
    console.log('Pridedamas 2', 'antras');
    stringList.unshift('antras');
    console.log('Sąrašas po pridėjimo', { ...stringList });
    console.log('Pridedamas Mazgas 3', 'trečias');
    stringList.unshift('trečias');
    console.log('Sąrašas po pridėjimo', { ...stringList });
}
console.groupEnd();
console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{
    console.log('String sąrašas');
    console.log(JSON.parse(JSON.stringify(numberList)));
    console.log('Pridedamas Mazgas 1', 1);
    numberList.push(1);
    console.log('Sąrašas po pridėjimo', JSON.parse(JSON.stringify(numberList)));
    console.log('Pridedamas Mazgas 2', 2);
    numberList.push(2);
    console.log('Sąrašas po pridėjimo', JSON.parse(JSON.stringify(numberList)));
    console.log('Pridedamas Mazgas 3', 3);
    numberList.push(3);
    console.log('Sąrašas po pridėjimo', JSON.parse(JSON.stringify(numberList)));
}
console.groupEnd();
console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
    console.log('string sąrašo spausdinimas');
    stringList.forEach((str) => console.log(str));
    const stringArr = [];
    const putInStringArr = (x) => {
        stringArr.push(String(x));
    };
    console.log('number sąrašo spausdinimas');
    numberList.forEach(putInStringArr);
    const numberListStringRepresentation = stringArr.join(' → ');
    console.log(numberListStringRepresentation);
}
console.groupEnd();
//# sourceMappingURL=main.js.map