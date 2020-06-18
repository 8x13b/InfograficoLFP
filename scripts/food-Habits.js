let fHctx = document.getElementById('foodHabits').getContext('2d');
let fHlabels = ['Cozinha sua comida','Pede para entregar','Vai a um restaurante']
let fHcolorHex = ['#008000', '#FFFF00', '#BD353B']

let foodHabitsChart = new Chart(fHctx, {
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