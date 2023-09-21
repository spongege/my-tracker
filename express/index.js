const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	console.log(req, res);
	res.send(200);
});

app.post('/tracker', (req, res) => {
	console.log(req.body);
	res.sendStatus(200);
});

app.listen(9000, () => {
	console.log('9000, success');
});
