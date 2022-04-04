const fetch = require('node-fetch');

export async function setComments(comment) {
    const response = await fetch('https://sentim-api.herokuapp.com/api/v1/',
    {
        method: 'POST', 
        body: JSON.stringify({
            text: comment,
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
    const data = await response.json();
    return data;
}

// getPeliculas().then(data => console.log(data))