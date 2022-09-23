import styled from 'styled-components';
import { baseFlexCenterStyle } from 'styles/base-styles';
import { BLACK_THEME_COLOR, GRAY_THEME_COLOR, WHITE_THEME_COLOR } from 'styles/style.constants';

export const NavbarContainer = styled.div`
	background-color: ${GRAY_THEME_COLOR};
	${baseFlexCenterStyle}
	width: 100%;
	height: 40px;
`;

export const Nav = styled.nav`
	color: ${WHITE_THEME_COLOR};
	margin: 0 20px 0 20px;
`;
