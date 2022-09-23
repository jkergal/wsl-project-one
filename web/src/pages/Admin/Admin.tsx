import { AddSchoolArea, AdminContainer, CreateWilderArea } from './Admin.styled';
import React from 'react';
import CreateWilder from 'pages/CreateWilder/CreateWilder';
import AddSchool from 'components/AddScool/AddSchool';
import AddSkill from 'components/AddSkill/AddSkill';

const Admin = () => {
	return (
		<AdminContainer>
			<CreateWilderArea>
				<CreateWilder />
			</CreateWilderArea>

			<AddSchoolArea>
				<AddSkill />
			</AddSchoolArea>

			<AddSchoolArea>
				<AddSchool />
			</AddSchoolArea>
		</AdminContainer>
	);
};

export default Admin;
