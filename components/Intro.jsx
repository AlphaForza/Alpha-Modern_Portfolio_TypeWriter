import React from 'react';
import Typewriter from 'typewriter-effect';
import { BsArrowRight } from 'react-icons/bs';
import Experience from './Experience';
import Skills from './Skills';
const Intro = () => {
	return (
		<div className='h-full w-full bg-gradient-to-t from-[#2fbcbc27] to-[#2f44bc35] pb-2'>
			<div className='flex flex-col items-center pt-20'>
				<div className='text-[#868490] text-2xl md:text-5xl font-semibold text-center'>
					<Typewriter
						options={{
							strings: [
								'Front End Developer',
								'Junior of Back End Developer',
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				<h1 className='text-white text-4xl lg:text-7xl font-semibold text-center'>
					Tihomir Milenkovic
				</h1>
				<div className='h-1 w-[200px] bg-[#F8E7A1] mt-3' />

				<p className='text-[#868490] text-center w-[90%] lg:w-[50%] mt-5 mb-5 text-[16px] md:text-[20px]'>
					Eget malesuada tortor ut sed. Tincidunt viverra malesuada
					nisl vehicula vestibulum. Ut blandit fermentum, cursus
					nulla. Imperdiet neque mi convallis quis interdum sagittis.
				</p>
				<div className='flex items-center text-[#f8e7a1] text-[20px] my-3'>
					<button
						type='button'
						className='text-[#f8e7a1] text-[20px] mr-2'>
						Let&apos;s talk
					</button>
					<BsArrowRight />
				</div>
			</div>

			<Experience />
			<Skills />

			{/* test div */}
			<div className='my-20'></div>
		</div>
	);
};

export default Intro;
