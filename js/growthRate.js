var ctx = document.getElementById('growthRate').getContext('2d');
var growthRate = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2030",
    "2040", "2050", "2060", "2070", "2080", "2090", "2100"],
    datasets: [{
      data: [6702,9934,13036, 14796, 16383, 14922, 16252, 18776, 20639, 22370, 24024, 25243, 26223,
      27041, 27649, 27917],
      label: "Халық саны",
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    }
    ]
  },
});