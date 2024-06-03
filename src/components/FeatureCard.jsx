function FeatureCard({ img, title }) {
	return (
		<div className='flex flex-col items-center'>
			<img
				src={img}
				className='block bg-gray-200 w-72 h-84 sm:w-80 sm:h-96 xl:w-72 xl:h-84'
				alt={title}
			/>
			<span className='block pt-8 text-2xl text-center text-brand'>
				{title}
			</span>
		</div>
	);
}

export default FeatureCard;
