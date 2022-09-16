import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SectionTitle } from '../../styles/base-styles';
import { createWilder } from './rest';

const CreateWilder = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [isTrainer, setIsTrainer] = useState(false);
	const [schoolName, setSchool] = useState('');

	const submit = async () => {
		try {
			await createWilder(firstName, lastName, isTrainer, schoolName);
			toast.success(`Wilder ${firstName} ${lastName} créé avec succès.`);
			setFirstName('');
			setLastName('');
			setIsTrainer(false);
		} catch (error) {
			console.log('error caught ????');
			toast.error(error.message);
		}
	};

	const schoolOptions = [
		{ value: '', text: 'Choose a school' },
		{ value: 'Lyon', text: 'Lyon' },
		{ value: 'Nantes', text: 'Nantes' },
		{ value: 'Paris', text: 'Paris' },
		{ value: 'Bordeaux', text: 'Bordeaux' },
		{ value: 'Toulouse', text: 'Toulouse' }
	];

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
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={firstName}
						onChange={(event) => {
							setFirstName(event.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					Nom
					<br />
					<input
						type="text"
						required
						id="firstName"
						name="lastName"
						value={lastName}
						onChange={(event) => {
							setLastName(event.target.value);
						}}
					/>
				</label>
				<br />
				<br />
				<label>
					School
					<br />
					<select value={schoolName} onChange={(event) => {
							setSchool(event.target.value);
							console.log(event.target.value)
						}}>
						{schoolOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.text}
							</option>
						))}
					</select>
				</label>
				<br />
				<br />
				<label>
					<input
						type="checkbox"
						id="isTrainer"
						name="isTrainer"
						onChange={(e) => {setIsTrainer(e.target.checked)}}
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
