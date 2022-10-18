import { Args, Mutation, Query, Resolver } from 'type-graphql';
import Wilder from '../models/Wilder/wilder.entity';
import WilderRepository from '../models/Wilder/wilder.repository';
import { CreateWilderArgs } from './Wilder.input';

@Resolver(Wilder)
export default class WilderResolver {
	@Query(() => [Wilder])
	wilders(): Promise<Wilder[]> {
		return WilderRepository.getWilders();
	}

	@Mutation(() => Wilder)
	createWilder(
		@Args() { firstName, lastName, isTrainer, schoolName, skillsName }: CreateWilderArgs
	): Promise<Wilder> {
		return WilderRepository.createWilder(
			firstName,
			lastName,
			isTrainer,
			schoolName,
			skillsName
		);
	}

	// TODO :
	//   - updateWilder
	//   - deleteWilder
	//   - addSkill
}
