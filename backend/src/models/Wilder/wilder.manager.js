const { getWilderRepository, getSkillRepository } = require('../../database/utils');
const { getSchoolByName } = require('../School/school.manager');
const { getSkillByName } = require('../Skill/skill.manager');

async function initializeWilders() {
	const wilderRepository = await getWilderRepository();
	await wilderRepository.clear();
	const lyonSchool = await getSchoolByName('Lyon');
	const PHP = await getSkillByName('PHP');
	const javascript = await getSkillByName('JavaScript');
	const python = await getSkillByName('Python');
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
		school: lyonSchool,
		skills: [PHP, javascript, python],
		isTrainer: false
	});
	await wilderRepository.save({
		firstName: 'Arnaud',
		lastName: 'Renaud',
		school: lyonSchool,
		skills: [PHP, javascript, python],
		isTrainer: true
	});
}

async function getWilders() {
	const wilderRepository = await getWilderRepository();
	return wilderRepository.find();
}

async function createWilder(firstName, lastName) {
	const wilderRepository = await getWilderRepository();
	const newWilder = wilderRepository.create({ firstName, lastName });
	await wilderRepository.save(newWilder);
	return newWilder;
}

async function updateWilder(id, firstName, lastName) {
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
