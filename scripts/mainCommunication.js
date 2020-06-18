var fctx = document.getElementById('communicationsChart').getContext('2d');
var fBgColors = [
 '#0D3B66',
 '#03B5AA',
 '#FBAF00',
 '#5995ED', 
 '#D84727', 
 '#4C1E4F', 
 '#B5A886', 
 '#FEE1C7',
 '#FA7E61',
 '#F44174',
 '#8EA4D2']
var fBoColors = fBgColors
var fChart = new Chart(fctx, {
    type: 'bar',
    data: {
        labels: [
        'Discord', 
        'WhatsApp/SMS', 
        'Letter',
        'E-Mail',
        'Reddit',
        'Instagram',
        'XBox',
        'Facebook',
        'Snapchat',
        'Zoom',
        'Nada'],
        datasets: [{
            label: 'Principais metodos de comunicação',
            data: [
                11,
                18,
                1,
                4,
                8,
                2,
                2,
                1,
                3,
                1,
                1
            ],
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