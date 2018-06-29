const express = require('express');
const https = require('https');
const querystring = require('querystring');

const app = express();
const port = 3000;
const SECRET_KEY = ''; // TODO: insert your secret key here
const ORGS_LIST = ['1027700092661', '1026605606620', '1027700070518', '1037739877295', '1106659003769',
    '1130280036040', '1026604939855', '1115000005614', '1106659013658', '1027402166835'];

app.use(express.static('static'));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});

app.get('/orgsList', (request, response) => {
    response.json(ORGS_LIST);
});

app.get('/api3/:path', (request, response) => {
    const query = querystring.stringify({...request.query, key: SECRET_KEY});

    sendRequest(`https://focus-api.kontur.ru${request.path}?${query}`,
        (focusRequest) => response.send(focusRequest));
});

function sendRequest (url, callback) {
    https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            callback(data);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}