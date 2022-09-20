import express from 'express';
import * as wildersControllers from './controllers/wilders.controllers';
import { getDatabase } from './database/utils';
import { initializeSchools } from './models/School/school.manager';
import { initializeSkills } from './models/Skill/skill.manager';
import { initializeWilders } from './models/Wilder/wilder.manager';

const app = express();
const PORT = 4000;
const WILDERS_PATH = '/wilders';

app.use(express.json());

app.get('/', function (req, res) {
	res.send('Hello world from Express!');
});

app.get(WILDERS_PATH, wildersControllers.get);
app.post(WILDERS_PATH, wildersControllers.post);
app.put(`${WILDERS_PATH}/:id`, wildersControllers.put);
app.delete(`${WILDERS_PATH}/:id`, wildersControllers.del);
app.post(`${WILDERS_PATH}/:id/skills`, wildersControllers.addSkill);

async function start() {
	await initializeSkills();
	await initializeSchools();
	await initializeWilders();
	await getDatabase();
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT} 👍`);
	});
}

start();
