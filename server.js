// Install Express Server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/MKTECHNOLOGY'));

app.get('/*', (req, res) => 
    res.sendFile('index.html', { root: 'dist/MKTECHNOLOGY/' }),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

