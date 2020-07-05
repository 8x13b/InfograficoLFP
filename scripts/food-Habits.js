var fHctx = document.getElementById('foodHabits').getContext('2d');
var fHlabels = ['Cozinha sua comida','Pede para entregar','Vai a um restaurante']
var fHcolorHex = ['#008000', '#FFFF00', '#BD353B']

var foodHabitsChart = new Chart(fHctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [23, 5, 1],
            backgroundColor: fHcolorHex
        }],
        labels: fHlabels
    },
    options: {
        responsive: true,
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