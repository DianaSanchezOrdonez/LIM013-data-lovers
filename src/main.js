import { example } from './data.js';
import data from './data/lol/lol.js';

//const legends = data.name;
//console.log(data.data['Aatrox'].blurb)

const getLegends = () => {
    let datos = data.data;
    //let legends = data.data[id]

    for ( const prop in datos){
        console.log(datos[prop].blurb)
    }
    console.log('datos',datos)
    //console.log('legends',legends)
} 

getLegends()
//console.log('data',getLegends('Aatrox'))

//console.log(example, data);
