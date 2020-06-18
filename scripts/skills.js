let sctx = document.getElementById('skills').getContext('2d');
let slabels = ['Sim','Não']
let scolorHex = ['#008000', '#BD353B']

let sChart = new Chart(sctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [13, 11],
            backgroundColor: scolorHex
        }],
        labels: slabels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        }
    }
})
