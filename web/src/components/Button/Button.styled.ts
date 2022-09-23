import styled from 'styled-components';
import { baseFlexCenterStyle } from 'styles/base-styles';
import { VALIDATION_COLOR, WHITE_THEME_COLOR } from 'styles/style.constants';

export const SubmitButton = styled.button`
	/* ${baseFlexCenterStyle} */
	padding-top: 4px;
	background-color: ${VALIDATION_COLOR};
	height: 40px;
	width: 120px;
	font-family: 'Baloo Tamma 2', cursive;
	font-weight: 400;
	font-size: 18px;
	color: ${WHITE_THEME_COLOR};
	border: none;
	border-radius: 15px;
	cursor: pointer;
`;
