import styled from 'styled-components';
import { baseContainerStyles, baseSectionStyles } from 'styles/base-styles';

export const AdminContainer = styled.main`
	${baseContainerStyles}
	/* background-color: pink; */
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 50px 50px;
	grid-template-areas:
		'CreateWilder AddSkill'
		'CreateWilder .';
	width: 100vw;
	height: 600px;
`;

export const CreateWilderArea = styled.section`
	${baseSectionStyles}

	grid-area: CreateWilder;
	width: 100%;
	height: 100%;
`;

export const AddSkillArea = styled.section`
	${baseSectionStyles}

	grid-area: AddSkill;
	width: 100%;
	height: 100%;
`;

export const AddSchoolArea = styled.section`
	${baseSectionStyles}

	width: 100%;
	height: 100%;
`;
