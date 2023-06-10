import React from 'react';

export const Catalog = () => {
	return (
		<section className='py-[90px]'>
			<div className='container'>
				<ul className='flex gap-[30px]'>
					<li className='max-w-[255px]'>
						<img
							className='max-w-full mb-5'
							src='/img/catalog-1.jpg'
							alt='img'
						/>
						<div>
							<h3 className='text-3xl text-[#666666] mb-2'>Упаковка</h3>
							<span className='text-sm text-[#B5B5BD] block mb-2'>
								Тираж: от 50 штук
							</span>
							<p className='leading-[30px] mb-5'>
								Сделано из крафт-бумаги или плотного картона. Упаковки имеют
								различные формы и расцветки, изготовим форму под заказ.
							</p>
							<a
								className='text-xl text-accent inline-flex items-center gap-[6px] hover:gap-[10px] transition-all'
								href='#'
							>
								Подробнее
								<svg
									width='21'
									height='15'
									viewBox='0 0 21 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z'
										fill='#7875FE'
									/>
								</svg>
							</a>
						</div>
					</li>
					<li className='max-w-[255px]'>
						<img
							className='max-w-full mb-5'
							src='/img/catalog-2.jpg'
							alt='img'
						/>
						<div>
							<h3 className='text-3xl text-[#666666] mb-2'>Пакеты</h3>
							<span className='text-sm text-[#B5B5BD] block mb-2'>
								Тираж: от 200 штук
							</span>
							<p className='leading-[30px] mb-5'>
								С прямоугольным дном. От 10 см до 60 см по высоте. Материалы:
								картон, крафт-бумага. Различные расцветки и дизайн.
							</p>
							<a
								className='text-xl text-accent inline-flex items-center gap-[6px] hover:gap-[10px] transition-all'
								href='#'
							>
								Подробнее
								<svg
									width='21'
									height='15'
									viewBox='0 0 21 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z'
										fill='#7875FE'
									/>
								</svg>
							</a>
						</div>
					</li>
					<li className='max-w-[255px]'>
						<img
							className='max-w-full mb-5'
							src='/img/catalog-3.jpg'
							alt='img'
						/>
						<div>
							<h3 className='text-3xl text-[#666666] mb-2'>Кейсы</h3>
							<span className='text-sm text-[#B5B5BD] block mb-2'>
								Тираж: от 30 штук
							</span>
							<p className='leading-[30px] mb-5'>
								Подойдет для документов и других бумаг. Различные расцветки,
								размеры и плотность. Материал: прессованная бумага.
							</p>
							<a
								className='text-xl text-accent inline-flex items-center gap-[6px] hover:gap-[10px] transition-all'
								href='#'
							>
								Подробнее
								<svg
									width='21'
									height='15'
									viewBox='0 0 21 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z'
										fill='#7875FE'
									/>
								</svg>
							</a>
						</div>
					</li>
					<li className='max-w-[255px]'>
						<img
							className='max-w-full mb-5'
							src='/img/catalog-4.jpg'
							alt='img'
						/>
						<div>
							<h3 className='text-3xl text-[#666666] mb-2'>Другие изделия </h3>
							<span className='text-sm text-[#B5B5BD] block mb-2'>
								Тираж: от 100 штук
							</span>
							<p className='leading-[30px] mb-5'>
								Нестандартные упаковки, кейсы и другие изделия различных
								размеров и конфигураций. Изготовим в кратчайшие сроки.
							</p>
							<a
								className='text-xl text-accent inline-flex items-center gap-[6px] hover:gap-[10px] transition-all'
								href='#'
							>
								Подробнее
								<svg
									width='21'
									height='15'
									viewBox='0 0 21 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z'
										fill='#7875FE'
									/>
								</svg>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};
