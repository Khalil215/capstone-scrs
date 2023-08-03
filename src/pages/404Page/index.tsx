import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Helmet } from "react-helmet";

const NotFound: FC = () => {
	return (
		<Fragment>
			<Helmet>
				<title>404 - Page Not Found</title>
			</Helmet>

			<div className='flex flex-col justify-center bg-blue-100 min-h-screen '>
				<div className='container mx-auto flex flex-col p-7 justify-center bg-white rounded-md gap-8 md:w-1/2 xl:w-1/3 '>
					<div className='flex flex-col gap-4 '>
						<div className='flex flex-col items-center gap-4 mb-4'>
							<div>
								<Link to='/'>
									<img src={logo} alt='logo' />
								</Link>
							</div>
							<p className='text-2xl text-blue-700 font-semibold'>
								 Page Not Found
							</p>
						</div>
						<Link
							to='/'
							className='text-blue-700 hover:text-blue-500 text-center text-lg font-semibold'
						>
							Homepage
						</Link>
					</div>
					<div className='flex justify-center border-t-2 pt-5'>
						<p className='text-center text-lg text-grayText '>
							Already have an account?{" "}
							<Link to='/login' className='text-blue-700 hover:text-blue-500'>
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default NotFound;
