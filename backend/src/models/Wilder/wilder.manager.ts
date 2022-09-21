import { getWilderRepository, getSkillRepository } from '../../database/utils';
import { getSchoolByName } from '../School/school.manager';
import { getSkillByName } from '../Skill/skill.manager';
import Wilder from './wilder.entity';
import School from '../School/school.entity';
import Skill from '../Skill/skill.entity';

async function initializeWilders(): Promise<void> {
	const wilderRepository = await getWilderRepository();
	await wilderRepository.clear();

	const lyonSchool = (await getSchoolByName('Lyon')) as School;
	const nantesSchool = (await getSchoolByName('Nantes')) as School;
	const parisSchool = (await getSchoolByName('Paris')) as School;
	const bordeauxSchool = (await getSchoolByName('Bordeaux')) as School;
	const toulouseSchool = (await getSchoolByName('Toulouse')) as School;

	const PHP = (await getSkillByName('PHP')) as Skill;
	const javascript = (await getSkillByName('JavaScript')) as Skill;
	const python = (await getSkillByName('Python')) as Skill;
	const CSS = (await getSkillByName('CSS')) as Skill;
	const HTML = (await getSkillByName('HTML')) as Skill;
	const SQL = (await getSkillByName('SQL')) as Skill;

	const jean = new Wilder('Jean', 'Wilder', false, lyonSchool, [PHP, javascript, python]);
	const jeanne = new Wilder('Jeanne', 'Wildeuse', false, bordeauxSchool, [
		PHP,
		javascript,
		python
	]);
	const arnaud = new Wilder('Arnaud', 'Renaud', true, parisSchool, [PHP, javascript, python]);
	const jojan = new Wilder('Jojan', 'Leterrible', false, nantesSchool, [PHP, javascript, python]);
	const chuck = new Wilder('Chuck', 'Norris', false, toulouseSchool, [PHP, javascript, python]);

	await wilderRepository.save([jean, jeanne, arnaud, jojan, chuck]);
}

async function getWilders() {
	const wilderRepository = await getWilderRepository();
	return wilderRepository.find();
}

async function createWilder(
	firstName: string,
	lastName: string,
	isTrainer: boolean,
	schoolName: string,
	skillsNames: string[]
) {
	const wilderRepository = await getWilderRepository();
	const school = (await getSchoolByName(schoolName)) as School;
	const getSkills = async () => {
		let result: (Skill | null)[] = [];
		for (const skillName of skillsNames) {
			result.push(await getSkillByName(skillName));
		}
		return result;
	};
	const skills = (await getSkills()) as Skill[];
	const newWilder = new Wilder(firstName, lastName, isTrainer, school, skills);
	await wilderRepository.save(newWilder);
	return newWilder;
}

async function updateWilder(id: string, firstName: string, lastName: string) {
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

const deleteWilder = async (id: string) => {
	const wilderRepository = await getWilderRepository();
	const existingWilder = await wilderRepository.findOneBy({ id });
	if (!existingWilder) {
		throw Error('No existing Wilder matching ID.');
	}
	return wilderRepository.remove(existingWilder);
};

const addSkillToWilder = async (wilderId: string, skillId: string) => {
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

export {
	initializeWilders,
	getWilders,
	createWilder,
	updateWilder,
	deleteWilder,
	addSkillToWilder
};
