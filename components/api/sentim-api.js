const fetch = require('node-fetch');

async function getPeliculas() {
    const response = await fetch('https://sentim-api.herokuapp.com/api/v1/',
    {
        method: 'POST', 
        body: JSON.stringify({
            text: "En mi opinión personal siento que aun no he utilizado muy bien la plataforma",
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
    const data = await response.json();
    return data;
}

getPeliculas().then(data => console.log(data))