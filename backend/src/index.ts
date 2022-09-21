import express from 'express';
import * as wildersControllers from './controllers/wilders.controllers';
import * as schoolsControllers from './controllers/schools.controller';
import School from './models/School/school.entity';
import Skill from './models/Skill/skill.entity';
import Wilder from './models/Wilder/wilder.entity';

const app = express();
const PORT = 4000;
const WILDERS_PATH = '/wilders';
const SCHOOLS_PATH = '/schools';

app.use(express.json());

app.get('/', function (req, res) {
	res.send('Hello world from Express!');
});

// Wilders Routes

app.get(WILDERS_PATH, wildersControllers.get);
app.post(WILDERS_PATH, wildersControllers.post);
app.put(`${WILDERS_PATH}/:id`, wildersControllers.put);
app.delete(`${WILDERS_PATH}/:id`, wildersControllers.del);
app.post(`${WILDERS_PATH}/:id/skills`, wildersControllers.addSkill);

// Schools Routes

app.get(SCHOOLS_PATH, schoolsControllers.get);
app.post(SCHOOLS_PATH, schoolsControllers.post);
app.delete(`${SCHOOLS_PATH}/:id`, schoolsControllers.del);

async function start() {
	await Skill.initializeRepository();
	await School.initializeRepository();
	await Wilder.initializeRepository();

	await Skill.initializeSkills();
	await School.initializeSchools();
	await Wilder.initializeWilders();
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT} 👍`);
	});
}

start();
