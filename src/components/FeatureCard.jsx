function FeatureCard({ img, title }) {
	return (
		<div className='flex flex-col items-center'>
			<img
				src={img}
				className='block   w-[286px] h-[340px] ms:w-[343px] ms:h-[407px] xl:w-[286px] xl:h-[340px]'
				alt={title}
			/>
			<span className='block pt-8 text-2xl text-center text-brand'>
				{title}
			</span>
		</div>
	);
}

export default FeatureCard;
