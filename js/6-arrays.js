let tablica = ["monika", "Lukasz", "konrad"];
//console.log(tablica);
tablica[0]= "karolina";
tablica.push("Michal");//element na koncu dodaje
tablica.unshift("Adam");//element na poczatku
tablica.shift(); //usuwa element na poczatku
tablica.pop();//usuwa element na koncu

// 1 -znajdz element pod indexem 1;
// 2 - usun 2 elementy;
// "Przemek, Lorem", -dodaj "Przemek, Lorem"
//0- nic nie usuwaj;

//tablica.splice(1, 0, "Przemek", "Lorem");

//tablica.splice(1, 2, "Przemek", "Lorem");


console.log(tablica.indexOf("Lukasz"));