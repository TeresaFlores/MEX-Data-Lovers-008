// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const mostrar= () => {
  let pokemon= POKEMON.pokemon;
  
  for(i=0; i<= pokemon.length;i++) {
    let numero= pokemon[i].num;
    let nombre= pokemon[i].name;
    let imagen= pokemon[i].img;
    let tipo= pokemon[i].type;
    let debilidades= pokemon[i].weaknesses;
    //document.write(numero);
    //document.write(nombre);
    //document.write(imagen);
    //document.write(tipo);
    //document.write(debilidades);
  
  }
  
  //return 'pokemon';

};
mostrar();

// mostrar();
window.mostrar = mostrar;