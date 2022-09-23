import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import React, { ChangeEvent, useState } from 'react';
import { FormStyled, Label, SectionTitle } from 'styles/base-styles';

const AddSkill = () => {
	const [skill, setSkill] = useState('');

	return (
		<>
			<SectionTitle>Créer une compétence</SectionTitle>
			<FormStyled>
				<Label>
					Skill
					<br />
					<Input
						placeholder="JavaScript"
						inputType="text"
						value={skill}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setSkill(event.target.value);
						}}
					/>
				</Label>

				<Button label="Valider"></Button>
			</FormStyled>
		</>
	);
};

export default AddSkill;
