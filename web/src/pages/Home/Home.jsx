import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CardRow } from 'pages/Home/Home.styled';
import Wilder from 'components/Wilder/Wilder';
import { LoadingSpinner } from 'components/Loader/Loader.styled';
import { SectionTitle } from 'styles/base-styles';
import { CREATE_WILDER_PATH } from 'paths';
import { fetchWilders } from './rest';

const Home = () => {
	const [wilders, setWilders] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const fetchedWilders = await fetchWilders();
				setWilders(fetchedWilders);
			} catch (error) {
				setErrorMessage(error.message);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	const renderMainContent = () => {
		if (isLoading) {
			return <LoadingSpinner />;
		}
		if (errorMessage) {
			return errorMessage;
		}
		if (!wilders?.length) {
			return "Pas de Wilder... Rejoint-nous! 😎";
		}
		return (
			<CardRow>
				{wilders?.map((wilder) => (
					<Wilder
						key={wilder.id}
						firstName={wilder.firstName}
						lastName={wilder.lastName}
						isTrainer={wilder.isTrainer}
						skills={wilder.skills}
						school={wilder.school.schoolName}
					/>
				))}
			</CardRow>
		);
	};

	return (
		<>
			<SectionTitle>Wilders</SectionTitle>
			<Link to={CREATE_WILDER_PATH}>Ajouter un nouveau Wilder</Link>
			<br />
			<br />
			{renderMainContent()}
		</>
	);
};

export default Home;
