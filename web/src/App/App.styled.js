import styled from 'styled-components';
import { MAIN_THEME_COLOR } from 'styles/style.constants.js';
import { baseContainerStyles, baseTitleStyles } from 'styles/base-styles';

export const Container = styled.div`
	${baseContainerStyles}
`;

export const MainContainer = styled.main`
	${baseContainerStyles}
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.header`
	background-color: ${MAIN_THEME_COLOR};
	color: #fff;
`;

export const Footer = styled.footer`
	border-top: 2px solid ${MAIN_THEME_COLOR};
`;

export const PageTitle = styled.h1`
	${baseTitleStyles}
	font-size: 40px;
`;
