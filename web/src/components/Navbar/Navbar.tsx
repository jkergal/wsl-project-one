import { ADMIN_PATH, HOME_PATH } from 'paths';
import React from 'react';
import { ReactRouterLink } from 'styles/base-styles';
import { Nav, NavbarContainer } from './Navbar.styled';

export default function Navbar() {
	return (
		<NavbarContainer>
			<Nav>
				<ReactRouterLink to={HOME_PATH}>Home</ReactRouterLink>
			</Nav>
			<Nav>
				<ReactRouterLink to={ADMIN_PATH}>Admin</ReactRouterLink>
			</Nav>
		</NavbarContainer>
	);
}
