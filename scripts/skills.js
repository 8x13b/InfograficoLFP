var sctx = document.getElementById('skills').getContext('2d');
var slabels = ['Sim','Não']
var scolorHex = ['#008000', '#BD353B']

var sChart = new Chart(sctx, {
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
