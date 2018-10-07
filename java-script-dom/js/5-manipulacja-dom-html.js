//let parSecond = document.querySelector("#parSecond > p").innerHTML;
//let parSecond = document.querySelectorAll("#parSecond").innerHTML;
//console.log(parSecond);

let tablicaParagrafow = document.querySelectorAll("#parSecond p");

let allLinks = document.getElementsByClassName("link");// tablica ze wszystkimi linkami

//tablicaParagrafow.forEach();

tablicaParagrafow.forEach(function (element, index) {
    
    element.setAttribute("class", "pierwsza-klasa");
    
//    element.style.color = "red";
//    //console.log(element.innerHTML);
//    element.innerHTML = "Nowy tekst"; //tylko tekst ...
//    element.outerHTML = "<a href='#'>Teraz link</a><br />";//text oraz tagi
//    

});

allLinks[1].href = "https://google.pl";//zamiana linku oryginalnego na google.pl
//allLinks[1].className = "google-class";//zamienia klase
allLinks[1].classList.add("google-class");//dodaje nowa klase do zbioru tanlicy links



console.log(allLinks);



