import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/assets/logo.svg';

// icon
import { BiMenuAltRight, BiWindowClose } from 'react-icons/bi';
const Navbar = () => {
	const [menuToggle, setMenuToggle] = React.useState(true);
	return (
		<div className='container mx-auto flex justify-between items-center h-20'>
			<Image src={logo} height='50' width='200' alt="logo" />
			{/* menu bar */}
			<nav className='text-[#ffffffb4]  items-center hidden md:flex'>
				<Link href='#'>
					<a className='mr-[40px] text-[18px]'>Skill</a>
				</Link>
				<Link href='#'>
					<a className='mr-[40px] text-[18px]'>Portfolio</a>
				</Link>
				<Link href='#'>
					<a className='mr-[40px] text-[18px]'>Contact</a>
				</Link>
				<Link href='#' className='text-[18px]'>
					<a>About</a>
				</Link>
			</nav>

			{menuToggle ? (
				<BiMenuAltRight
					onClick={() => setMenuToggle(!menuToggle)}
					className='text-white text-5xl md:hidden '
				/>
			) : (
				<div className='z-50 absolute w-full h-full right-0 bottom-0 flex flex-col bg-[#08124A] text-white '>
					<BiWindowClose
						onClick={() => setMenuToggle(!menuToggle)}
						className='text-white text-5xl md:hidden z-50 absolute right-3 top-3'
					/>

					<nav className='mt-20 h-[300px] text-[#fff] flex flex-col justify-between items-center'>
						<Link href='#'>
							<a className='text-[18px]'>Services</a>
						</Link>
						<Link href='#'>
							<a className=' text-[18px]'>Portfolio</a>
						</Link>
						<Link href='#'>
							<a className=' text-[18px]'>Contact</a>
						</Link>
						<Link href='#' className='text-[18px]'>
							<a>About</a>
						</Link>
					</nav>
				</div>
			)}
		</div>
	);
};

export default Navbar;
