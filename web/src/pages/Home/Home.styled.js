import styled from 'styled-components';
import { baseTitleStyles } from 'styles/base-styles';

export const SectionTitle = styled.h2`
	${baseTitleStyles}
	font-size: 28px;
`;

export const MainContent = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	/* height: 100%; */
`;

export const CardRow = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
`;
