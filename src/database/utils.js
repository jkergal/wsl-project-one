const typeorm = require('typeorm');
const School = require('../models/School/school.entity');
const Skill = require('../models/Skill/skill.entity');
const Wilder = require('../models/Wilder/wilder.entity');

const dataSource = new typeorm.DataSource({
	type: 'sqlite',
	database: 'wildersdb.sqlite',
	synchronize: true,
	entities: [Wilder, School, Skill],
	logging: ['query', 'error']
});

let initialized = false;
async function getDatabase() {
	if (!initialized) {
		await dataSource.initialize();
		initialized = true;
		console.log('Successfully connected to database.');
	}
	return dataSource;
}

async function getWilderRepository() {
	return (await getDatabase()).getRepository(Wilder);
}

async function getSchoolRepository() {
	return (await getDatabase()).getRepository(School);
}

const getSkillRepository = async () => {
	return (await getDatabase()).getRepository(Skill);
};

module.exports = {
	getDatabase,
	getWilderRepository,
	getSchoolRepository,
	getSkillRepository
};
