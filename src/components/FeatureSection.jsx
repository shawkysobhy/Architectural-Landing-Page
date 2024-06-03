import { FeatureLogo, FeatureCard } from './';
import { featureData, features, loreamText } from '../mockup/mockup';
const FeatureSection = () => {
	return (
		<div className='w-full py-16 max-w-[1700px] mx-auto px-8 bgWhyLand'>
			<h2 className='my-6 text-4xl font-medium text-black'>
				Why LAND Interiors
			</h2>
			<div className='py-12 flex gap-10 flex-col md:flex-row justify-between max-w-[1024px] text-center mx-auto'>
				{features.map(({ desc, title, logo }) => (
					<FeatureLogo desc={desc} alt={title} img={logo} key={title} />
				))}
			</div>
			<h2 id='About' className='pt-10 mx-auto text-4xl font-medium text-center'>
				What we do?
			</h2>
			<div className='mx-auto mt-6'>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4'>
					{featureData.map(({ title, img }) => (
						<FeatureCard title={title} img={img} key={title} />
					))}
				</div>
			</div>
			<div className='hidden xl:block xl:text-lg  xl:pt-6 xl:pb-4 mx-auto max-w-[1000px] text-center'>
				{loreamText}
			</div>
		</div>
	);
};

export default FeatureSection;
