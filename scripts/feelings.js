var fctx = document.getElementById('feelingsChart').getContext('2d');
var fBgColors = ['#0D3B66', '#03B5AA', '#FBAF00', '#5995ED', '#D84727']
var fBoColors = fBgColors
var fChart = new Chart(fctx, {
    type: 'bar',
    data: {
        labels: ['Triste', 'Entediado', 'OK', 'Exhausto', 'Solitario'],
        datasets: [{
            label: 'Sentimentos por categoria',
            data: [5, 7, 10, 2, 1],
            backgroundColor: fBgColors,
            borderColor: fBoColors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});