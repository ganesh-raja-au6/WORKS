document.querySelector('form').addEventListener('submit', (e) => {
    const osvalue = document.querySelector('input[name=os]:checked').value
    const data = {os:osvalue}
    fetch('http://localhost:3000/poll',{
        method : 'post',
        body : JSON.stringify(data),
        headers: new Headers({
            'content-type' : 'application/json'
        }).then(data => data.json()).then(result => console.log(result)).catch(err => console.log(err))
    })
    e.preventDefault()
})

let dataPoints = [
    {label : 'windows', y : 0},
    {label : 'mac', y : 0},
    {label : 'linux', y : 0},
    {label : 'otheros', y : 0}
]

const chartContainer = document.querySelector('#chartContainer')

const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled : true,
    theme : 'theme2',
    title : {
        text : 'Poll Results'
    },
    data : [
        {
            type : 'column',
            dataPoints : dataPoints
        }
    ],
})

chart.render()