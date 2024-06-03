import { navigationLinks } from '../mockup/mockup';
function CustomNavLink() {
	return (
		<nav>
			<ul className='items-center justify-center hidden space-x-16 text-xl text-black ms:flex '>
				{navigationLinks.map(({ link, href }) => (
					<a className='font-medium' href={href}>
						{link}
					</a>
				))}
			</ul>
		</nav>
	);
}
export default CustomNavLink;
