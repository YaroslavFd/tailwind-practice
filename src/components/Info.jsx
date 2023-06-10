import React from 'react';

export const Info = () => {
	return (
		<section className='bg-[#ebebeb] py-[90px]'>
			<div className='container'>
				<ul className='flex justify-between gap-[30px]'>
					<li className='flex gap-[30px] items-center pt-5 border-t-[1px] border-[#C0C0C0]'>
						<img src='/img/info-sm1.png' alt='img' />
						<div>
							<span className='block text-[#666666] font-medium mb-1'>V.1</span>
							<p>Результат вашего обучения</p>
						</div>
					</li>
					<li className='flex gap-[30px] items-center pt-5 border-t-[1px] border-[#C0C0C0]'>
						<img src='/img/info-sm2.png' alt='img' />
						<div>
							<span className='block text-[#666666] font-medium mb-1'>V.2</span>
							<p>Результат вашего обучения</p>
						</div>
					</li>
					<li className='flex gap-[30px] items-center pt-5 border-t-[1px] border-[#C0C0C0]'>
						<img src='/img/info-sm3.png' alt='img' />
						<div>
							<span className='block text-[#666666] font-medium mb-1'>V.3</span>
							<p>Результат вашего обучения</p>
						</div>
					</li>
				</ul>
				<div className='flex justify-between gap-[30px] mt-[90px]'>
					<img src='/img/info-big.png' alt='img' />
					<div>
						<h2 className='title mb-5'>Максимальная белизна</h2>
						<p className='leading-[31px] mb-3'>
							Для повышения белизны, гладкости и мягкости в состав бумажной
							массы вводят белые минеральные вещества: мел, тальк, каолин и др.
							Эта операция называется наполнением.
						</p>
						<p className='leading-[31px]'>
							Отлив бумажного листа осуществляют на бумагоделательной машине,
							важнейшей частью которой является непрерывно движущаяся (как
							транспортер) металлическая или капроновая сетка.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
