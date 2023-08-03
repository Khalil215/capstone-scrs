import { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {useNavigate } from "react-router-dom";
import styles from "./Url.module.css";
import axios from "axios";
import magicIcon from "../../../assets/icons/magic.png";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import { trimSchema } from "../../../utils/schema";

const Url: React.FC = () => {
  const context = useContext(Context);
  const navigate = useNavigate();
  const { url, setUrl, setQrCodeModalActive,setSelectedQrCode,auth } = context;
  const formikRef = useRef<any>(null);


  type initalValues = {
    url: string;
    customAlias: string;
  };
  const initialValues: initalValues = {
    url: "",
    customAlias: "",
  };

  const handleCreateUrl = async ({ url, customAlias }: any) => {
    console.log(auth);
    
    if(!auth){
      navigate("/login");
      return
    }

    const bitlyAccessToken = "6735968f80a0b23bcd3736f09e63d73232bec01b";
    const apiUrl = "https://api-ssl.bitly.com/v4/shorten";

    try {
      const response = await axios.post(
        apiUrl,
        {
          long_url: url,
          domain: "bit.ly",
          custom_bitlinks: [customAlias],
        },
        {
          headers: {
            Authorization: `Bearer ${bitlyAccessToken}`,
          },
        }
      );
      setUrl(response.data.link);
      formikRef.current.resetForm();
    } catch (error: any) {
      console.error("Error shortening URL:", error.message);
      return null;
    }
  };

  const handleSubmit = async (values: any) => {
    handleCreateUrl(values);
  };

	const handleQrCode = () => {
		setSelectedQrCode(`https://localhost:4000/${url}`);
		setQrCodeModalActive(true);
	};

  return (
		<>
    <section className={`${styles.wrapper} py-20`} id="myurl">
      <div className="content flex flex-col p-7 justify-center bg-white text-blue-500 rounded-xl gap-8 md:w-1/2 xl:w-1/3">
        <Formik
          initialValues={initialValues}
          validationSchema={trimSchema}
          innerRef={formikRef}
          onSubmit={handleSubmit}
        >
          {({ isValid, isSubmitting }) => {
            return (
              <Form>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-1">
                    <Field
                      type="text"
                      name="url"
                      placeholder="Paste URL here..."
                      className="p-4 rounded-xl border border-blue-500 focus:outline-none focus:border-blue-700"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      name="url"
                      component="div"
                    />
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-between sm:flex-row md:gap-2">
                    <div className={`flex flex-col gap-1 w-full md:w-fit`}>
                      <Field
                        as="select"
                        name="customizedomain"
                        className={`${styles.urlInput} p-4 rounded-xl border border-blue-500 focus:outline-none focus:border-blue-700`}
                        placeholder="Customize domain"
                      >
                        <option>Customize domain</option>
                      </Field>
                      <ErrorMessage
                        className="text-red-500"
                        name="customizedomain"
                        component="div"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-fit">
                      <Field
                        type="text"
                        name="customAlias"
                        placeholder="Type customAlias here"
                        className={`${styles.urlInput} p-4 rounded-xl border border-blue-500 focus:outline-none focus:border-blue-700`}
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="customAlias"
                        component="div"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid}
                    className="flex items-center justify-center gap-3 p-4 bg-blue-700 text-white text-lg font-semibold rounded-full border-2 hover:bg-blue-500 focus:outline-none  disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting" : "Trim URL"}{" "}
                    <img src={magicIcon} alt="magic" />
                  </button>

                  <p className="text-blue-500">
                    By clicking TrimURL, I agree to the{" "}
                    <span className="text-blue-700 font-bold">
                      Terms of Service, Privacy Policy
                    </span>{" "}
                    and Use of Cookies.
                  </p>

                  {url !== "" && (
                    <div className="grid md:grid-column gap-4 items-center justify-around md:p-4 px-0 py-4 bg-blue-700 text-white md:text-lg font-semibold  border-2 hover:bg-blue-500 hover:cursor-pointer">
                      <a href={url} target="_blank" className="hover:text-black">
                        Here is your url : {url}
                      </a>
                      <p
                        className="flex items-center gap-2 text-primary300 cursor-pointer hover:text-black"
                        onClick={handleQrCode}
                      >
                        <span>QR Code</span>
                        <i className="fa fa-qrcode" aria-hidden="true"></i>
                      </p>
                    </div>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
		</>
  );
};

export default Url;
