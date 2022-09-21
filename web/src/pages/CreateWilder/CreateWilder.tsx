import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select, { StylesConfig } from 'react-select';

import { SectionTitle } from '../../styles/base-styles';
import { createWilder } from './rest';
import Input from 'components/Input/Input';
import { MAIN_THEME_COLOR } from 'styles/style.constants';
import { getErrorMessage } from 'utils';

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
			setSchool('');
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
			// borderColor: ${MAIN_THEME_COLOR}
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
			<form
				onSubmit={async (event) => {
					event.preventDefault();
					await submit();
				}}
			>
				<label>
					Prénom
					<br />
					<Input
						placeholder="Select..."
						inputType="text"
						value={firstName}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setFirstName(event.target.value);
						}}
					/>
				</label>
				<br />
				<br />
				<label>
					Nom
					<br />
					<Input
						placeholder="Wilder"
						inputType="text"
						value={lastName}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							setLastName(event.target.value);
						}}
					/>
				</label>
				<br />
				<br />
				<label>
					School
					<br />
					<Select
						styles={customStyles}
						options={schoolOptions}
						value={schoolInputValue}
						onChange={(data) => handleChangeSchool(data as OptionType)}
					/>
				</label>
				<br />
				<label>
					Skills
					<Select
						styles={customStyles}
						options={skillsOptions}
						value={skillsInputValue}
						isMulti={true}
						onChange={(data) => handleChangeSkills(data as OptionType[])}
					/>
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						id="isTrainer"
						name="isTrainer"
						onChange={(e) => setIsTrainer(e.target.checked)}
						checked={isTrainer}
					/>
				</label>
				Ce wilder est formateur
				<br />
				<br />
				<button>Valider</button>
			</form>
			<ToastContainer />
		</>
	);
};

export default CreateWilder;
