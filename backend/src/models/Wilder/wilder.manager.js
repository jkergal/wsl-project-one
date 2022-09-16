const { getWilderRepository, getSkillRepository } = require('../../database/utils');
const { getSchoolByName } = require('../School/school.manager');
const { getSkillByName } = require('../Skill/skill.manager');

async function initializeWilders() {
	const wilderRepository = await getWilderRepository();
	await wilderRepository.clear();

	const lyonSchool = await getSchoolByName('Lyon');
	const nantesSchool = await getSchoolByName('Nantes');
	const parisSchool = await getSchoolByName('Paris');
	const bordeauxSchool = await getSchoolByName('Bordeaux');
	const toulouseSchool = await getSchoolByName('Toulouse');

	const PHP = await getSkillByName('PHP');
	const javascript = await getSkillByName('JavaScript');
	const python = await getSkillByName('Python');
	const CSS = await getSkillByName('CSS');
	const HTML = await getSkillByName('HTML');
	const SQL = await getSkillByName('SQL');

	await wilderRepository.save({
		firstName: 'Jean',
		lastName: 'Wilder',
		school: lyonSchool,
		skills: [PHP, javascript, python],
		isTrainer: false
	});
	await wilderRepository.save({
		firstName: 'Jeanne',
		lastName: 'Wilder',
		school: bordeauxSchool,
		skills: [PHP, javascript, python],
		isTrainer: false
	});
	await wilderRepository.save({
		firstName: 'Arnaud',
		lastName: 'Renaud',
		school: parisSchool,
		skills: [PHP, javascript, python],
		isTrainer: true
	});
	await wilderRepository.save({
		firstName: 'Jojan',
		lastName: 'Leterrible',
		school: nantesSchool,
		skills: [PHP, javascript, python],
		isTrainer: false
	});
	await wilderRepository.save({
		firstName: 'Chuck',
		lastName: 'Norris',
		school: toulouseSchool,
		skills: [PHP, javascript, python],
		isTrainer: false
	});
}

async function getWilders() {
	const wilderRepository = await getWilderRepository();
	return wilderRepository.find();
}

async function createWilder(firstName, lastName, isTrainer, schoolName, skillsName) {
	const wilderRepository = await getWilderRepository();
	const school = await getSchoolByName(schoolName);
	const getSkills = async () => {
		let result = [];
		for (skillName of skillsName) {
			result.push(await getSkillByName(skillName));
		}
		return result;
	};
	const skills = await getSkills();
	const newWilder = wilderRepository.create({ firstName, lastName, isTrainer, school, skills });
	await wilderRepository.save(newWilder);
	return newWilder;
}

async function updateWilder(id, firstName, lastName, schoolName) {
	const wilderRepository = await getWilderRepository();
	const existingWilder = await wilderRepository.findOneBy({ id });
	if (!existingWilder) {
		throw Error('No existing Wilder matching ID.');
	}
	return wilderRepository.save({
		id,
		firstName,
		lastName
	});
}

const deleteWilder = async (id) => {
	const wilderRepository = await getWilderRepository();
	const existingWilder = await wilderRepository.findOneBy({ id });
	if (!existingWilder) {
		throw Error('No existing Wilder matching ID.');
	}
	return wilderRepository.remove(existingWilder);
};

const addSkillToWilder = async (wilderId, skillId) => {
	const wilderRepository = await getWilderRepository();
	const skillRepository = await getSkillRepository();
	const wilder = await wilderRepository.findOneBy({ id: wilderId });
	if (!wilder) {
		throw Error('No existing Wilder matching ID.');
	}
	const skill = await skillRepository.findOneBy({ id: skillId });
	if (!skill) {
		throw Error('No existing skill matching ID.');
	}
	wilder.skills = [...wilder.skills, skill];
	return wilderRepository.save(wilder);
};

module.exports = {
	initializeWilders,
	getWilders,
	createWilder,
	updateWilder,
	deleteWilder,
	addSkillToWilder
};
