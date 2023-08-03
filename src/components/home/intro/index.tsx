import { useContext } from "react";
import styles from "./Intro.module.css";
import home1 from "../../../assets/home1.png";
import home2 from "../../../assets/home2.png";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";

const Intro: React.FC = () => {
	const context = useContext(Context);
  const { auth } = context;
	return (
		<main className={`${styles.landing} relative top-10 lg:top-0`}>
			<div className='container min-h-screen  mx-auto flex flex-col-reverse justify-center gap-7 lg:pt-48 lg:pb-6'>
				<div className='container mx-auto mt-5 flex flex-col w-3/4 lg:w-1/2 '>
					<img src={home1} alt='image' />
					<img src={home2} alt='image' />
				</div>
				<div className='flex flex-col items-center gap-5 lg:gap-11'>
					<h1 className='max-w-md text-3xl leading-normal font-bold text-center lg:text-5xl lg:max-w-5xl lg:leading-normal'>
						Optimize Your Online Experience with Our Advanced{" "}
						<span className={`${styles.strokeWrapper} text-blue-500`}>
							URL Shortening
						</span>{" "}
						Solution
					</h1>
					<p className='container w-11/12 text-center  font-semibold  lg:text-lg lg:w-1/2'>
						Personalize your shortened URLs to align with your brand identity. Utilize
						custom slugs, branded links, and domain customization options to reinforce
						your brand presence and enhance user engagement.
					</p>
					<div className='flex items-center gap-6'>
						{!auth && <Link
							to='/signup'
							className='bg-blue-700 text-white p-4 px-10 rounded-full hover:bg-blue-500'
						>
							Sign Up
						</Link>}
						<a
							href=''
							className='text-blue-500 font-semibold hover:text-blue-700'
						>
							Learn more
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Intro;
