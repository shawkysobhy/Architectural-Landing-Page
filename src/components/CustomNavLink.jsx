import React from 'react';

function CustomNavLink() {
	return (
		<nav>
			<ul className='items-center justify-center hidden space-x-20 text-xl text-black ms:flex '>
				<li>
					<a href='#contact'>About</a>
				</li>
				<li>
					<a href='#contact'>Projects</a>
				</li>
				<li>
					<a href='#contact'>Studio</a>
				</li>
				<li>
					<a href='#features'>Blog</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</nav>
	);
}

export default CustomNavLink;
