function SocialMediaLink({ platform, url, logo }) {
	return (
		<a
			key={platform}
			href={url}
			target={'_blank'}
			rel='noreferrer '
			className='p-2 bg-[#E5E5E5]  rounded-md'>
			<img src={logo} alt={platform} className='w-6 h-6' />
		</a>
	);
}

export default SocialMediaLink;
