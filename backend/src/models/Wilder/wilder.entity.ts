import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	ManyToMany,
	JoinTable,
	Repository
} from 'typeorm';
import { getWilderRepository } from '../../database/utils';
import School from '../School/school.entity';
import Skill from '../Skill/skill.entity';

@Entity()
export default class Wilder {
	constructor(
		firstName: string,
		lastName: string,
		isTrainer: boolean,
		school?: School,
		skills?: Skill[]
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		if (school) {
			this.school = school;
		}
		if (skills) {
			this.skills = skills;
		}
		this.isTrainer = isTrainer;
	}

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	isTrainer: boolean;

	@ManyToOne(() => School, (school) => school.wilders, { eager: true })
	school: School;

	@ManyToMany(() => Skill, { eager: true })
	@JoinTable()
	skills: Skill[];

	private static repository: Repository<Wilder>;
	static async initializeRepository() {
		this.repository = await getWilderRepository();
	}

	static async clearRepository(): Promise<void> {
		this.repository.clear();
	}

	static async initializeWilders(): Promise<void> {
		await this.clearRepository();
		const lyonSchool = (await School.getSchoolByName('Lyon')) as School;
		const nantesSchool = (await School.getSchoolByName('Nantes')) as School;
		const parisSchool = (await School.getSchoolByName('Paris')) as School;
		const bordeauxSchool = (await School.getSchoolByName('Bordeaux')) as School;
		const toulouseSchool = (await School.getSchoolByName('Toulouse')) as School;

		const PHP = (await Skill.getSkillByName('PHP')) as Skill;
		const javascript = (await Skill.getSkillByName('JavaScript')) as Skill;
		const python = (await Skill.getSkillByName('Python')) as Skill;
		const CSS = (await Skill.getSkillByName('CSS')) as Skill;
		const HTML = (await Skill.getSkillByName('HTML')) as Skill;
		const SQL = (await Skill.getSkillByName('SQL')) as Skill;

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

		await Wilder.repository.save([jean, jeanne, arnaud, jojan, chuck]);
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
		const school = (await School.getSchoolByName(schoolName)) as School;
		const getSkills = async () => {
			let result: (Skill | null)[] = [];
			for (const skillName of skillsNames) {
				result.push(await Skill.getSkillByName(skillName));
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
		const skill = await Skill.getSkillById(skillId);
		if (!skill) {
			throw Error('No existing skill matching ID.');
		}
		wilder.skills = [...wilder.skills, skill];
		return this.repository.save(wilder);
	}
}
