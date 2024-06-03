import React from 'react';

function FeatureLogo({ img, alt, desc }) {
	return (
		<div className='w-[100px] md:w-[150px]  ms:w-[150px] mx-auto'>
			<img
				src={img}
				alt='alt'
				className='mx-auto h-[50px] md:h-[65px] ms:h-[73px]'
			/>
			<span className='pt-3 ms:pt-[26px] inline-block'>{desc}</span>
		</div>
	);
}

export default FeatureLogo;
