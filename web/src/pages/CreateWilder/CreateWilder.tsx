import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select, { StylesConfig } from 'react-select';

import { baseFlexCenterStyle, FormStyled, Label, SectionTitle } from '../../styles/base-styles';
import { createWilder } from './rest';
import Input from 'components/Input/Input';
import {
	BLACK_THEME_COLOR,
	GRAY_THEME_COLOR,
	GRAY_THEME_LINEAR_GRADIENT,
	LIGHT_THEME_COLOR,
	MAIN_THEME_COLOR,
	WHITE_THEME_COLOR
} from 'styles/style.constants';
import { getErrorMessage } from 'utils';
import Button from 'components/Button/Button';

const CreateWilder = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [isTrainer, setIsTrainer] = useState(false);
	const [schoolName, setSchool] = useState('');
	const [skills, setSkills] = useState<string[]>([]);
	const [skillsInputValue, setSkillsInputValue] = useState<OptionType[] | unknown>(null);
	const [schoolInputValue, setSchoolInputValue] = useState<OptionType | unknown>(null);

	const submit = async () => {
		try {
			console.log(skills);
			await createWilder(firstName, lastName, isTrainer, schoolName, skills);
			toast.success(`Wilder ${firstName} ${lastName} créé avec succès.`);
			setFirstName('');
			setLastName('');
			setIsTrainer(false);
			// setSchool('');
			setSkillsInputValue(null);
			setSchoolInputValue(null);
		} catch (error) {
			toast.error(getErrorMessage(error));
		}
	};

	const schoolOptions = [
		// { value: '', label: 'Choose a school' },
		{ value: 'Lyon', label: 'Lyon' },
		{ value: 'Nantes', label: 'Nantes' },
		{ value: 'Paris', label: 'Paris' },
		{ value: 'Bordeaux', label: 'Bordeaux' },
		{ value: 'Toulouse', label: 'Toulouse' }
	];

	const skillsOptions = [
		{ value: 'PHP', label: 'PHP' },
		{ value: 'JavaScript', label: 'JavaScript' },
		{ value: 'Python', label: 'Python' },
		{ value: 'CSS', label: 'CSS' },
		{ value: 'HTML', label: 'HTML' },
		{ value: 'SQL', label: 'SQL' }
	];

	const customStyles: StylesConfig = {
		control: (base, state) => ({
			...base,
			width: '268px',
			borderColor: state.isFocused ? `${MAIN_THEME_COLOR}` : 'hsl(0, 0%, 80%)',
			'&:hover': {
				borderColor: state.isFocused ? `${MAIN_THEME_COLOR}` : 'hsl(0, 0%, 80%)'
			},
			boxShadow: state.isFocused ? `0px 0px 3px ${MAIN_THEME_COLOR}` : ''
		}),
		option: (styles) => {
			return {
				...styles,
				color: BLACK_THEME_COLOR
			};
		},
		multiValue: (base) => ({
			...base,
			backgroundColor: LIGHT_THEME_COLOR
		})
	};

	type OptionType = {
		value: string;
		label: string;
	};

	const handleChangeSkills = (data: OptionType[]) => {
		setSkillsInputValue(data);

		let skills: string[] = data.map((skill) => skill.value);
		setSkills(skills);
	};

	const handleChangeSchool = (data: OptionType) => {
		setSchoolInputValue(data);

		let schoolName = data.value;
		setSchool(schoolName);
	};

	return (
		<>
			<SectionTitle>Ajouter un nouveau Wilder</SectionTitle>
			<FormStyled
				onSubmit={async (event) => {
					event.preventDefault();
					await submit();
				}}
			>
				<Label>
					Prénom
					<br />
					<Input
						placeholder="Jean"
						inputType="text"
						value={firstName}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setFirstName(event.target.value);
						}}
					/>
				</Label>
				<Label>
					Nom
					<br />
					<Input
						placeholder="Dupont"
						inputType="text"
						value={lastName}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setLastName(event.target.value);
						}}
					/>
				</Label>
				<Label>
					School
					<br />
					<Select
						styles={customStyles}
						options={schoolOptions}
						value={schoolInputValue}
						onChange={(data) => handleChangeSchool(data as OptionType)}
					/>
				</Label>
				<Label>
					Skills
					<Select
						styles={customStyles}
						options={skillsOptions}
						value={skillsInputValue}
						isMulti={true}
						onChange={(data) => handleChangeSkills(data as OptionType[])}
					/>
				</Label>
				<Label>
					<input
						type="checkbox"
						id="isTrainer"
						name="isTrainer"
						onChange={(e) => setIsTrainer(e.target.checked)}
						checked={isTrainer}
					/>
					Ce wilder est formateur
				</Label>

				<Button label="Valider"></Button>
			</FormStyled>
			<ToastContainer />
		</>
	);
};

export default CreateWilder;
