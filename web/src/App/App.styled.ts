import styled, { StyledComponent } from 'styled-components';
import { Link } from 'react-router-dom';

import { GRAY_THEME_COLOR, MAIN_THEME_COLOR, WHITE_THEME_COLOR } from 'styles/style.constants';
import { baseContainerStyles, baseTitleStyles } from 'styles/base-styles';

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;

export const Container = styled.div`
	${baseContainerStyles}
`;

export const SiteTitleWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	margin: 20px;
`;

export const MainContainer = styled.main`
	${baseContainerStyles}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.header`
	background: rgb(247, 108, 108);
	background: linear-gradient(120deg, rgba(247, 108, 108, 1) 0%, rgb(235, 170, 170) 100%);
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 180%;
`;

export const Footer = styled.footer`
	height: 75px;
	/* background: ${GRAY_THEME_COLOR}; */
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SiteTitle = styled.h1`
	${baseTitleStyles}
	font-family: 'Baloo Tamma 2', cursive;
	font-weight: 900;
	font-size: 40px;
	color: white;
	width: 140px;
	padding-top: 7px;
	padding-left: 23px;
`;

export const PageTitleLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`;

export const WcsLogo = styled.img`
	height: 55px;
	padding-top: 3px;
`;
