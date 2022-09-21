import School from './school.entity';
import { getSchoolRepository, getWilderRepository } from '../../database/utils';

async function initializeSchools(): Promise<void> {
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

async function getSchoolByName(name: string): Promise<School | null> {
	const schoolRepository = await getSchoolRepository();
	return schoolRepository.findOneBy({ schoolName: name });
}

async function getSchools(): Promise<School[] | null> {
	const schoolRepository = await getSchoolRepository();
	return schoolRepository.find();
}

async function createSchool(schoolName: string): Promise<School | null> {
	const schoolRepository = await getSchoolRepository();
	const newSchool = new School(schoolName);
	await schoolRepository.save(newSchool);
	return newSchool;
}

const deleteSchool = async (id: string) => {
	const schoolRepository = await getSchoolRepository();
	const existingSchool = await schoolRepository.findOneBy({ id });
	console.error({ exisitingSchool: existingSchool });
	if (!existingSchool) {
		throw Error('No existing Wilder matching ID.');
	}
	return schoolRepository.remove(existingSchool);
};

export { initializeSchools, getSchoolByName, getSchools, createSchool, deleteSchool };
