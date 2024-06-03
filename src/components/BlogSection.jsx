import BlogCard from './BlogCard';
import { blogData } from '../mockup/mockup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1090 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1090, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
function BlogSection() {
	return (
		<section className='w-full py-16 max-w-[1700px] mx-auto px-8'>
			<h2 className='my-6 text-4xl font-medium text-black ms:my-10'>Blogs</h2>
			<div className='overflow-x-auto'>
				<Carousel
					responsive={responsive}
					infinite={true}
					partialVisible={true}
					containerClass='carousel-container'
					itemClass='carousel-item-fixed-width'>
					{blogData.map(({ title, image, desc }) => (
						<BlogCard title={title} img={image} desc={desc} key={title} />
					))}
				</Carousel>
			</div>
			
		</section>
	);
}

export default BlogSection;
