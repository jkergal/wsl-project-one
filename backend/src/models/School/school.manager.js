const { getSchoolRepository, getWilderRepository } = require('../../database/utils');

async function initializeSchools() {
	const schoolRepository = await getSchoolRepository();
	const wilderRepository = await getWilderRepository();
	await wilderRepository.clear();
	await schoolRepository.clear();
	await schoolRepository.save({
		schoolName: 'Lyon'
	});
	await schoolRepository.save({
		schoolName: 'Nantes'
	});
	await schoolRepository.save({
		schoolName: 'Paris'
	});
	await schoolRepository.save({
		schoolName: 'Bordeaux'
	});
	await schoolRepository.save({
		schoolName: 'Toulouse'
	});
}

async function getSchoolByName(name) {
	const schoolRepository = await getSchoolRepository();
	return schoolRepository.findOneBy({ schoolName: name });
}

module.exports = {
	initializeSchools,
	getSchoolByName
};
