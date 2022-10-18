import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import School from '../School/school.entity';
import Skill from '../Skill/skill.entity';

@Entity()
@ObjectType()
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
	@Field(() => ID)
	id: string;

	@Column()
	@Field()
	firstName: string;

	@Column()
	@Field()
	lastName: string;

	@Column()
	@Field()
	isTrainer: boolean;

	@ManyToOne(() => School, (school) => school.wilders, { eager: true })
	@Field(() => School, { nullable: true })
	school: School;

	@ManyToMany(() => Skill, { eager: true })
	@Field(() => [Skill])
	@JoinTable()
	skills: Skill[];
}
