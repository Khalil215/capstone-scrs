import React, { useContext, useRef } from "react";
import styles from "./Modal.module.css";
import { Context } from "../../context/Context";
import { QRCodeSVG } from "qrcode.react";

const Modal: React.FC = () => {
	const qrCodeRef = useRef<any>(null);
	const context = useContext(Context);
  const { setQrCodeModalActive, selectedQrCode } = context;

	return (
		<div className='relative'>
			<div className='fixed opacity-70 bg-gray-700 z-40 h-full w-full'></div>
			<div
				className={`fixed z-50 opacity-100 pb-14 py-2 flex flex-col gap-6 w-96 bg-white shadow-md ${styles.modalContent}`}
			>
				<p className='text-right mt-2 mr-2'>
					<i
						className='fa fa-2x fa-times-circle cursor-pointer hover:text-errorRed'
						aria-hidden='true'
						onClick={() => setQrCodeModalActive(false)}
					></i>
				</p>
				<div className='flex flex-col items-center justify-center'>
					<div>
						<p className='font-bold text-lg text-center'>Scan Me!</p>
						<div ref={qrCodeRef}>
							<QRCodeSVG value={`${selectedQrCode}`} includeMargin size={200} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
