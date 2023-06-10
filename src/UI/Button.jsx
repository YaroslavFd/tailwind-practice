import React from 'react';

export const Button = ({ children }) => {
	return (
		<button className='text-accent border border-accent w-[255px] p-5 hover:text-white hover:bg-accent transition-colors active:bg-[#4946B4]'>
			{children}
		</button>
	);
};
