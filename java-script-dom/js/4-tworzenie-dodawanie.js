let istniejacyWezel = document.getElementById("parFirst");

let newParagraf = document.createElement("p");

//let newParagrafText = document.createTextNode("Tekst z java scriptu.");// --> tekst
//newParagraf.appendChild(newParagrafText);// wstawi tekst w <p></p>

newParagraf.appendChild(document.createTextNode("Tekst z java scriptu"));

newParagraf.setAttribute("class", "custom-class");//dodaje atrybut
newParagraf.removeAttribute("class");//usuwa atrybut

istniejacyWezel.appendChild(newParagraf);//wstawia w strukture HTML
//istniejacyWezel.removeChild(newParagraf);

//console.log(istniejacyWezel);
//console.log(newParagraf);