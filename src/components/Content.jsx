import React from 'react';

import { Hero } from './Hero';
import { Info } from './Info';
import { Catalog } from './Catalog';
import { Companies } from './Companies';
import { AboutProduct } from './AboutProduct';

export const Content = () => {
	return (
		<>
			<Hero />
			<Info />
			<Catalog />
			<Companies />
			<AboutProduct />
		</>
	);
};
