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
	await skillRepository.save({
		skillName: 'CSS'
	});
	await skillRepository.save({
		skillName: 'HTML'
	});
	await skillRepository.save({
		skillName: 'SQL'
	});
};

async function getSkillByName(name) {
	const skillRepository = await getSkillRepository();
	return skillRepository.findOneBy({ skillName: name });
}

module.exports = { initializeSkills, getSkillByName };
