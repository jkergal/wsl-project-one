import styled, { StyledComponent } from 'styled-components';
import { MAIN_THEME_COLOR } from 'styles/style.constants';

export const InputStyled = styled.input`
	all: unset;
	font-size: 16px;
	padding: 4px 8px;
	border: solid hsl(0, 0%, 80%) 2px;
	border-radius: 4px;
	border-width: 1px;
	min-height: 25px;
	width: 250px;

	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
		'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

	letter-spacing: none;

	&:focus {
		outline: none;
		box-shadow: 0px 0px 3px ${MAIN_THEME_COLOR};
		border-color: ${MAIN_THEME_COLOR};
	}
` as StyledComponent<
	'article',
	any,
	{ inputType: string; name: string; value: string; required: true },
	never
>;
