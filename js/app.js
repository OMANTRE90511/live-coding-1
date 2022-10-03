// Escribe tu código aquí.
let arreglo = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
var palabra = document.getElementById("campoTexto").value;
var boton = document.getElementById("btnEnviar");
let arr = new Array();

//---------- PARTE 1 -------------------//
boton.addEventListener("click", function (e){
  e.preventDefault();
  arreglo.forEach(elemento => {
    if (elemento.length > palabra.length) {
      console.log(elemento, typeof(elemento), elemento.length);
      arr.push(elemento);
    }
  })
//---------- PARTE 2 -------------------//
  let ul = document.getElementsByClassName("listIni")[0];
  let li = document.createElement("li");
  li.className = "listas"
  //console.log(ul);
  arr.forEach(element => {
    ul.prepend(li.cloneNode(true));
    li.innerText = element;
  });
});


