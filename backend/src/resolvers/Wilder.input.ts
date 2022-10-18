import { MinLength } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class CreateWilderArgs {
	@Field()
	@MinLength(1, {
		message: 'Le prénom doit faire au moins un caractère de long.'
	})
	firstName: string;

	@Field()
	@MinLength(1, { message: 'Le nom doit faire au moins un caractère de long.' })
	lastName: string;

	@Field()
	isTrainer: boolean;

	@Field()
	schoolName: string;

	@Field(() => [String])
	skillsName: [string];
}

export { CreateWilderArgs };

//TODO : validation on 3 last args