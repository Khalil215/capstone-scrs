import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-black.svg";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import facebook from "../../assets/icons/faceboo.png";
import footer1 from "../../assets/footer1.png";
import footer2 from "../../assets/footer2.png";

const Footer: React.FC = () => {
	return (
		<footer className={`${styles.footer}`}>
			<div className='content pt-24 pb-4'>
				<div className='content flex flex-col-reverse gap-14 justify-between items-start  lg:flex-row lg:gap-0'>
					<div className={`${styles.left} flex flex-col-reverse gap-4 lg:flex-col`}>
						<div>
							<img src={logo} alt='logo' />
						</div>
						<div className='flex items-center gap-6'>
							<a href=''>
								<img src={twitter} alt='twitter' />
							</a>
							<a href=''>
								<img src={instagram} alt='instagram' />
							</a>
							<a href=''>
								<img src={linkedin} alt='linkedin' />
							</a>
							<a href=''>
								<img src={facebook} alt='facebook' />
							</a>
						</div>
					</div>
					<div className={`${styles.right}`}>
						<div>
							<p className='font-bold mb-2'>Why Scissor ?</p>
							<Link to='' className='hover:text-blue-500'>
								Scissor 101
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Integrations & API
							</Link>
							<a href='#pricing' className='  hover:text-blue-500'>
								Pricing
							</a>
						</div>

						<div>
							<p className='font-bold mb-2'>Solutions</p>
							<Link to='' className='hover:text-blue-500'>
								Social Media
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Digital Marketing
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Customer Service
							</Link>
							<Link to='' className='hover:text-blue-500'>
								For Developers
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Products</p>
							<Link to='' className='hover:text-blue-500'>
								Link Management
							</Link>
							<Link to='' className='hover:text-blue-500'>
								QR Codes
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Link-in-bio
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Company</p>
							<Link to='' className='hover:text-blue-500'>
								About Scissor
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Careers
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Partners
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Press
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Contact
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Reviews
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Resources</p>
							<Link to='' className='hover:text-blue-500'>
								Blog
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Resource Library
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Developers
							</Link>
							<Link to='' className='hover:text-blue-500'>
								App Connectors
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Support
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Trust Center
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Browser Extension
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Mobile App
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Features</p>
							<Link to='' className='hover:text-blue-500'>
								Branded Links
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Mobile Links
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Campaign
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Management & Analytics
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Support
							</Link>
							<Link to='' className='hover:text-blue-500'>
								QR Code generation
							</Link>
						</div>

						<div>
							<p className='font-bold mb-2'>Legal</p>
							<Link to='' className='hover:text-blue-500'>
								Privacy Policy
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Cookie Policy
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Terms of Service
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Acceptable Use Policy
							</Link>
							<Link to='' className='hover:text-blue-500'>
								Code of Conduct
							</Link>
						</div>
					</div>
				</div>
				<p className='flex justify-between  mt-4 lg:mt-0 lg:justify-end'>
					<a
						href=''
						className='hidden px-4 border-r-2 border-neutral hover:text-blue-500 lg:px-4 lg:block'
					>
						Term of Service
					</a>
					<a
						href=''
						className='hidden px-4 border-r-2 border-neutral hover:text-blue-500 lg:px-4 lg:block'
					>
						Security
					</a>

					<span className='mx-auto lg:px-4 lg:mx-0'>
						&copy; Scissor 2023
					</span>
				</p>
			</div>
			<img src={footer1} className="absolute bottom-0 left-0"/>
			<img src={footer2} className="absolute bottom-0 right-0"/>
		</footer>
	);
};

export default Footer;
