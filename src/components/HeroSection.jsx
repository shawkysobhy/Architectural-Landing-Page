import heroImg from '../assets/hero.png';
function HeroSection() {
	return (
		<div className='relative mx-auto md:py-14'>
			<img
				src={heroImg}
				alt='heroImg'
				className='object-cover w-full max-w-[1090px]'
			/>
			<div className=' block md:absolute w-full bottom-0 ms:top-[20%] ms:right-[0%] '>
				<div className='w-full mx-auto ms:mr-0 ms:mx-auto m text-center px-8 py-12  md:px-[190px] md:py-[70px] max-w-[950px] bg-[#ffffffb3]  '>
					<div className='flex flex-col space-y-8 '>
						<h2 className='text-2xl md:text-3xl ms:text-4xl '>
							Get personalised home interiors
						</h2>
						<p className='text-lg font-semibold md:text-2xl ms:text-5xl text-brand'>
							in just 50 days
						</p>
						<span className='px-3 py-4 font-semibold text-white ms:px-12 text-md ms:py-5 ms:text-2xl bg-brand'>
							SPEAK WITH A ONLINE CONSULTANT
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
