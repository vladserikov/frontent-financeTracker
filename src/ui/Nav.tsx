import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type Element = {
	linkProps: LinkProps;
	text: string;
};

type NavElement = {
	elements: Element[];
};

const Nav: React.FC<NavElement> = ({ elements }) => {
	return (
		<div className='navigate'>
			{elements.map((element) => (
				<Link {...element.linkProps}>{element.text}</Link>
			))}
		</div>
	);
};

export default Nav;

