const DATA = [
  {"id":1,"value":6,"label":"United States"},
  {"id":2,"value":83,"label":"Sweden"},
  {"id":3,"value":31,"label":"Belarus"},
  {"id":4,"value":28,"label":"Iran"},
  {"id":5,"value":6,"label":"Philippines"},
  {"id":6,"value":52,"label":"China"},
  {"id":7,"value":55,"label":"China"},
  {"id":8,"value":46,"label":"Malaysia"},
  {"id":9,"value":34,"label":"Czech Republic"},
  {"id":10,"value":54,"label":"Philippines"},
  {"id":11,"value":48,"label":"France"},
  {"id":12,"value":76,"label":"China"},
  {"id":13,"value":58,"label":"France"},
  {"id":14,"value":5,"label":"Moldova"},
  {"id":15,"value":33,"label":"Indonesia"},
  {"id":16,"value":14,"label":"China"},
  {"id":17,"value":33,"label":"Ukraine"},
  {"id":18,"value":89,"label":"Indonesia"},
  {"id":19,"value":71,"label":"Russia"},
  {"id":20,"value":65,"label":"Indonesia"},
  {"id":21,"value":7,"label":"Germany"},
  {"id":22,"value":12,"label":"China"},
  {"id":23,"value":38,"label":"Argentina"},
  {"id":24,"value":58,"label":"China"},
  {"id":25,"value":92,"label":"Peru"},
  {"id":26,"value":37,"label":"Brazil"},
  {"id":27,"value":16,"label":"Poland"},
  {"id":28,"value":85,"label":"China"},
  {"id":29,"value":8,"label":"China"},
  {"id":30,"value":77,"label":"China"},
  {"id":31,"value":33,"label":"Sweden"},
  {"id":32,"value":29,"label":"Kyrgyzstan"},
  {"id":33,"value":85,"label":"Afghanistan"},
  {"id":34,"value":49,"label":"Indonesia"},
  {"id":35,"value":17,"label":"Japan"},
  {"id":36,"value":57,"label":"Indonesia"},
  {"id":37,"value":50,"label":"Nigeria"},
  {"id":38,"value":72,"label":"China"},
  {"id":39,"value":8,"label":"Tunisia"},
  {"id":40,"value":73,"label":"Peru"},
  {"id":41,"value":67,"label":"Armenia"},
  {"id":42,"value":92,"label":"Russia"},
  {"id":43,"value":1,"label":"Colombia"},
  {"id":44,"value":63,"label":"Poland"},
  {"id":45,"value":74,"label":"Vietnam"},
  {"id":46,"value":67,"label":"China"},
  {"id":47,"value":48,"label":"China"},
  {"id":48,"value":21,"label":"Poland"},
  {"id":49,"value":83,"label":"Indonesia"},
  {"id":50,"value":30,"label":"Russia"},
  {"id":51,"value":96,"label":"Brazil"},
  {"id":52,"value":67,"label":"Philippines"},
  {"id":53,"value":46,"label":"Indonesia"},
  {"id":54,"value":95,"label":"Germany"},
  {"id":55,"value":39,"label":"China"},
  {"id":56,"value":14,"label":"Russia"},
  {"id":57,"value":94,"label":"Indonesia"},
  {"id":58,"value":41,"label":"Belarus"},
  {"id":59,"value":29,"label":"China"},
  {"id":60,"value":3,"label":"Indonesia"},
  {"id":61,"value":77,"label":"Ecuador"},
  {"id":62,"value":93,"label":"China"},
  {"id":63,"value":50,"label":"China"},
  {"id":64,"value":82,"label":"Vietnam"},
  {"id":65,"value":12,"label":"Indonesia"},
  {"id":66,"value":71,"label":"China"},
  {"id":67,"value":83,"label":"Indonesia"},
  {"id":68,"value":33,"label":"Portugal"},
  {"id":69,"value":17,"label":"Indonesia"},
  {"id":70,"value":15,"label":"Tunisia"},
  {"id":71,"value":70,"label":"Philippines"},
  {"id":72,"value":35,"label":"China"},
  {"id":73,"value":29,"label":"Indonesia"},
  {"id":74,"value":58,"label":"United States"},
  {"id":75,"value":65,"label":"Sri Lanka"},
  {"id":76,"value":21,"label":"Poland"},
  {"id":77,"value":74,"label":"Russia"},
  {"id":78,"value":89,"label":"Indonesia"},
  {"id":79,"value":26,"label":"Indonesia"},
  {"id":80,"value":54,"label":"Indonesia"},
  {"id":81,"value":96,"label":"Comoros"},
  {"id":82,"value":57,"label":"Greece"},
  {"id":83,"value":32,"label":"Vietnam"},
  {"id":84,"value":81,"label":"Sweden"},
  {"id":85,"value":35,"label":"Ivory Coast"},
  {"id":86,"value":49,"label":"Slovenia"},
  {"id":87,"value":63,"label":"Finland"},
  {"id":88,"value":64,"label":"Argentina"},
  {"id":89,"value":47,"label":"Russia"},
  {"id":90,"value":36,"label":"Portugal"},
  {"id":91,"value":60,"label":"Macedonia"},
  {"id":92,"value":57,"label":"Russia"},
  {"id":93,"value":99,"label":"Netherlands"},
  {"id":94,"value":40,"label":"China"},
  {"id":95,"value":86,"label":"China"},
  {"id":96,"value":55,"label":"Sweden"},
  {"id":97,"value":19,"label":"Croatia"},
  {"id":98,"value":28,"label":"Luxembourg"},
  {"id":99,"value":59,"label":"France"},
  {"id":100,"value":76,"label":"Marshall Islands"},
  {"id":101,"value":75,"label":"China"},
  {"id":102,"value":98,"label":"Indonesia"},
  {"id":103,"value":55,"label":"Indonesia"},
  {"id":104,"value":75,"label":"China"},
  {"id":105,"value":98,"label":"Philippines"},
  {"id":106,"value":19,"label":"China"},
  {"id":107,"value":84,"label":"Portugal"},
  {"id":108,"value":44,"label":"Ukraine"},
  {"id":109,"value":94,"label":"Peru"},
  {"id":110,"value":12,"label":"Portugal"},
  {"id":111,"value":30,"label":"China"},
  {"id":112,"value":47,"label":"Vanuatu"},
  {"id":113,"value":78,"label":"Ukraine"},
  {"id":114,"value":55,"label":"Russia"},
  {"id":115,"value":6,"label":"Uganda"},
  {"id":116,"value":25,"label":"China"},
  {"id":117,"value":73,"label":"Indonesia"},
  {"id":118,"value":39,"label":"China"},
  {"id":119,"value":28,"label":"Czech Republic"},
  {"id":120,"value":25,"label":"Colombia"},
  {"id":121,"value":20,"label":"Indonesia"},
  {"id":122,"value":55,"label":"France"},
  {"id":123,"value":72,"label":"Ukraine"},
  {"id":124,"value":41,"label":"Russia"},
  {"id":125,"value":47,"label":"Iran"},
  {"id":126,"value":53,"label":"Iraq"},
  {"id":127,"value":88,"label":"Cape Verde"},
  {"id":128,"value":17,"label":"American Samoa"},
  {"id":129,"value":62,"label":"Indonesia"},
  {"id":130,"value":40,"label":"China"},
  {"id":131,"value":15,"label":"Japan"},
  {"id":132,"value":60,"label":"Indonesia"},
  {"id":133,"value":83,"label":"Russia"},
  {"id":134,"value":59,"label":"Kiribati"},
  {"id":135,"value":30,"label":"Indonesia"},
  {"id":136,"value":67,"label":"Philippines"},
  {"id":137,"value":76,"label":"Canada"},
  {"id":138,"value":68,"label":"Thailand"},
  {"id":139,"value":69,"label":"Israel"},
  {"id":140,"value":14,"label":"China"},
  {"id":141,"value":26,"label":"China"},
  {"id":142,"value":90,"label":"Indonesia"},
  {"id":143,"value":65,"label":"Mongolia"},
  {"id":144,"value":4,"label":"Saudi Arabia"},
  {"id":145,"value":52,"label":"United States"},
  {"id":146,"value":80,"label":"Portugal"},
  {"id":147,"value":91,"label":"Czech Republic"},
  {"id":148,"value":61,"label":"Afghanistan"},
  {"id":149,"value":58,"label":"Russia"},
  {"id":150,"value":72,"label":"Mexico"},
  {"id":151,"value":27,"label":"Portugal"},
  {"id":152,"value":79,"label":"Philippines"},
  {"id":153,"value":86,"label":"Cuba"},
  {"id":154,"value":43,"label":"Indonesia"},
  {"id":155,"value":41,"label":"Peru"},
  {"id":156,"value":61,"label":"Thailand"},
  {"id":157,"value":78,"label":"Indonesia"},
  {"id":158,"value":83,"label":"China"},
  {"id":159,"value":93,"label":"Philippines"},
  {"id":160,"value":91,"label":"Nigeria"},
  {"id":161,"value":88,"label":"Ukraine"},
  {"id":162,"value":78,"label":"Colombia"},
  {"id":163,"value":89,"label":"Poland"},
  {"id":164,"value":64,"label":"Brazil"},
  {"id":165,"value":94,"label":"Indonesia"},
  {"id":166,"value":94,"label":"Philippines"},
  {"id":167,"value":90,"label":"Poland"},
  {"id":168,"value":89,"label":"Gambia"},
  {"id":169,"value":27,"label":"Finland"},
  {"id":170,"value":90,"label":"Chad"},
  {"id":171,"value":84,"label":"Netherlands"},
  {"id":172,"value":4,"label":"China"},
  {"id":173,"value":25,"label":"China"},
  {"id":174,"value":90,"label":"China"},
  {"id":175,"value":74,"label":"Poland"},
  {"id":176,"value":67,"label":"Indonesia"},
  {"id":177,"value":72,"label":"Albania"},
  {"id":178,"value":22,"label":"South Korea"},
  {"id":179,"value":59,"label":"China"},
  {"id":180,"value":31,"label":"China"},
  {"id":181,"value":97,"label":"China"},
  {"id":182,"value":15,"label":"Poland"},
  {"id":183,"value":61,"label":"Portugal"},
  {"id":184,"value":65,"label":"China"},
  {"id":185,"value":42,"label":"Indonesia"},
  {"id":186,"value":17,"label":"United States"},
  {"id":187,"value":66,"label":"Ukraine"},
  {"id":188,"value":47,"label":"Russia"},
  {"id":189,"value":83,"label":"Colombia"},
  {"id":190,"value":12,"label":"Philippines"},
  {"id":191,"value":82,"label":"Czech Republic"},
  {"id":192,"value":52,"label":"Portugal"},
  {"id":193,"value":34,"label":"Peru"},
  {"id":194,"value":22,"label":"Nigeria"},
  {"id":195,"value":89,"label":"Mongolia"},
  {"id":196,"value":42,"label":"Venezuela"},
  {"id":197,"value":71,"label":"China"},
  {"id":198,"value":57,"label":"Pakistan"},
  {"id":199,"value":24,"label":"China"},
  {"id":200,"value":81,"label":"France"}
];

// Return random data from a mock data array
export function getData(size = 7) {
  return new Promise(resolve => {
    const shuffled = DATA.sort(() => 0.5 - Math.random());
    resolve(shuffled.slice(0, size));
  });
}