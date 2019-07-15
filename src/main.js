let information= document.getElementById("contenido-cards");
const showPokemon = window.data.show(POKEMON.pokemon);//llamando data de archivo data.js
const select = document.getElementById("select-type-pokemon");//llamando  a select
let printCards = (showPokemon) => {
 let string = "";
 showPokemon.forEach(element => { 

   string += `<div class="tarjetas">
   <img src="${element.image}">
   <p id="num" >No. ${element.number}</p>
   <p id= "nombre">${element.name}</p>
   <p id= "tipo">${element.type}</p>
   <p id="debilidad">Debilidad: ${element.debility}</p>
 </div>`
 })
 information.innerHTML = string;
//console.log(printCards);
};
printCards(showPokemon);



//Funcion para filtrar por tipo
let arrayType = (showPokemon) => {
  const newArray = showPokemon.filter(pokemon => pokemon.type[0] == select.value);  

  if(newArray == "Todos") {
    //printCards(showPokemon);
    printCards(showPokemon);
  }else{
    //console.log(newArray);
    printCards(newArray);  
  }
 }

 select.addEventListener("change", () => {
  arrayType(showPokemon)
 });


 


 
// //agregar una tabla a html
//     function genera_tabla() {
//       // Obtener la referencia del elemento body
//       var body = document.getElementsByTagName("body")[0];
     
//       // Crea un elemento <table> y un elemento <tbody>
//       var tabla   = document.createElement("table");
//       var tblBody = document.createElement("tbody");
     
//       // Crea las celdas
//       for (var i = 0; i < 17; i++) {
//         // Crea las hileras de la tabla
//         var hilera = document.createElement("tr");
     
//         for (var j = 0; j < 2; j++) {
//           // Crea un elemento <td> y un nodo de texto, haz que el nodo de
//           // texto sea el contenido de <td>, ubica el elemento <td> al final
//           // de la hilera de la tabla
//           var celda = document.createElement("td");
//           var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
//           celda.appendChild(textoCelda);
//           hilera.appendChild(celda);
//         }
     
//         // agrega la hilera al final de la tabla (al final del elemento tblbody)
//         tblBody.appendChild(hilera);
//       }
     
//       // posiciona el <tbody> debajo del elemento <table>
//       tabla.appendChild(tblBody);
//       // appends <table> into <body>
//       body.appendChild(tabla);
//       // modifica el atributo "border" de la tabla y lo fija a "2";
//       tabla.setAttribute("border", "1");
//     }

