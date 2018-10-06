//let wyswietlImie = function(imie) {
//    
//    return imie;
//    
//}
//let wynikWyswietlImie = wyswietlImie("Krystian");
////wyswietlImie();
//console.log(wynikWyswietlImie);


//ES5 functions

//function dodaj (jeden, dwa, trzy) {
//    
//    let wynik = jeden + dwa + trzy;
//    return wynik;
//}
//
//let suma = dodaj (3,7,10);
//
//console.log(suma);
//
////dodaj (3,7,10);
//
////console.log(dodaj(3,7,10));

//ES6 functions

//= jeden parametr
//
//let wyswietlImie = imie => imie;
//console.log(wyswietlImie("ala"));



//= wiecej niz jeden parametr

//let wyswietlImie = (imie, imie2) => "imie: " + imie + "imie2: " + imie2;
    

let wyswietlImie = (imie, imie2) => {
    
   return "imie: " + imie + " imie2: " + imie2;
};

console.log(wyswietlImie("ala", "Karol"));

