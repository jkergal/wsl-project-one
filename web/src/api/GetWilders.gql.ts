import { gql } from '@apollo/client';

export const GET_WILDERS = gql`
	query GetWilders {
		wilders {
			id
			firstName
			lastName
			isTrainer
			skills {
				id
				skillName
			}
			school {
				id
				schoolName
			}
		}
	}
`;
