//let guzik = document.getElementById("przycisk");
//
//function ustawTlo() {
//    
//    let paragrafy = document.getElementsByClassName("pierwszy");
//    paragrafy[0].style.backgroundColor = "red";
//    paragrafy[1].style.backgroundColor = "yellow";
//
//}
//
//guzik.addEventListener("click", ustawTlo);

function ustawTlo() {
  let paragrafs = document.getElementsByTagName("p");
    
    paragrafs = Array.from(paragrafs); //przeksztalca html collection to arrays
    
    paragrafs.forEach(function (element, index) {
        if (index % 2 == 0) {
            
            element.style.backgroundColor = "red";
        }
        
        else {
            element.style.backgroundColor = "yellow";
            
        }
    })
    
}

document.querySelector("button").onclick = ustawTlo;