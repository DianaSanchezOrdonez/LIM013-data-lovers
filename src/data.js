const order = {
  filterLegend: function (data, rol) {
    const result = data.filter(
      (objLegend) => {
        return objLegend.tags.includes(rol);
      }
    )
    return result
  },
  filterRange: function (data, range) {
    if (range == 'rango1') {
      return data.filter(objLegend => objLegend.stats.attackrange >= 125 && objLegend.stats.attackrange <= 230)
    } else if (range == 'rango2') {
      return data.filter(objLegend => objLegend.stats.attackrange >= 231 && objLegend.stats.attackrange <= 335)
    } else if (range == 'rango3') {
      return data.filter(objLegend => objLegend.stats.attackrange >= 336 && objLegend.stats.attackrange <= 440)
    } else if (range == 'rango4') {
      return data.filter(objLegend => objLegend.stats.attackrange >= 441 && objLegend.stats.attackrange <= 545)
    } else {
      return data.filter(objLegend => objLegend.stats.attackrange >= 546)
    }
  },
  nameChampionAz: function (data) {
    const result =
      data.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    return result
  },

  //ordenar nombres de Z a A
  nameChampionZa: function (data) {
    const result =
      data.sort((b, a) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    return result
  },

  //calcular por nivel (reduce)
  hpperLevel: function (data, level, position) {
    return data.reduce(
      () => {
        const hp = data[position].stats.hp + (data[position].stats.hpperlevel * level);
        return hp.toFixed(3);
      })
  },

  mpperLevel: function (data, level, position) {
    return data.reduce(
      () => {
        const mp = data[position].stats.mp + (data[position].stats.mpperlevel * level);
        return mp.toFixed(3);
      })
  },

  attackperLevel: function (data, level, position) {
    return data.reduce(
      () => {
        const attack = data[position].stats.attackdamage + (data[position].stats.attackdamageperlevel * level);
        return attack.toFixed(3);
      })
  }
};
export default order;
