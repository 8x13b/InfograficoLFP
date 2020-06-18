let wSctx = document.getElementById('whereSports').getContext('2d');
let wSlabels = ['Fora de casa','Dentro de casa','Não fazer esporte']
let wScolorHex = ['#3366cc', '#dc3912', '#ff9900']

let whereSportsChart = new Chart(wSctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [16, 3, 10],
            backgroundColor: wScolorHex
        }],
        labels: wSlabels
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