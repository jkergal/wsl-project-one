import React from 'react';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CardRow } from 'pages/Home/Home.styled';
import Wilder from 'components/Widler/Wilder';
import { LoadingSpinner } from 'components/Loader/Loader.styled';
import { SectionTitle } from 'styles/base-styles';
import { ADMIN_PATH, CREATE_WILDER_PATH } from 'paths';
import { fetchWilders } from './rest';
import { WilderType } from 'types';
import { getErrorMessage } from 'utils';

const Home = () => {
	const [wilders, setWilders] = useState<null | WilderType[]>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const fetchedWilders = await fetchWilders();
				setWilders(fetchedWilders);
			} catch (error) {
				setErrorMessage(getErrorMessage(error));
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
			return 'Pas de Wilder... Rejoint-nous! 😎';
		}
		return (
			<CardRow>
				{wilders.map((wilder) => (
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

	return (
		<>
			<SectionTitle>Wilders</SectionTitle>
			<br />
			<br />
			{renderMainContent()}
		</>
	);
};

export default Home;
