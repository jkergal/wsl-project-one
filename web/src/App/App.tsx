import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from 'pages/Home/Home';
import {
	Container,
	Footer,
	Header,
	Layout,
	MainContainer,
	PageTitle,
	PageTitleLink
} from 'App/App.styled';
import CreateWilder from 'pages/CreateWilder/CreateWilder';
import { CREATE_WILDER_PATH, HOME_PATH } from 'paths';

function App() {
	return (
		<Layout>
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
		</Layout>
	);
}

export default App;
