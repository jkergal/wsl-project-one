import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import React, { ChangeEvent, useState } from 'react';
import { FormStyled, Label, SectionTitle } from 'styles/base-styles';

const AddSchool = () => {
	const [school, setSchool] = useState('');

	return (
		<>
			<SectionTitle>Créer une école</SectionTitle>
			<FormStyled>
				<Label>
					Skill
					<br />
					<Input
						placeholder="JavaScript"
						inputType="text"
						value={school}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setSchool(event.target.value);
						}}
					/>
				</Label>

				<Button label="Valider"></Button>
			</FormStyled>
		</>
	);
};

export default AddSchool;
