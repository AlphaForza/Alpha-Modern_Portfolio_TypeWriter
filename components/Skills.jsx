import Image from 'next/image';
import html from '../public/assets/html.png';
import css from '../public/assets/css.png';
import javascript from '../public/assets/javascript.png';
import reactjs from '../public/assets/reactjs.png';
import nodejs from '../public/assets/nodejs.png';
import mongodb from '../public/assets/mongodb.png';

import { motion } from 'framer-motion';

const Skills = () => {
	return (
		<div className=' bg-[#091427a1] w-full h-full md:h-[200px] flex items-center mt-10 '>
			<div className='container mx-auto py-5 lg:py-20 md:py-0 flex flex-col md:flex-row items-center justify-between'>
				<motion.div
					whileHover={{
						scale: 1.2,
						transition: { duration: 1 },
					}}
					whileTap={{ scale: 0.9 }}>
					<Image src={html} width='100px' height='100px' />
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.2,
						transition: { duration: 1 },
					}}
					whileTap={{ scale: 0.9 }}>
					<Image src={css} width='100px' height='100px' />
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.2,
						transition: { duration: 1 },
					}}
					whileTap={{ scale: 0.9 }}>
					<Image src={javascript} width='100px' height='90px' />
				</motion.div>

				<motion.div
					whileHover={{
						scale: 1.2,
						transition: { duration: 1 },
					}}
					whileTap={{ scale: 0.9 }}>
					<Image src={reactjs} width='100px' height='100px' />
				</motion.div>

				<motion.div
					whileHover={{
						scale: 1.2,
						transition: { duration: 1 },
					}}
					whileTap={{ scale: 0.9 }}>
					<Image src={nodejs} width='180px' height='100px' />
				</motion.div>

				<motion.div
					whileHover={{
						scale: 1.2,
						transition: { duration: 1 },
					}}
					whileTap={{ scale: 0.9 }}>
					<Image src={mongodb} width='200px' height='100px' />
				</motion.div>
			</div>
		</div>
	);
};

export default Skills;
