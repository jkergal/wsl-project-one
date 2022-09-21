import React from 'react';
import blankProfilePicture from 'assets/images/blank-profile-picture.png';
import { WilderType } from 'types';
import Skill from 'components/Skill/Skill';
import {
	Card,
	CardInfosContainer,
	CardWilderRoleWrapper,
	CardWilderRole,
	CardImage,
	CardParagraph,
	CardSecondaryTitle,
	CardSkillList,
	CardTitle
} from 'components/Widler/Wilder.styled';

type PropType = Omit<WilderType, 'id' | 'school'>;

const Wilder = ({ firstName, lastName, skills, isTrainer }: PropType) => {
	return (
		<Card isTrainer={isTrainer}>
			<CardWilderRoleWrapper>
				{isTrainer && (
					<CardWilderRole>
						<h4>TRAINER</h4>
					</CardWilderRole>
				)}
			</CardWilderRoleWrapper>
			<CardInfosContainer>
				<CardImage src={blankProfilePicture} alt="Jane Doe Profile" />
				<CardTitle>
					{firstName} {lastName}
				</CardTitle>
				{/* <h4>{school}</h4> */}
				<CardParagraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
				</CardParagraph>
				<CardSecondaryTitle>Wild Skills</CardSecondaryTitle>
				<CardSkillList>
					{skills.map((skill) => (
						<li key={skill.id}>
							<Skill skillName={skill.skillName} numberOfVotes={1} />
						</li>
					))}
				</CardSkillList>
			</CardInfosContainer>
		</Card>
	);
};

export default Wilder;
