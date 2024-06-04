import { navigationLinks } from '../mockup/mockup';
function CustomNavLink() {
	return (
		<nav>
			<ul className='items-center justify-center hidden space-x-16 text-xl text-black ms:flex '>
				{navigationLinks.map(({ href, label }) => (
					<a className='font-medium' href={href} key={href}>
						{label}
					</a>
				))}
			</ul>
		</nav>
	);
}
export default CustomNavLink;
