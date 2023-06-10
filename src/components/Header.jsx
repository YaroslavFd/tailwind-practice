import React from 'react';

export const Header = () => {
	return (
		<header className='relative py-[30px]'>
			<div className='container flex justify-between items-center after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[#DDDDDD]'>
				<a href='/#'>
					<img src='/img/logo.svg' alt='logo' />
				</a>
				<nav className='flex gap-[60px]'>
					<ul className='flex gap-[60px] text-[#4C5866] text-xl leading-6'>
						<li className='hover:underline'>
							<a href=' #'>Продукция</a>
						</li>
						<li className='hover:underline'>
							<a href=' #'>Материалы</a>
						</li>
						<li className='hover:underline'>
							<a href=' #'>О нас</a>
						</li>
						<li className='hover:underline'>
							<a href=' #'>Контакты</a>
						</li>
					</ul>
					<div className='flex gap-[30px]'>
						<button className='hover:opacity-70 transition-opacity'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clipPath='url(#clip0_1_496)'>
									<path
										d='M13 19C8.58175 19 5.00003 15.4183 5.00003 11C5.00003 6.58172 8.58175 3 13 3C17.4183 3 21 6.58172 21 11C21 15.4183 17.4183 19 13 19Z'
										stroke='#4C5866'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M2.99998 20.9999L7.34998 16.6499'
										stroke='#4C5866'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</g>
								<defs>
									<clipPath id='clip0_1_496'>
										<rect
											width='24'
											height='24'
											fill='white'
											transform='matrix(-1 0 0 1 24 0)'
										/>
									</clipPath>
								</defs>
							</svg>
						</button>
						<button className='hover:opacity-70 transition-opacity'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clipPath='url(#clip0_1_497)'>
									<path
										d='M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15'
										stroke='#4C5866'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M10 17L15 12L10 7'
										stroke='#4C5866'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M15 12H3'
										stroke='#4C5866'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</g>
								<defs>
									<clipPath id='clip0_1_497'>
										<rect width='24' height='24' fill='white' />
									</clipPath>
								</defs>
							</svg>
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};
