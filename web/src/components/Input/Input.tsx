import React from 'react';
import { InputStyled } from './Input.styled';

export default function Input({
	placeholder,
	inputType,
	value,
	onChange
}: {
	placeholder: string;
	inputType: string;
	value: string;
	onChange: any;
}): JSX.Element {
	return (
		<InputStyled
			placeholder={placeholder}
			inputType={inputType}
			name={value}
			value={value}
			onChange={onChange}
			required
		/>
	);
}
