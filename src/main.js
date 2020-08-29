import order from './data.js';
import data from './data/lol/lol.js';

const datos = data.data,
  filter = document.getElementById("filter"),
  arrayLegends = Object.values(datos),
  menuOptions = document.querySelector(".menuOptions");

/* menuOptions.addEventListener('click' ,(e) => {
  const option = e.target.id
  
  if(option == 'index'){
    document.querySelector('.container1').style.display = 'block'
  }
  else if(option == 'champions'){
    document.querySelector('.container1').style.display = 'none'
    document.querySelector('.container2').style.display = 'flex'
  }
  console.log('options',option) 
})  */

/*---LISTAR EN EL HTML---*/
const listLegends = (name, img, title) => {

  const legend = document.createElement("div"),
    imgLegend = document.createElement("img"),
    nameLegend = document.createElement("div"),
    titleLegend = document.createElement("div");

  nameLegend.innerHTML += name;
  titleLegend.innerHTML += `<p>"${title}"</p>`;
  legend.setAttribute("class", "legends");
  imgLegend.setAttribute("class", "img-container");
  imgLegend.setAttribute("src", img);
  nameLegend.setAttribute("class", "name");
  titleLegend.setAttribute("class", "name");

  document.getElementById("legends_container").appendChild(legend);
  legend.appendChild(imgLegend);
  legend.appendChild(nameLegend);
  legend.appendChild(titleLegend);

};

/*---TRAER DATA---*/

const getLegends = (objLegend) => {
  for (let i = 0; i < objLegend.length; i++) {
    let name = objLegend[i].name;
    let img = objLegend[i].splash;
    let title = objLegend[i].title;

    listLegends(name, img, title);

  }
};

getLegends(arrayLegends);

/*---FILTRO DE LA DATA---*/

filter.addEventListener('click', (e) => {
  const rol = e.target.id
  //console.log('rol',rol)
  if (rol == null || rol == '' || rol == 'All') {
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

selector.addEventListener("click", (e) => {
  const orderName = e.target.value;
  //console.log("prueba",e.target.value);
  if (orderName == "asc") {
    const asc = order.nameChampionAz(arrayLegends);
    document.getElementById("legends_container").innerHTML = "";
    getLegends(asc)
  } else if (orderName == "desc") {
    const desc = order.nameChampionZa(arrayLegends);
    document.getElementById("legends_container").innerHTML = "";
    getLegends(desc)
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
        <div class="name">"${legend.title}"</div>
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
