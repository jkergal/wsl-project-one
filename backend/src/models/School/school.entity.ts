import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn, Repository } from 'typeorm';
import { getSchoolRepository } from '../../database/utils';
import Wilder from '../Wilder/wilder.entity';

@Entity()
export default class School {
	constructor(schoolName: string) {
		this.schoolName = schoolName;
	}

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	@Index({ unique: true })
	schoolName: string;

	@OneToMany(() => Wilder, (wilder) => wilder.school)
	wilders: Wilder[];

	private static repository: Repository<School>;
	static async initializeRepository() {
		this.repository = await getSchoolRepository();
	}

	static async clearRepository(): Promise<void> {
		this.repository.clear();
	}

	static async initializeSchools(): Promise<void> {
		await Wilder.clearRepository();
		await this.repository.clear();
		await this.repository.save({
			schoolName: 'Lyon'
		});
		await this.repository.save({
			schoolName: 'Nantes'
		});
		await this.repository.save({
			schoolName: 'Paris'
		});
		await this.repository.save({
			schoolName: 'Bordeaux'
		});
		await this.repository.save({
			schoolName: 'Toulouse'
		});
	}

	static async getSchoolByName(name: string): Promise<School | null> {
		return this.repository.findOneBy({ schoolName: name });
	}

	static async getSchools(): Promise<School[] | null> {
		return this.repository.find();
	}

	static async createSchool(schoolName: string): Promise<School | null> {
		const newSchool = new School(schoolName);
		await this.repository.save(newSchool);
		return newSchool;
	}

	static async deleteSchool(id: string) {
		const existingSchool = await this.repository.findOneBy({ id });
		console.error({ exisitingSchool: existingSchool });
		if (!existingSchool) {
			throw Error('No existing Wilder matching ID.');
		}
		return this.repository.remove(existingSchool);
	}
}
