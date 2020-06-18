let sWctx = document.getElementById('schoolWork').getContext('2d');
let sWlabels = ['Não trabalhar','Em casa','Trabalhar fora de casa (Livraria)','Fora de casa de manhã e dentro de tarde']
let sWcolorHex = ['#3366cc', '#dc3912', '#ff9900', '#109618']

let schoolWorkChart = new Chart(sWctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 12, 2, 5],
            backgroundColor: sWcolorHex
        }],
        labels: sWlabels
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