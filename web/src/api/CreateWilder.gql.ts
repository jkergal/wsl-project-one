import { gql } from '@apollo/client';

export const CREATE_WILDER = gql`
	mutation CreateWilder(
		$firstName: String!
		$lastName: String!
		$isTrainer: Boolean!
		$schoolName: String!
		$skillsName: [String!]!
	) {
		createWilder(
			firstName: $firstName
			lastName: $lastName
			isTrainer: $isTrainer
			schoolName: $schoolName
			skillsName: $skillsName
		) {
			firstName
			lastName
			id
			isTrainer
			school {
				id
				schoolName
			}
			skills {
				id
				skillName
			}
		}
	}
`;
