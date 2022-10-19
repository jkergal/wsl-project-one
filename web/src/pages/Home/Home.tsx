import { gql, useQuery } from '@apollo/client';
import { LoadingSpinner } from 'components/Loader/Loader.styled';
import Wilder from 'components/Widler/Wilder';
import { CardRow } from 'pages/Home/Home.styled';
import { WilderType } from 'types';

const GET_WILDERS = gql`
	query GetWilders {
		wilders {
			id
			firstName
			lastName
			skills {
				id
				skillName
			}
		}
	}
`;

const Home = () => {
	const { data, loading, error } = useQuery(GET_WILDERS);

	const renderMainContent = () => {
		if (loading) {
			return <LoadingSpinner />;
		}
		if (error) {
			return error.message;
		}
		if (!data.wilders?.length) {
			return 'Pas de Wilder... Rejoint-nous! 😎';
		}
		return (
			<CardRow>
				{data.wilders.map((wilder: WilderType) => (
					<Wilder
						key={wilder.id}
						firstName={wilder.firstName}
						lastName={wilder.lastName}
						isTrainer={wilder.isTrainer}
						skills={wilder.skills}
					/>
				))}
			</CardRow>
		);
	};

	return <>{renderMainContent()}</>;
};

export default Home;
