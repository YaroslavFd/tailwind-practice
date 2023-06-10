import React from 'react';

import { Button } from '../UI/Button';

export const AboutProduct = () => {
	return (
		<section className='pt-[90px]'>
			<div className='container flex justify-between'>
				<div className='max-w-[320px]'>
					<h3 className='title mb-2'>Simple скетчбук</h3>
					<p className='leading-[31px] mb-7'>
						80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет и для
						графики и для акварели. Для самых смелых творческих замыслов!
					</p>
					<Button>Купить</Button>
				</div>
				<img src='/img/about-product.png' alt='img' />
			</div>
		</section>
	);
};
