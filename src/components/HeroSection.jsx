import heroImg from '../assets/hero.png';
function HeroSection() {
	return (
		<div className='relative mx-auto py-14'>
			<img
				src={heroImg}
				alt='heroImg'
				className='object-cover w-full max-w-[1090px]'
			/>
			<div className='hidden ms:block absolute w-full bottom-0 ms:top-[20%] ms:right-[0%] '>
				<div className='w-full mx-auto ms:mr-0 ms:mx-auto m text-center  px-[190px] py-[70px] max-w-[950px] bg-[#ffffffb3]  '>
					<div className='flex flex-col space-y-8 '>
						<h2 className='text-4xl '>Get personalised home interiors</h2>
						<p className='text-5xl font-semibold text-brand'>in just 50 days</p>
						<span className='px-12 py-5 text-2xl font-semibold text-white bg-brand'>
							SPEAK WITH A ONLINE CONSULTANT
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
