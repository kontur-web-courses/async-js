const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const port = 3000;

let clickCount = 0;

app.use(express.static('static'));
app.use(bodyParser.json())

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});

app.get('/clickCount', (request, response) => {
    response.set({
        "Access-Control-Allow-Origin": '*',
    }).json({ clickCount });
});



app.post('/addClick', (request, response) => {
    response.set({
        "Access-Control-Allow-Origin": '*',
    });

    if (Math.random() > 0.3) {
        clickCount += 2;
        response.json({ clickCount });
    } else {
        setTimeout(() => {
            response.status(500).send();
        }, 500);
    }
});