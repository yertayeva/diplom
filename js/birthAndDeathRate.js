var ctx = document.getElementById('birthAndDeathRate').getContext('2d');
var birthAndDeathRate = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2030", "2040", "2050",
      "2060", "2070", "2080", "2090", "2100"],
    datasets: [{
      data: [254169,372595,301451,356013,362081,222054,367942, 425625, 305000, 350000, 345000, 305000,
        310000, 300000, 280000, 275000],
      label: "Туу",
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    }, {
      data: [79005,65667,77619,119078,128576,149778,146370, 162613, 170000, 205000, 225000, 240000,
        248000, 250000, 255000, 280000],
      label: "Өлу",
      borderColor: "#d70f0f",
      backgroundColor: "#e22f4d",
      fill: false,
    }
    ]
  },
});
