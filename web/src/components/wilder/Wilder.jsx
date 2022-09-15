import blankProfilePicture from 'assets/images/blank-profile-picture.png';
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
} from 'components/Wilder/Wilder.styled';

const Wilder = ({ firstName, lastName, skills, isTrainer }) => {
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
				<CardParagraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
