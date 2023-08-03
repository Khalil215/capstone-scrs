import React from "react";
import Intro from "../../components/home/intro/index";
import Details from "../../components/home/details";
import Pricing from "../../components/home//pricing";
import { Faqs } from "../../components/home//faqs";
import Footer from "../../components/footer";
import Url from "../../components/home/url";
import Navbar from "../../components/navbar";
import { Helmet } from "react-helmet";
import { Context } from "../../context/Context";
import { useContext } from "react";
import Modal from "../../components/modal";


const Home: React.FC = () => {
	const context = useContext(Context);
  const { qrCodeModalActive } = context;

	return (
		<div>
			
			<Helmet>
				<title>Home | Scissor</title>
			</Helmet>
			<Navbar />
			{qrCodeModalActive && <Modal />}
			<Intro />
			<Details />
			<Pricing />
			<Url />
			<Faqs />
			<Footer />
		</div>
	);
};

export default Home;
