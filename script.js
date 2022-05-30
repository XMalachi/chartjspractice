const {log} = console
    if(document.readyState == 'loading'){
        document.addEventListener('DOMContentLoaded', ready)
    }else{
        ready()
}

function ready(){
const btn = document.getElementsByClassName('btn')

for(let i=0; i<btn.length; i++){
    const btnClicked = btn[i]
    btnClicked.addEventListener('click', btnhandler) // (e)=>{const btn = e.target;  if(...)}
}
}

const countriesName = [
'World',
'China',
'India',
'USA',
'Indonasia',
'Brazil',
'Pakistan',
'Nigeria',
'Bagladash',
'Japan'
];

const countriesPopulation = [
120000000,119000000,112000000,109000000,78000000,72000000,60000000,40000000,30000000,29000000
]

const languages = [
'English',
'French',
'Arabic',
'Spannish',
'Portugues',
'Russian',
'Dutch',
'German',
'Chinese',
'Serbian'
];

const languagesCount = [91,80,78,70,70,69,50,5,5,3]

const data = {
labels: countriesName,
datasets: [{
label: 'My First dataset',
backgroundColor: 'rgba(255, 166, 0, 0.699)',
borderColor: '#000',
data: countriesPopulation,
}]
};

const data2 = {
labels: languages,
datasets: [{
label: 'My Second dataset',
backgroundColor: '#000',
borderColor: 'rgb(255, 99, 132)',
data: languagesCount,
}]
};


const config = {
type: 'horizontalBar',
data: data,
options: {
responsive:true,
indexAxis: 'y',
elements: {
    bar: {
    borderWidth: 2,
    }
},
plugins: {
    legend: {
    position: 'right',
    },
    title: {
    display: true,
    text: 'World Population'
    }
},
}
};
new Chart(
document.getElementById('myChart'),
config
);

function btnhandler(e){
const btn = e.target;
if(e.target.innerText == 'POPULATION'){
    const chartContainer = document.getElementsByClassName('chartContainer')[0]
        chartContainer.getElementsByClassName('popChart')[0].innerHTML = `
        <canvas id="myChart"></canvas>
        `
        document.getElementsByClassName('populate')[0].innerHTML = 'POPULATED COUNTRIES'
        let config = {
        type: 'horizontalBar',
        data: data,
        options: {
            responsive:true,
            indexAxis: 'y',
            elements: {
            bar: {
                borderWidth: 2,
            }
            },
            plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'World Population'
            }
            },
        }
        };
        new Chart(
        document.getElementById('myChart'),
        config
        );
}

if(e.target.innerText == 'LANGUAGES'){
    const chartContainer = document.getElementsByClassName('chartContainer')[0]
    chartContainer.getElementsByClassName('popChart')[0].innerHTML = `
    <canvas id="myChart"></canvas>
    `
    document.getElementsByClassName('populate')[0].innerHTML = 'SPOKEN LANGUAGES'
    let config = {
    type: 'horizontalBar',
    data: data2,
    options: {
        responsive:true,
        indexAxis: 'y',
        elements: {
        bar: {
            borderWidth: 2,
        }
        },
        plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'World Languages'
        }
        },
    }
    };
    new Chart(
    document.getElementById('myChart'),
    config
    );
}


}