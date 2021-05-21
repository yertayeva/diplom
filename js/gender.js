var ctx = document.getElementById('gender').getContext('2d');
var gender = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Ер","Әйел"],
        datasets: [{
            data: [48.5,51.5],
            borderColor:[
                "#2951c7",
                "#e01919",
            ],
            backgroundColor: [
                "rgb(60,186,159,0.1)",
                "rgb(255,165,0,0.1)",
            ],
            borderWidth:2,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }],
        }
    },
});