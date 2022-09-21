import { Repository } from 'typeorm';
import School from './school.entity';
import { getRepository } from '../../database/utils';
import WilderRepository from '../Wilder/wilder.repository';
import Wilder from '../Wilder/wilder.entity';

export default class SchoolRepository extends School {
	private static repository: Repository<School>;
	static async initializeRepository() {
		this.repository = await getRepository(School);
	}

	static async clearRepository(): Promise<void> {
		this.repository.clear();
	}

	static async initializeSchools(): Promise<void> {
		await WilderRepository.clearRepository();
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
