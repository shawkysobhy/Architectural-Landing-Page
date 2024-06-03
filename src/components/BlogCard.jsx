function BlogCard({ img, title, desc }) {
	return (
		<div className='flex flex-col min-w-[330px]  space-y-4 ms:items-left'>
			<img src={img} className='block w-[329px] h-[333px]' alt={title} />
			<span className='text-2xl font-medium text-black'>{title}</span>
			<span className='block w-4/5 text-lg text-black'>{desc}</span>
		</div>
	);
}

export default BlogCard;
