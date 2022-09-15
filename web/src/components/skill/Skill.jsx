import { SkillVotes } from "components/Skill/Skill.styled";

const Skill = ({ skillName, numberOfVotes }) => {
	return (
		<>
			{skillName}
			<SkillVotes>{numberOfVotes}</SkillVotes>
		</>
	);
};

export default Skill;
