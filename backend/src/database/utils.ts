import typeorm, { DataSource } from 'typeorm';
import School from '../models/School/school.entity';
import Skill from '../models/Skill/skill.entity';
import Wilder from '../models/Wilder/wilder.entity';

const dataSource = new DataSource({
	type: 'sqlite',
	database: 'wildersdb.sqlite',
	synchronize: true,
	entities: [__dirname + '/../models/**/*.entity.js'],
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

export { getDatabase, getWilderRepository, getSchoolRepository, getSkillRepository };
