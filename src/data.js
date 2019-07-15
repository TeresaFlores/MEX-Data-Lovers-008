window.data ={  
  
  show: (pokemon) => {
  let cardPokemon= []; //variable vacia para crear array con nueva informacion   
  
  for(let i=0; i< pokemon.length;i++) { //bucle para buscar en la data informacion especifica
    let number= pokemon[i].num;
    let name= pokemon[i].name;
    let image= pokemon[i].img;
    let type= pokemon[i].type;
    let debility= pokemon[i].weaknesses;     
    
    //hacer nuevo array y añadir cada elemento
    cardPokemon.push(
      {
        number,
        name,
        image,
        type,
        debility
      }
    ); 
    
  }
  return cardPokemon; 

}
};



// // const showPokemon = window.data.show(POKEMON.pokemon);

      

// //       const total=  (totalHierba, totalVeneno, totalFuego, totalVuelo, totalAgua) => {
// //         total <= 20; 
// //         console.log(total);
// //       }

// computeStats: (type)=> {
//     const hierba = showPokemon.filter(showPokemon => showPokemon.type.includes("Grass"));
//       const totalHierba= hierba.lengt;
//     const veneno = showPokemon.filter(showPokemon => showPokemon.type.includes("Posison"));
//       const totalVeneno= veneno.length;
//     const fuego = showPokemon.filter(showPokemon => showPokemon.type.includes("Fire"));
//       const totalFuego= fuego.length;
//     const volador = showPokemon.filter(showPokemon => showPokemon.type.includes("Flying"));
//      const totalVuelo= volador.length;
//     const agua = showPokemon.filter(showPokemon => showPokemon.type.includes("Water"));
//      const totalAgua= agua.length;
//     const electrico = showPokemon.filter(showPokemon => showPokemon.type.includes("Electric"));
//       const totalElectrico= electrico.length;
//     const insecto = showPokemon.filter(showPokemon => showPokemon.type.includes("Bug"));
//       const totalInsecto= insecto.length;
//     const roca = showPokemon.filter(showPokemon => showPokemon.type.includes("Rock"));
//      const totalRoca= roca.length;
//     const hielo = showPokemon.filter(showPokemon => showPokemon.type.includes("Ice"));
//       const totalHielo= hielo.length;
//     const psyquico = showPokemon.filter(showPokemon => showPokemon.type.includes("Psychic"));
//       const totalPsyquico= psyquico.length;
//     const normal = showPokemon.filter(showPokemon => showPokemon.type.includes("Normal"));
//       const totalNormal= normal.length;
//     const tierra= showPokemon.filter(showPokemon => showPokemon.type.includes("Ground"));
//       const totalTierra= tierra.length;
//     const dragon = showPokemon.filter(showPokemon => showPokemon.type.includes("Dragon"));
//       const totalDragon= dragon.length;
//     const fantasma = showPokemon.filter(showPokemon => showPokemon.type.includes("Ghost"));
//       const totalFantasma= fantasma.length;
//     const oscuro = showPokemon.filter(showPokemon => showPokemon.type.includes("Dark"));
//       const totalOscuro= oscuro.length;
//     const lucha = showPokemon.filter(showPokemon => showPokemon.type.includes("Fighting"));
//       const totalLucha= lucha.length;


// const totales= () => {

// return totalHielo,totalFuego, totalVuelo  <= 20;
// }
// console.log (totales); 