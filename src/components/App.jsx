import React from 'react';

import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

export const App = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='grow'>
				<Content />
			</main>
			<Footer />
		</div>
	);
};
