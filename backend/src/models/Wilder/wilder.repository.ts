import { Repository } from 'typeorm';
import Wilder from './wilder.entity';
import { getRepository } from '../../database/utils';
import School from '../School/school.entity';
import SchoolRepository from '../School/school.repository';
import Skill from '../Skill/skill.entity';
import SkillRepository from '../Skill/skill.repository';

export default class WilderRepository extends Wilder {
	private static repository: Repository<Wilder>;
	static async initializeRepository() {
		this.repository = await getRepository(Wilder);
	}

	static async clearRepository(): Promise<void> {
		this.repository.delete({});
	}

	static async initializeWilders(): Promise<void> {
		await this.clearRepository();
		const lyonSchool = (await SchoolRepository.getSchoolByName('Lyon')) as School;
		const nantesSchool = (await SchoolRepository.getSchoolByName('Nantes')) as School;
		const parisSchool = (await SchoolRepository.getSchoolByName('Paris')) as School;
		const bordeauxSchool = (await SchoolRepository.getSchoolByName('Bordeaux')) as School;
		const toulouseSchool = (await SchoolRepository.getSchoolByName('Toulouse')) as School;

		const PHP = (await SkillRepository.getSkillByName('PHP')) as Skill;
		const javascript = (await SkillRepository.getSkillByName('JavaScript')) as Skill;
		const python = (await SkillRepository.getSkillByName('Python')) as Skill;
		const CSS = (await SkillRepository.getSkillByName('CSS')) as Skill;
		const HTML = (await SkillRepository.getSkillByName('HTML')) as Skill;
		const SQL = (await SkillRepository.getSkillByName('SQL')) as Skill;

		const jean = new Wilder('Jean', 'Wilder', false, lyonSchool, [PHP, javascript, python]);
		const jeanne = new Wilder('Jeanne', 'Wildeuse', false, bordeauxSchool, [
			PHP,
			javascript,
			python
		]);
		const arnaud = new Wilder('Arnaud', 'Renaud', true, parisSchool, [PHP, javascript, python]);
		const jojan = new Wilder('Jojan', 'Leterrible', false, nantesSchool, [
			PHP,
			javascript,
			python
		]);
		const chuck = new Wilder('Chuck', 'Norris', false, toulouseSchool, [
			PHP,
			javascript,
			python
		]);

		await WilderRepository.repository.save([jean, jeanne, arnaud, jojan, chuck]);
	}

	static async getWilders(): Promise<Wilder[]> {
		return this.repository.find();
	}

	static async createWilder(
		firstName: string,
		lastName: string,
		isTrainer: boolean,
		schoolName: string,
		skillsNames: string[]
	): Promise<Wilder> {
		const school = (await SchoolRepository.getSchoolByName(schoolName)) as School;
		const getSkills = async () => {
			let result: (Skill | null)[] = [];
			for (const skillName of skillsNames) {
				result.push(await SkillRepository.getSkillByName(skillName));
			}
			return result;
		};
		const skills = (await getSkills()) as Skill[];
		const newWilder = this.repository.create({
			firstName,
			lastName,
			isTrainer,
			school,
			skills
		});
		await this.repository.save(newWilder);
		return newWilder;
	}

	static async updateWilder(
		id: string,
		firstName: string,
		lastName: string
	): Promise<
		{
			id: string;
			firstName: string;
			lastName: string;
		} & Wilder
	> {
		const existingWilder = await this.repository.findOneBy({ id });
		if (!existingWilder) {
			throw Error('No existing Wilder matching ID.');
		}
		return this.repository.save({
			id,
			firstName,
			lastName
		});
	}

	static async deleteWilder(id: string): Promise<Wilder> {
		const existingWilder = await this.repository.findOneBy({ id });
		if (!existingWilder) {
			throw Error('No existing Wilder matching ID.');
		}
		return this.repository.remove(existingWilder);
	}

	static async addSkillToWilder(wilderId: string, skillId: string): Promise<Wilder> {
		const wilder = await this.repository.findOneBy({ id: wilderId });
		if (!wilder) {
			throw Error('No existing Wilder matching ID.');
		}
		const skill = await SkillRepository.getSkillById(skillId);
		if (!skill) {
			throw Error('No existing skill matching ID.');
		}
		wilder.skills = [...wilder.skills, skill];
		return this.repository.save(wilder);
	}
}
