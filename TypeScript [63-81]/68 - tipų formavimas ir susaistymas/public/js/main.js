"use strict";
console.group('1. Tipų indeksai');
{
    const users = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496',
                },
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets',
            },
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618',
                },
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains',
            },
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
                street: 'Douglas Extension',
                suite: 'Suite 847',
                city: 'McKenziehaven',
                zipcode: '59590-4157',
                geo: {
                    lat: '-68.6102',
                    lng: '-47.0653',
                },
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
                name: 'Romaguera-Jacobson',
                catchPhrase: 'Face to face bifurcated interface',
                bs: 'e-enable strategic applications',
            },
        },
    ];
    console.groupCollapsed('1.1. Sukurkite tipą Address naudodami tipą User. Parašykite funkciją "getUserAddress", kuri priima vartotoją (User) ir grąžina vartotojo adresą (Address)');
    {
        const getAddress = ({ address }) => address;
        const addresses = users.map(getAddress);
        console.table(addresses);
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite tipą Company naudodami tipą User. Parašykite funkciją "getUserCompany", kuri priima vartotoją (User) ir grąžina vartotojo kompaniją (Company)');
    {
        const getCompany = ({ company }) => company;
        const companies = users.map(getCompany);
        console.table(companies);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Pagalbiniai tipai');
{
    const cars = [
        {
            brand: 'BMW', model: 'X1', make: 2000, color: 'black',
        },
        { brand: 'BMW', model: 'X2', make: 2001 },
        {
            brand: 'BMW', model: 'X3', make: 2002, color: 'red',
        },
        { brand: 'BMW', model: 'X4', make: 2003 },
    ];
    console.groupCollapsed('2.1. Sukurkite funkciją "selectWithColor" kurti atrenka visas mašinas turinčias aprašytą spalvą, ir aprašykite joms tipą BMWCarFull su visomis privalomomis savybėmis');
    {
        const selectWithColor = (allCars, color) => {
            const filteredCars = allCars.filter((car) => car.color === color);
            return filteredCars;
        };
        const redCars = selectWithColor(cars, 'red');
        const blackCars = selectWithColor(cars, 'black');
        console.log({
            redCars,
            blackCars,
        });
    }
    console.groupEnd();
    console.groupCollapsed('2.2. Sukurkite funkciją "refactorBmwCar" kurti perkuria mašiną.  Pašalina mašinos savybė brand, o model savybę pakeičia taip, kad joje būtų markė ir modelis atskirta tarpu. Visos kitos savybės paliekamos tokios pat');
    {
    }
    console.groupEnd();
}
console.groupEnd();
console.group('3. Tipų apjungimas ir “&” sankirtos operatorius');
{
    console.groupCollapsed('3.1. Sukurkite tipą UserRegistration naudodami tipą User. UserRegistration tipas turi turėti papildomas ir privalomas savybes emailConfirmation ir passwordConfirmation, bei pašalintą savybę cartItems. Sukūrus tipą UserRegistration sukurkite funkciją "registerUser" kuri priimtų UserRegistration tipo parametrą ir grąžintų User tipo objektą, jeigu sutampa email su emailConfirmation ir password su passwordConfirmation. Jeigu pakartotinės savybės nesutampa turi būti grąžinama "null" reikšmė');
    {
    }
    console.groupEnd();
}
console.groupEnd();
console.group('4. Tipų susaistymas');
{
    console.group('4.1. Turite tipą Accomodation, jo visos savybės yra pasiekiamos ir keičiamos tiesiogiai. Naudodami saistymo metodologiją sukurkite tipą EncapsulatedAccomodation. Panaudokite kiekvieną Accomodation tipo savybę, kad performuoti ją į setterio ir getterrio funkcijų poras. Sukūrę tipą, aprašykite funkciją "encapsulateAccomodation", kuri priimtų Accomodation tipo parametrą ir grąžintų EncapsulatedAccomodation objektą su veikiančiais setteriais ir getteriais.');
    {
        const encapsulateAccomodation = (accomodation) => {
            let { address, squares, type } = accomodation;
            return {
                setAddress: (value) => { address = value; },
                setSquares: (value) => { squares = value; },
                setType: (value) => { type = value; },
                getAddress: () => address,
                getSquares: () => squares,
                getType: () => type,
            };
        };
        const accomodation1 = {
            address: 'Bernužėlių g. 17, Rokelių kaimas, Pasvalio raj.',
            squares: 224,
            type: 'House',
        };
        console.log('Encapsulating accomodation1:', JSON.stringify(accomodation1, null, 4));
        const encapsulatedAccomodation1 = encapsulateAccomodation(accomodation1);
        console.log('Changing properties using setters...');
        encapsulatedAccomodation1.setAddress('Bernužėlių g. 17, Rokelių kaimas, Biržų raj.');
        encapsulatedAccomodation1.setSquares(180);
        console.log('using getters after changes', {
            'getAddress()': encapsulatedAccomodation1.getAddress(),
            'getSquares()': encapsulatedAccomodation1.getSquares(),
            'getType()': encapsulatedAccomodation1.getType(),
        });
        console.log('-----');
        const accomodation2 = {
            address: 'Vilniaus g. 26a, Kaunas',
            squares: 64,
            type: 'Flat',
        };
        console.log('Encapsulating accomodation2:', JSON.stringify(accomodation2, null, 4));
        const encapsulatedAccomodation2 = encapsulateAccomodation(accomodation2);
        console.log('Changing properties using setters...');
        encapsulatedAccomodation2.setSquares(110);
        encapsulatedAccomodation2.setType('House');
        console.log('using getters after changes', {
            'getAddress()': encapsulatedAccomodation2.getAddress(),
            'getSquares()': encapsulatedAccomodation2.getSquares(),
            'getType()': encapsulatedAccomodation2.getType(),
        });
        console.log(encapsulatedAccomodation1);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map