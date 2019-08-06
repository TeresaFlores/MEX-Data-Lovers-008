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

//const numberPok = showPokemon.find(showPokemon => showPokemon.type === "Grass");
//console.log(numberPok);


// const sortData = (showPokemon) => {
  
//   if(orderPokemon.value == "A") { //Se utilza if para indicarle que cuan inicie con A aplique el orden A-Z
//     console.log(showPokemon.sort((a,b) => {a.name.localeCompare(b.name)}));
    
//   } else if(orderPokemon.value == "Z") {
//     console.log(showPokemon.sort((a,b) => {b.name.localeCompare(a.name)}));
//   }
  
//   printCards(sortData);
// }

// orderPokemon.addEventListener("change", () => {
//   sortData(showPokemon)
// })


// const changeOrder = (showPokemon) =>{
//   const alfabeticA = showPokemon.sort((a,b) =>{
//     return a.name.localeCompare(b.name);
//   });
//   console.log(alfabeticA);

//   const alfabeticZ = showPokemon.sort ((a,b) => {
//     return b.name.localeCompare(a.name);
//   });
//   console.log(alfabeticZ);
// };
// changeOrder(showPokemon);


// const newPasto = showPokemon.filter(pokemon => pokemon.type.includes("Flying"));
// console.log(newPasto)

// const changeOrden = (showPokemon) =>{
//   const numberMayor = showPokemon.reverse();
//   console.log(numberMayor);
// }
// changeOrden(showPokemon);


// //Funcion para filtrar por tipo
//const pasto= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Grass"));
//console.log(pasto)
// const insecto= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Bug"));
// //console.log(insecto)
// const hielo= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Ice"));
// //console.log(hielo)
// const suelo= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Ground"));
// //console.log(suelo)
// const lucha= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Fighting"));
// //console.log(lucha)
// const hada= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Fairy"));
// //console.log(hada)
