import order from './data.js';
import data from './data/lol/lol.js';

const datos = data.data,
  filter = document.getElementById("filter"),
  arrayLegends = Object.values(datos);


/*---LISTAR EN EL HTML---*/
const listLegends = (name, img) => {
  const legend = document.createElement("div"),
    imgLegend = document.createElement("img"),
    nameLegend = document.createElement("div");

  nameLegend.innerHTML += name;
  legend.setAttribute("class", "legends");
  imgLegend.setAttribute("class", "img-container");
  imgLegend.setAttribute("src", img);
  nameLegend.setAttribute("class", "name");

  document.getElementById("legends_container").appendChild(legend);
  legend.appendChild(imgLegend);
  legend.appendChild(nameLegend);
};

/*---TRAER DATA---*/
const getLegends = (objLegend) => {
  for (let i = 0; i < objLegend.length; i++) {
    let name = objLegend[i].name;
    let img = objLegend[i].splash;
    listLegends(name, img);
  }
};

getLegends(arrayLegends);
const slice = document.getElementById('slice')
const mostrar8 = () => {
  const data = arrayLegends.slice(0,8);
  document.getElementById('legends_container').innerHTML = '';
  getLegends(data)
}

slice.addEventListener('click' , mostrar8)

/*---FILTRO DE LA DATA---*/
filter.addEventListener('click', (e) => {
  const rol = e.target.id;

  if (rol == 'All') {
    document.getElementById('legends_container').innerHTML = '';
    getLegends(arrayLegends);
  } else {
    const result = order.filterLegend(arrayLegends, rol)
    document.getElementById('legends_container').innerHTML = '';
    getLegends(result)
  }
})

/*ORDER */
const selector = document.querySelector("#order");
selector.addEventListener('click', (e) => {
  const orderName = e.target.value;

  if (orderName == 'asc') {
    const prueba = order.nameChampionAz(arrayLegends);
    document.getElementById('legends_container').innerHTML = '';
    getLegends(prueba)

  } else if (orderName == 'desc') {
    const prueba = order.nameChampionZa(arrayLegends);
    document.getElementById('legends_container').innerHTML = '';
    getLegends(prueba)
  }

});

/*BUSCADOR */
const inputSearch = document.querySelector('#inputSearch'),
   result = document.querySelector('#legends_container');

const search = () => {
  
  result.innerHTML = '';
  const texto = inputSearch.value.toLowerCase();

  for (let legend of arrayLegends) {
    let nombre = legend.name.toLowerCase()
    if (nombre.indexOf(texto) != -1) {

      result.innerHTML +=
        `<div class="legends">
        <img class="img-container" src="${legend.splash}" alt="">
        <div class="name">${legend.name}</div>
      </div>`
    }
  }

  if (result.innerHTML == '') {
    result.innerHTML +=
      `<div class="legends">
      <img class="img-container" src="./imagenes/notFound.gif" alt="">
      <div class="name">Not Found</div>
    </div>`
  }
}

inputSearch.addEventListener('keyup', search)

console.log('arrayLegends.slice(10,30)',arrayLegends.slice(0,8))