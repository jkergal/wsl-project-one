import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import { CardRow, MainContent } from "pages/Home/Home.styled";
import Wilder from "components/Wilder/Wilder";
import { LoadingSpinner } from 'components/Loader/Loader.styled';
import { SectionTitle } from "styles/base-styles";
import { CREATE_WILDER_PATH } from "paths";

const Home = () => {
	const [wilders, setWilders] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const response = await fetch('/wilders');
			const fetchedWilders = await response.json();
			setWilders(fetchedWilders);
			setIsLoading(false);
		})();
	}, []);

	return (
		<>
			<SectionTitle>Wilders</SectionTitle>
			<Link to={CREATE_WILDER_PATH}>Ajouter un nouveau Wilder</Link>
			<MainContent>
				{isLoading ? (
					<LoadingSpinner />
				) : wilders.length === 0 ? (
					"Il n'y a pas encore de Wilders ! Rejoint-nous 😎"
				) : (
					<CardRow>
						{wilders?.map((wilder) => (
							<Wilder
								key={wilder.id}
								firstName={wilder.firstName}
								lastName={wilder.lastName}
								skills={wilder.skills}
								isTrainer={wilder.isTrainer}
							/>
						))}
					</CardRow>
				)}
			</MainContent>
		</>
	);
};

export default Home;