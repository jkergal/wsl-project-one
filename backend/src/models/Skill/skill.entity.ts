import { Column, Entity, Index, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Wilder from '../Wilder/wilder.entity';

@Entity()
export default class Skill {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	@Index({ unique: true })
	skillName: string;

	@ManyToMany(() => Wilder, (wilder) => wilder.skills)
	wilders: Wilder[];
}
