import React from 'react';
import { SubmitButton } from './Button.styled';

export default function Button({ label }: { label: string }) {
	return <SubmitButton>{label}</SubmitButton>;
}
