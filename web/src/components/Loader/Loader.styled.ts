import styled from 'styled-components';
import { MAIN_THEME_COLOR, LIGHT_THEME_COLOR } from 'styles/style.constants';

export const LoadingSpinner = styled.span`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	display: inline-block;
	position: relative;
	border: 5px solid;
	border-color: ${MAIN_THEME_COLOR} ${MAIN_THEME_COLOR} ${LIGHT_THEME_COLOR} ${LIGHT_THEME_COLOR};
	box-sizing: border-box;
	animation: rotation 1s linear infinite;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes rotationBack {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-360deg);
		}
	}
`;
