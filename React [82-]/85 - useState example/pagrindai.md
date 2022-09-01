__funkcinis komponenetas__ - tai yra funkcija, kuri grąžina JSX. Funkcinis komponentas turi grąžinti VIENĄ tėvinį JSX elementą. Jeigu norite grąžinti daugiau nei vieną, turi apgaubti grąžinamus JSX elementus naudojant React.Fragment. Sutrumpinta React.Fragment sintaksė - __<></>__

__props__ - tai komponentui perduodama informacija. Komponento naudojimo metu, props'ai perduodami lyg HTML elemento atributai. Šie atributai perduodami į Funkcinio komponento pirmajį parametrą objekto pavidalu.
Kiekvienas atributas (komponento panaudojime) įdedamas į pirmąjį parametrą - objektu (komponento aprašyme). Naudojant TypeScript privamola aprašyti props'ų tipus. Dažniausiai tai daroma naudojant React.FC<JūsųKomponentoPropsTipas>.

__children__ - tai komponento panaudojime esanti turinys tarp komponento atidarymo ir uždarymo. Šis turinys yra perduodamas kaip prop'sas. Kuriant savo prop'sus STIPRIAI NEPATARTINA naudoti prop'so pavadinimo children, nes kiti programuotojai jį gali suprasti kaip turinį esantį tarp atidarymo ir uždarymo.


__Turinio atsinaujimo taisyklė__ - Jeigu norite pakeiti atvaizdavimą, turite perkrauti komponentą, pakeitus jo __state__ arba perduodant jam naujus __props__'us.

## Kabliukai - Hooks
__React.useState__ - tai funkcija, kuri grąžina masyvą iš dviejų elementų:
  1. reikšmė skirta naudojimui (bet ne keitimui)
  2. funkcija skirta tai reikšmei keisti (kuri išprovokuoja komponento persikrovimą)
Praktikoje beveik visada šios, 2 elementų dydžio masyvo, reikšmės yra pasiekiamus naudojant destrukturizaciją:
```tsx
  const [reikšmė, funkcijaReikšmeiNustatyti] = React.useState(pradinėReikšmė);
```
__React.useState__ kabliukas (hook) naudojamas išsaugoti/kaupti/perpanaudoti reikšmę persikraunant komponentui. 
Jeigu bandote nustatyti naują reikšmę, naudojant __funkcijaReikšmeiNustatyti__, kuri sutampa (tenkina operatorių ===), komponentas nebus perkraunamas.