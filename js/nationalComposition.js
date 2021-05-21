var ctx = document.getElementById('nationalComposition').getContext('2d');
var nationalComposition = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1899", "1909", "1919", "1929", "1939", "1949", "1959", "1969", "1979", "1989", "1999", "2009", "2019"],
    datasets: [{
      data: [3411,3493,3571,3311,2341,2574,2844, 4143, 5351, 6557, 8111, 10135, 12633],
      label: "Қазақ",
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    }, {
      data: [502,805,1080,1562,2504,3258,4027, 5431, 6003, 6199, 4438, 3789, 3526],
      label: "Орыс",
      borderColor: "#d70f0f",
      backgroundColor: "#e22f4d",
      fill: false,
    }, {
      data: [142,413,675,811,661,711,768, 928, 897, 890, 534, 332, 269],
      label: "Украин",
      borderColor: "#ffa500",
      backgroundColor:"#ffc04d",
      fill: false,
    }, {
      data: [37,72,105,127,121,129,139, 206, 266, 332, 375, 459, 597],
      label: "Өзбек",
      borderColor: "#52cb07",
      backgroundColor:"#60ff38",
      fill: false,
    }, {
      data: [6,22,40,61,95,394,662, 825, 902, 949, 351, 178, 176],
      label: "Неміс",
      borderColor: "#190393",
      backgroundColor:"#5876e8",
      fill: false,
    }
    ]
  },
});
