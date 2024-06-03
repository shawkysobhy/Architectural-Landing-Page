import logo from '../assets/logos/brandlogo.svg';
import { socialMedia } from '../mockup/mockup';
import { SocialMediaLink, CustomNavLink } from './';
const Footer = () => {
	return (
		<div className='bg-gray'>
			<div className='flex flex-col items-center gap-6 py-8 mx-auto ms:gap-8 md:py-12 xl:text-base max-w-[1920px] px-6 '>
				<div className='flex flex-row flex-wrap items-center gap-8 mx-auto space-x-48'>
					<div className='ms:max-w-[440px] xl:max-w-[630px]   mx-auto  '>
						<img src={logo} alt='logo' className='mb-6 w-28 h-28 ' />
						<p className='hidden ml-8 ms:block text-darkGray'>
							We introduce our selves as LAND Interior and Architectural Design
							Consultancy – one of the best interior designers in Chennai.
							Chennai Luxury Interior and Architectural Design Consultancy has
							challenged the conventional way of interior designing and given
							new dimensions to the art of interior designing.
						</p>
					</div>
					<ul className='footer-column'>
						<li className='text-[16px] font-semibold '>WHAT WE DO</li>
						<li>Interior Design</li>
						<li>Kitchen</li>
						<li>Ceiling</li>
						<li>Bedroom</li>
						<li>Smart Home</li>
					</ul>
					<ul className='footer-column'>
						<li className='hidden m-0 text-base font-semibold xl:inline-block '>
							Get in touch
						</li>
						<li>
							<a>landinterrs@gmail.com</a>
						</li>
						<li>
							<a>+92 304 7916775</a>
						</li>
					</ul>
				</div>
				<div className='flex flex-row flex-wrap items-center justify-center space-x-8'>
					<div className='flex flex-row gap-3'>
						{socialMedia.map(({ platform, url, logo }) => (
							<SocialMediaLink
								logo={logo}
								url={url}
								platform={platform}
								key={url}
							/>
						))}
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
