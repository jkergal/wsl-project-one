import { query, WILDERS_PATH } from 'services/rest';

export async function createWilder(firstName, lastName, isTrainer) {
	return query(WILDERS_PATH, 'POST', { firstName, lastName, isTrainer });
}
