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

export { initializeSchools, getSchoolByName, getSchools };
