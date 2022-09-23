import styled, { css, StyledComponent } from 'styled-components';

import {
	BLACK_THEME_COLOR,
	GRAY_THEME_COLOR,
	LIGHT_THEME_COLOR,
	MAIN_THEME_COLOR,
	WHITE_THEME_COLOR
} from 'styles/style.constants';
import { baseTitleStyles, Paragraph } from 'styles/base-styles';

export const Card: StyledComponent<'article', any, { isTrainer: boolean }, never> = styled.article`
	width: 250px;

	border-radius: 8px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	background-color: ${GRAY_THEME_COLOR};
`;

export const CardInfosContainer = styled.article`
	padding: 0px 20px 20px 20px;
`;

export const CardWilderRoleWrapper = styled.div`
	height: 28px;
	display: flex;
	justify-content: flex-end;
`;

export const CardWilderRole = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${MAIN_THEME_COLOR};
	/* border-radius: 5px; */
	border-radius: 0 0 0 8px;
	width: 100px;
	color: white;
`;

export const CardImage = styled.img`
	border-radius: 7px 7px 0 0;
	margin-bottom: 20px;
	max-width: 100%;
	height: auto;
`;

export const CardTitle = styled.h3`
	${baseTitleStyles}
	color: ${MAIN_THEME_COLOR};
	font-size: 20px;
	padding-bottom: 10px;
`;

export const CardSecondaryTitle = styled.h4`
	color: ${MAIN_THEME_COLOR};
	font-size: 15px;
`;

const cardPropertiesStyled = css`
	color: #757575;
	line-height: 1.5;
`;

export const CardParagraph = styled(Paragraph)`
	${cardPropertiesStyled}
`;

export const CardSkillList = styled.ul`
	${cardPropertiesStyled}
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	& li {
		margin: 4px 0;
		display: flex;
		justify-content: space-around;
		background-color: ${LIGHT_THEME_COLOR};
		border-radius: 4px;
		padding: 2px;
		color: ${BLACK_THEME_COLOR};
	}
`;
