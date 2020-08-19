import {
  example
} from './data.js';
import data from './data/lol/lol.js';

const legends_container = document.getElementById('legends_container'),
  legends_number = Object.keys(data.data).lenght,
  legends = document.createElement('div'),
  nombre = document.getElementById('name'),
  datos = data.data,
  descripcion = document.getElementById('info');
//console.log(data.data['Aatrox].blurb)

//console.log('diana',legends_cards.appendChild(legends))
//console.log(Object.keys(data.data))
const listLegends = (id,name,title) => {
  const legend = document.createElement('div'),
    imgLegend = document.createElement('img'),
    infoLegend = document.createElement('div');

    infoLegend.innerHTML += id + " " + name + " " + title;
    legend.setAttribute('class','legends');
    infoLegend.setAttribute('class','info')

    document.getElementById('legends_container').appendChild(legend);
    legend.appendChild(imgLegend);
    legend.appendChild(infoLegend);

}
let getLegends = () => {

  for ( const prop in datos){
    let id = datos[`${prop}`].id;
    let name = datos[`${prop}`].name;
    let title = datos[`${prop}`].title;
    listLegends(id, name, title);
    console.log('aaaaa',id+name+title)
  }

}

getLegends();
function crearLegends() {
  let datos = data.data;

  for (const prop in datos) {
    let item = legends_cards.querySelector(`#legends-${prop}`);
    let imagen = item.getElementsByTagName('img')[0];
    imagen.setAttribute('src', `${datos[prop].img}`);
    let name = item.getElementsByTagName('p')[0];
    name.textContent = `${prop}`
    console.log(item)

  }
}
//let datos = data.data,
  //  html='';

function foods() {
  for (const prop in datos) {

    return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${datos[prop].tags.map(food => `<li>${food}</li>`).join("")}
  </ul>
  `;
  }
}
console.log(foods());

function legendTemplate(legend) {
  return `
    <div class="animal">
    <img class="pet-photo" src="${legend.id}">
    <h2 class="pet-name">${legend.name} <span class="species">(${legend.title})</span></h2>
    <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
    ${legend.tags ? foods(legend.tags) : ""}
    </div>
  `;

}
/*document.getElementById("legends_cards").innerHTML = `
  <h1 class="app-title">Pets (${data.data.length} results)</h1>
  ${data.data.map(legendTemplate).join("")}
  <p class="footer">These ${data.data.length} pets were added recently. Check back soon for updates.</p>
`;*/
//console.log(data.data['Aatrox'].blurb)
//crearLegends()
//console.log('data',getLegends('Aatrox'))

//console.log(example, data);
