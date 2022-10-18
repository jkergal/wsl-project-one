import { Column, Entity, Index, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import Wilder from '../Wilder/wilder.entity';

@Entity()
@ObjectType()
export default class Skill {
	@PrimaryGeneratedColumn('uuid')
	@Field(() => ID)
	id: string;

	@Column()
	@Index({ unique: true })
	@Field()
	skillName: string;

	@ManyToMany(() => Wilder, (wilder) => wilder.skills)
	@Field(() => [Wilder])
	wilders: Wilder[];
}
