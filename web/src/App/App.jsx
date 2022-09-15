import Wilder from 'components/Wilder/Wilder';
import {
	CardRow,
	Container,
	Footer,
	Header,
	MainContainer,
	PageTitle,
	SectionTitle
} from 'App/App.styled';
import WILDERS from 'data/wildersData';

function App() {
	// fetch list of wilders from API

	return (
		<div>
			<Header>
				<Container>
					<PageTitle>Wilders Book</PageTitle>
				</Container>
			</Header>
			<MainContainer>
				<SectionTitle>Wilders</SectionTitle>
				<CardRow>
					{WILDERS.map((wilder) => (
						<Wilder
							key={wilder.id}
							firstName={wilder.firstName}
							lastName={wilder.lastName}
							skills={wilder.skills}
						/>
					))}
				</CardRow>
			</MainContainer>
			<Footer>
				<Container>
					<p>&copy; 2022 Wild Code School</p>
				</Container>
			</Footer>
		</div>
	);
}

export default App;
