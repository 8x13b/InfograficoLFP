var wPctx = document.getElementById('whichPrefer').getContext('2d');
var wPlabels = ['Netflix','Videogames','Ler','Estudar']
var wPcolorHex = ['#3366cc', '#dc3912', '#ff9900', '#109618']

var whichPreferChart = new Chart(wPctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [7, 19, 2, 1],
            backgroundColor: wPcolorHex
        }],
        labels: wPlabels
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            position: 'bottom'
        }
    }
})

// // Yes, Maybe, No
// var answers_normal_life = [16, 12, 1]
// var data_normal_life = {
//     backgroundColor = 
// }
// var chart_normal_life = new chart_normal_life(ctx, {
//     type: 'pie',
//     data
// })