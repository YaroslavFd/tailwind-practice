import React from 'react';

export const Companies = () => {
	return (
		<section className='py-[90px] bg-[#ebebeb]'>
			<div className='container flex gap-[30px]'>
				<a
					href='/#'
					className='border-[1px] border-[#C4C4C4] p-11 max-w-[255px] flex items-center hover:scale-105 transition-transform'
				>
					<img src='/img/company-1.png' alt='company' />
				</a>
				<a
					href='/#'
					className='border-[1px] border-[#C4C4C4] p-11 max-w-[255px] flex items-center hover:scale-105 transition-transform'
				>
					<img src='/img/company-2.png' alt='company' />
				</a>
				<a
					href='/#'
					className='border-[1px] border-[#C4C4C4] p-11 max-w-[255px] flex items-center hover:scale-105 transition-transform'
				>
					<img src='/img/company-3.png' alt='company' />
				</a>
				<a
					href='/#'
					className='border-[1px] border-[#C4C4C4] p-11 max-w-[255px] flex items-center hover:scale-105 transition-transform'
				>
					<img src='/img/company-4.png' alt='company' />
				</a>
			</div>
		</section>
	);
};
