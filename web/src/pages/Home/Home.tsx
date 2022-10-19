import { gql, useQuery } from '@apollo/client';
import { LoadingSpinner } from 'components/Loader/Loader.styled';
import Wilder from 'components/Widler/Wilder';
import { GetWildersQuery } from 'graphql/graphql';
import { CardRow } from 'pages/Home/Home.styled';
import { GET_WILDERS } from '../../api/GetWilders.gql';

const Home = () => {
	const { data, loading, error } = useQuery<GetWildersQuery>(GET_WILDERS, {
		fetchPolicy: 'cache-and-network'
	});

	const renderMainContent = () => {
		if (loading) {
			return <LoadingSpinner />;
		}
		if (error) {
			return error.message;
		}
		if (!data?.wilders?.length) {
			return 'Pas de Wilder... Rejoint-nous! 😎';
		}

		return (
			<CardRow>
				{data.wilders.map((wilder) => (
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
