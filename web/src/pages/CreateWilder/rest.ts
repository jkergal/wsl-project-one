import { HTTPVerb, query, WILDERS_PATH } from 'services/rest';
import { WilderType } from '../../types';

export async function createWilder(
	firstName: string,
	lastName: string,
	isTrainer: boolean,
	schoolName: string,
	skillsNames: string[]
): Promise<WilderType> {
	console.log(skillsNames);
	return query(WILDERS_PATH, HTTPVerb.POST, {
		firstName,
		lastName,
		isTrainer,
		schoolName,
		skillsNames
	});
}
