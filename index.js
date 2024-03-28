const express = require('express');
const PORT = 5000;
const cors = require('cors');
const index = require('./routes/index');
const app = express();
const https = require('https');
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use('/', index);

const options = {
	key: fs.readFileSync('./config/ssl/private.key'),
	cert: fs.readFileSync('./config/ssl/certificate.crt'),
};

https.createServer(options, app).listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

