import home from '../assets/features/home.svg';
import certificate from '../assets/features/certificate.svg';
import FeatureCard from './FeatureCard';
import FeatureLogo from './FeatureLogo';
import { featureData } from '../mockup/mockup';
const FeatureSection = () => {
	return (
		<div className='w-full py-16 max-w-[1700px] mx-auto px-8 bgWhyLand'>
			<h2 className='my-6 text-4xl font-medium text-black ms:my-10 '>
				Why LAND Interiors
			</h2>
			<div className='text-sm   py-12  ms:pb-12  flex gap-10 flex-col md:flex-row justify-between md:max-w-[800px] ms:max-w-[1024px]  text-center mx-auto'>
				<FeatureLogo img={home} alt='home' desc={'1500+happy customers'} />
				<FeatureLogo
					img={certificate}
					alt='certificate'
					desc={'50 days or we pay you rent'}
				/>
				<FeatureLogo
					img={certificate}
					alt='certificate'
					desc={'300+ design experties'}
				/>
			</div>{' '}
			<h2
				id='About'
				className='  md:pt-[4rem]  text-4xl   ms:text-center mx-auto pt-10 font-medium'>
				What we do?
			</h2>
			<div className='mx-auto mt-6 ms:mt-10 xl:mt-15'>
				<div className='grid grid-cols-1 gap-10 mx-auto font-semibold md:grid-cols-2 xl:grid-cols-4 ms:gap-x-24 '>
					{featureData.map(({ title, img }) => (
						<FeatureCard title={title} img={img} key={title} />
					))}
				</div>
			</div>
			<div className='hidden xl:block xl:text-lg xl:px-0 xl:pt-[24px]  xl:pb-4  mx-auto max-w-[1000px]  text-center'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
				purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
				rhoncus dolor purus non enim praesent elementum facilisis leo, vel
				fringilla est ullamcorper eget nulla
			</div>
		</div>
	);
};

export default FeatureSection;
