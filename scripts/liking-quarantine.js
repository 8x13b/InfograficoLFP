var lQctx = document.getElementById('likingQuarantine').getContext('2d');
var lQlabels = ['Sim','Não']
var lQcolorHex = ['#008000', '#BD353B']

var lQChart = new Chart(lQctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [11, 18],
            backgroundColor: lQcolorHex
        }],
        labels: lQlabels
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
