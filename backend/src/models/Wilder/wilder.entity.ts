import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
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
}
