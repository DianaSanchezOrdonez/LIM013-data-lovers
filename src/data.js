const order = {

  //método filtro por rol
  filterLegend: function (data, rol) {
    const result = data.filter(
      (objLegend) => {
        return objLegend.tags.includes(rol);
      }
    )
    return result
  },

  //ordenar nombres de A a Z
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
    //console.log("result", result)
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
    //console.log("result", result)
    return result
  },
};
export default order;
