const { getSkillRepository, getWilderRepository } = require('../../database/utils');

const initializeSkills = async () => {
	const skillRepository = await getSkillRepository();
	const wilderRepository = await getWilderRepository();
	await wilderRepository.clear();
	await skillRepository.clear();
	await skillRepository.save({
		skillName: 'PHP'
	});
	await skillRepository.save({
		skillName: 'JavaScript'
	});
	await skillRepository.save({
		skillName: 'Python'
	});
};

async function getSkillByName(name) {
	const skillRepository = await getSkillRepository();
	return skillRepository.findOneBy({ skillName: name });
}

module.exports = { initializeSkills, getSkillByName };
