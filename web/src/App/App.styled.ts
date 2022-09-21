import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MAIN_THEME_COLOR } from 'styles/style.constants';
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

export const MainContainer = styled.main`
	${baseContainerStyles}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.header`
	background: rgb(247, 108, 108);
	background: linear-gradient(90deg, rgba(247, 108, 108, 1) 0%, rgba(255, 222, 183, 1) 100%);
	color: #fff;
`;

export const Footer = styled.footer`
	border-top: 2px solid ${MAIN_THEME_COLOR};
`;

export const PageTitle = styled.h1`
	${baseTitleStyles}
	font-size: 40px;
`;

export const PageTitleLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`;
