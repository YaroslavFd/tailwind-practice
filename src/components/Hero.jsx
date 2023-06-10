import React from 'react';

import { Button } from '../UI/Button';

export const Hero = () => {
	return (
		<section className='mt-[60px]'>
			<div className='container flex justify-between items-center'>
				<div className='max-w-[440px]'>
					<h1 className='text-6xl text-[#4C5866] mb-8'>
						Простые вещи. Из бумаги
					</h1>
					<p className='mb-8'>
						Бума́га (предположительно от итал. bombagia, первоисточником же
						считается иранский) — волокнистый материал с минеральными добавками.{' '}
					</p>
					<Button>Каталог</Button>
				</div>
				<img src='/img/main-bg.png' alt='img' />
			</div>
		</section>
	);
};
