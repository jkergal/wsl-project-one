const express = require('express');
const wildersControllers = require('./controllers/wilders');
const { getDatabase } = require('./database/utils');
const { initializeWilders } = require('./models/Wilder/manager');

const app = express();
const PORT = 4000;
const WILDERS_PATH = '/wilders';

app.use(express.json());

app.get('/', function (req, res) {
	res.send('Hello world from Express!');
});

app.get(WILDERS_PATH, wildersControllers.get);
app.post(WILDERS_PATH, wildersControllers.post);

async function start() {
	await initializeWilders();
	await getDatabase();
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT} 👍`);
	});
}

start();
