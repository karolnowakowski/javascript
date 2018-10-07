//add event by html dom

let naszH2 = document.querySelector("#sectionFirst > h2");

function pokazNaClicku () {
    
    console.log(naszH2.innerHTML);
    
}

naszH2.onclick = pokazNaClicku;


//add events by addEventListener()

let mainHeader = document.querySelector("#main-header");

function mouseOverEvent() {
    
    mainHeader.style.color = "red";
    // this.style.color = "red"; - alternatywa
    
}

function mouseOutEvent() {
    
    mainHeader.style.color = "green";
    
}


mainHeader.addEventListener("mouseover", mouseOverEvent);
mainHeader.addEventListener("mouseout", mouseOutEvent);


mainHeader.removeEventListener("mouseover", mouseOverEvent);
mainHeader.removeEventListener("mouseout", mouseOutEvent);


//zablokowanie dzialania linku - preventDefault

let superLink = document.getElementById("super-link");

function zablokuj(domyslneZachowanie) {
    
    domyslneZachowanie.preventDefault();
    console.log("click");
}

superLink.onclick = zablokuj;

//stop propagation()


function clickHeader() {
    
    console.log("Kliknięto w <Header>");
}


function clickH1(domyslneZachowanie) {
    domyslneZachowanie.stopPropagation();
    console.log("Kliknięto w <h1>");
}

document.querySelector("header").onclick = clickHeader;
document.querySelector("#main-header").onclick = clickH1;












