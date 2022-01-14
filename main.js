const cosasQueAprendimos = [
  {
    tema: 'terminal',
    class: '',
  },
  {
    tema: 'node',
    class: '',
  },
  {
    tema: 'oop',
    class: '',
  },
  {
    tema: 'flexbox',
    class: '',
  },
  {
    tema: 'css',
    class: '',
  },
  {
    tema: 'dom',
    class: 'special',
  },
];

function main() {
  //ESCRIBIR CODIGO
  //Crear nuevos elementos `<li>` basados en el array cosasQueAprendimos[] que está en el main.js.
  //Por cada elemento del array crear un elemento `<li>` con la clase indicada en cada elemento.
  //cosa.tema se refiere al valor de la variable(tema) de cada objeto
  //"cosa.class &&" comprueba si es true(tiene contenido) si es true ejecuta esa linea
  cosasQueAprendimos.forEach(cosa => {
    const nuevoItem = document.createElement('li')
    nuevoItem.innerText = cosa.tema
    cosa.class && nuevoItem.classList.add(cosa.class)
    document.querySelector('ul.lista').appendChild(nuevoItem)
  })
}

main();
