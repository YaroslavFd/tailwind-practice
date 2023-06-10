import React from 'react';

export const Footer = () => {
	return (
		<footer className='bg-[#4C5866]'>
			<div className='container flex justify-between py-7'>
				<a href='/#'>
					<img src='/img/logo-white.svg' alt='logo' />
				</a>
				<ul className='flex gap-[30px] items-center'>
					<li className='hover:opacity-75 transition-opacity'>
						<a href='/#'>
							<img src='/img/icons/facebook.svg' alt='facebook' />
						</a>
					</li>
					<li className='hover:opacity-75 transition-opacity'>
						<a href='/#'>
							<img src='/img/icons/twitter.svg' alt='twitter' />
						</a>
					</li>
					<li className='hover:opacity-75 transition-opacity'>
						<a href='/#'>
							<img src='/img/icons/instagram.svg' alt='instagram' />
						</a>
					</li>
					<li className='hover:opacity-75 transition-opacity'>
						<a href='/#'>
							<img src='/img/icons/youtube.svg' alt='youtube' />
						</a>
					</li>
				</ul>
			</div>
			<div className='bg-[#ebebeb] text-center text-[#4C5866] uppercase text-[13px] leading-[15px] py-1'>
				Simple ® 2021
			</div>
		</footer>
	);
};
