import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import Wilder from '../Wilder/wilder.entity';

@Entity()
@ObjectType()
export default class School {
	constructor(schoolName: string) {
		this.schoolName = schoolName;
	}

	@PrimaryGeneratedColumn('uuid')
	@Field(() => ID)
	id: string;

	@Column()
	@Index({ unique: true })
	@Field()
	schoolName: string;

	@OneToMany(() => Wilder, (wilder) => wilder.school)
	@Field(() => [Wilder])
	wilders: Wilder[];
}
