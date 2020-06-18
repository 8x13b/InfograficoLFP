let ctx = document.getElementById('normalLifeChart').getContext('2d');
let labels = ['Sim','Talvez','Não']
let colorHex = ['#008000', '#FFFF00', '#BD353B']

let normalLifeChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [16, 12, 1],
            backgroundColor: colorHex
        }],
        labels: labels
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