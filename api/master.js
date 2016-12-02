const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
	res.send('hello world!!!');
});

app.use('', express.static(path.resolve('../build')));

app.listen(PORT);