import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import { Container, Footer, Header, MainContainer, PageTitle, PageTitleLink } from 'App/App.styled';
import CreateWilder from 'pages/CreateWilder/CreateWilder';
import { CREATE_WILDER_PATH, HOME_PATH } from 'paths';

function App() {
	return (
		<>
			<Header>
				<Container>
					<PageTitle>
						<PageTitleLink to={HOME_PATH}>Wilders Book</PageTitleLink>
					</PageTitle>
				</Container>
			</Header>
			<MainContainer>
				<Routes>
					<Route path={HOME_PATH} element={<Home />} />
					<Route path={CREATE_WILDER_PATH} element={<CreateWilder />} />
				</Routes>
			</MainContainer>
			<Footer>
				<Container>
					<p>&copy; 2022 Wild Code School</p>
				</Container>
			</Footer>
		</>
	);
}

export default App;
