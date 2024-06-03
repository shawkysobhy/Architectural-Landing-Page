import logo from '../assets/logos/brandlogo.svg';
import { CustomNavLink, CustomBurgerButton } from './';
function Header() {
	return (
		<header className='px-8 py-8 ms:py-10 ms:px-10 ms:pr-24 bg-gray '>
			<div className='container mx-auto max-w-[1920px]'>
				<div className='flex items-center justify-between mb-4 '>
					<img src={logo} className='w-16 h-16 ms:w-24 ms:h-24' />
					<div className='items-center justify-end flex-grow hidden space-x-20 ms:flex'>
						<a className='text-xl font-medium text-brand'>
							Join as Design Expert
						</a>
						<a className='text-xl font-medium text-brand'>
							Partner with LAND Interiors
						</a>
					</div>
					<div className='cursor-pointer ms:hidden '>
						<CustomBurgerButton />
					</div>
				</div>
				<CustomNavLink />
			</div>
		</header>
	);
}

export default Header;
