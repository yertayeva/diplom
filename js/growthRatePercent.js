var ctx = document.getElementById('growthRatePercent').getContext('2d');
var growthRatePercent = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020", "2030",
    "2040", "2050", "2060", "2070", "2080", "2090", "2100"],
    datasets: [{
      data: [1.62,4.37,1.65, 1.05, 0.35, -0.65, 1.30, 1.21, 0.81, 0.8, 0.61, 0.43, 0.35,
      0.27, 0.18, 0.02],
      label: "Халық саны өсу қарқыны",
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    }
    ]
  },
});