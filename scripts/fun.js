var functx = document.getElementById('funChart').getContext('2d');
var funBgColors = [
 '#0D3B66',
 '#03B5AA',
 '#FBAF00',
 '#5995ED', 
 '#D84727', 
 '#4C1E4F', 
 '#B5A886']
var funBoColors = fBgColors
var funChart = new Chart(functx, {
    type: 'bar',
    data: {
        labels: [
        'Videogame',
        'Livros',
        'Redes sociais',
        'Internet (em geral)',
        'Ver filmes e series',
        'Conversar',
        'Nada'],
        datasets: [{
            label: 'Principais maneiras de se divertir',
            data: [
                16,
                1,
                1,
                1,
                1,
                2,
                3
            ],
            backgroundColor: funBgColors,
            borderColor: funBoColors,
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
