import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
	APP_FUNCTIONAL_WIDTH,
	GRAY_THEME_LINEAR_GRADIENT,
	LIGHT_THEME_COLOR,
	WHITE_THEME_COLOR
} from 'styles/style.constants';

export const baseFlexCenterStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const baseTitleStyles = css`
	margin: 0;
`;

export const baseContainerStyles = css`
	max-width: ${APP_FUNCTIONAL_WIDTH};

	margin-left: auto;
	margin-right: auto;
	padding: 24px;
`;

export const baseSectionStyles = css`
	border-radius: 7px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${GRAY_THEME_LINEAR_GRADIENT};
`;

export const Paragraph = styled.p`
	font-family: 'Baloo Tamma 2', cursive;
	font-weight: 400;
	font-size: 16px;
	color: ${WHITE_THEME_COLOR};
	margin: 0;
`;

export const SectionTitle = styled.h2`
	${baseTitleStyles}
	font-family: 'Baloo Tamma 2', cursive;
	font-weight: 600;
	font-size: 28px;
	color: ${WHITE_THEME_COLOR};
	padding-bottom: 35px;
`;

export const Label = styled.label`
	font-family: 'Baloo Tamma 2', cursive;
	font-weight: 400;
	font-size: 18px;
	color: ${WHITE_THEME_COLOR};
	margin: 0 0 10px 0;
`;

export const Form = styled.form`
	${baseFlexCenterStyle}
	flex-direction: column;
	margin: 0;
`;

export const ReactRouterLink = styled(Link)`
	color: ${WHITE_THEME_COLOR};
	text-decoration: none;

	&:hover {
		color: ${LIGHT_THEME_COLOR};
	}
`;
