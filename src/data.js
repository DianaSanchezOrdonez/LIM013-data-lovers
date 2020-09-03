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
    if (range == 'range1') {
      return data.filter(objLegend => objLegend.stats.attackrange >= 125 && objLegend.stats.attackrange < 230)
    } else if (range == 'range2') {
      return data.filter(objLegend => objLegend.stats.attackrange >= 230 && objLegend.stats.attackrange < 335)
    } else if (range == 'range3') {
      return data.filter(objLegend => objLegend.stats.attackrange >= 335 && objLegend.stats.attackrange < 440)
    } else if (range == 'range4') {
      return data.filter(objLegend => objLegend.stats.attackrange >= 440 && objLegend.stats.attackrange < 545)
    } else {
      return data.filter(objLegend => objLegend.stats.attackrange >= 545)
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
