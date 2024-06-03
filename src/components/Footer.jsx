import logo from '../assets/logos/brandlogo.svg';
import facebook from '../assets/logos/facebook.svg';
import linkedin from '../assets/logos/linkedin.svg';
import twitter from '../assets/logos/twitter.svg';
import youtube from '../assets/logos/youtube.svg';
import instagram from '../assets/logos/instagram.svg';
import CustomNavLink from './CustomNavLink';
const socialMedia = [
	{
		platform: 'twitter',
		logo: twitter,
		url: 'http://www.x.com/',
	},
	{
		platform: 'facebook',
		logo: facebook,
		url: 'http://www.facebook.com/',
	},
	{
		platform: 'youtube',
		logo: youtube,
		url: 'http://www.youtube.com/',
	},
	{
		platform: 'instagram',
		logo: instagram,
		url: 'http://www.instagram.com/',
	},
	{
		platform: 'linkedin',
		logo: linkedin,
		url: 'http://www.linkedin.com/',
	},
];
const Footer = () => {
	return (
		<div className='bg-gray'>
			<div className='flex flex-col items-center gap-6 py-8 mx-auto ms:gap-8 md:py-12 xl:text-base max-w-[1920px] px-6 '>
				<div className='flex flex-row flex-wrap items-center gap-8 mx-auto space-x-48'>
					<div className='ms:max-w-[450px] xl:max-w-[635px]   mx-auto  '>
						<img src={logo} alt='logo' className='mb-6 w-28 h-28 ' />
						<p className='hidden ml-8 ms:block text-darkGray'>
							We introduce our selves as LAND Interior and Architectural Design
							Consultancy – one of the best interior designers in Chennai.
							Chennai Luxury Interior and Architectural Design Consultancy has
							challenged the conventional way of interior designing and given
							new dimensions to the art of interior designing.
						</p>
					</div>
					<ul className='hidden mx-auto text-center ml:inline text-darkGray'>
						<li className='text-[16px] font-semibold '>
							WHAT WE DO
						</li>
						<li>Interior Design</li>
						<li>Kitchen</li>
						<li>Ceiling</li>
						<li>Bedroom</li>
						<li>Smart Home</li>
					</ul>
					<ul className='hidden mx-auto text-center ml:inline text-darkGray'>
						<li className='hidden m-0 text-base font-semibold xl:inline-block '>
							Get in touch
						</li>
						<li>
							<a href='mailto:landinteriors@gmail.com'>
								landinterrs@gmail.com
							</a>
						</li>
						<li>
							<a>+92 304 7916775</a>
						</li>
					</ul>
				</div>
				<div className='flex flex-row flex-wrap items-center justify-center space-x-8'>
					<div className='flex flex-row gap-3'>
						{socialMedia.map(({ platform, url, logo }) => {
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
						})}
					</div>
					<div className='hidden ml:inline'>
						<CustomNavLink />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
