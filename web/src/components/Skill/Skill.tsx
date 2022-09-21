import { SkillVotes } from 'components/Skill/Skill.styled';
import React from 'react';

type PropType = {
	skillName: string;
	numberOfVotes: number;
};

const Skill = ({ skillName, numberOfVotes }: PropType) => {
	return (
		<>
			{skillName}
			<SkillVotes>{numberOfVotes}</SkillVotes>
		</>
	);
};

export default Skill;
