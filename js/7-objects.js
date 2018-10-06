let adam = {
    
    wiek: 1000,
    wlosy: false,
    oczy: true,
    nazwisko: 'Dou'
};

//console.log(adam.nazwisko, adam.wlosy);

//ES6

class Osoba {
    constructor(imie, nazwisko, wiek, kolorOczu) {
        this.name = imie;
        this.lastName = nazwisko;
        this.age = wiek;
        this.eyeColor = kolorOczu;
    }
    printInfo() {
        
        let info = `name: ${this.name}, lastName: ${this.lastName}, wiek: ${this.age}`;
            console.log(info);
    }
}

let mateusz = new Osoba("Mateusz", "Górski");
////mateusz.printInfo();
//mateusz.age = 30;
//mateusz.eyeColor = null;


let lukasz = new Osoba("Lukasz", "Nowak", 50, "piwny");


//mateusz.printInfo();
//console.log(mateusz);
console.log(lukasz.age, lukasz.eyeColor);
lukasz.printInfo();

