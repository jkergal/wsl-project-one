import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from 'pages/Home/Home';
import {
	SiteTitleWrapper,
	Footer,
	Header,
	Layout,
	MainContainer,
	Container,
	SiteTitle,
	PageTitleLink,
	WcsLogo
} from 'App/App.styled';
import CreateWilder from 'pages/CreateWilder/CreateWilder';
import { ADMIN_PATH, CREATE_WILDER_PATH, HOME_PATH } from 'paths';
import Admin from 'pages/Admin/Admin';
import wcsLogo from 'assets/images/logo-wcs-alpha.png';
import { Paragraph } from 'styles/base-styles';

function App() {
	return (
		<Layout>
			<Header>
				<PageTitleLink to={HOME_PATH}>
					<SiteTitleWrapper>
						<WcsLogo src={wcsLogo} alt="Wild Code School logo" />
						<SiteTitle>Wilders Book</SiteTitle>
					</SiteTitleWrapper>
				</PageTitleLink>
			</Header>
			<MainContainer>
				<Routes>
					<Route path={HOME_PATH} element={<Home />} />
					<Route path={CREATE_WILDER_PATH} element={<CreateWilder />} />
					<Route path={ADMIN_PATH} element={<Admin />} />
				</Routes>
			</MainContainer>
			<Footer>
				<Paragraph>&copy; 2022 Wild Code School</Paragraph>
			</Footer>
		</Layout>
	);
}

export default App;
