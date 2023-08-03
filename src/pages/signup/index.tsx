import { FC, useRef, useState,useContext } from "react";
import { Link, useNavigate,Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Helmet } from "react-helmet";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";
import Footer from "../../components/footer";
import {
  auth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  provider,
} from "../../utils/firebase";
import { Context } from "../../context/Context";
import { signupSchema } from "../../utils/schema";

const Signup: FC = () => {
  const formikRef = useRef<any>(null);
	const context = useContext(Context);
  const { auth: cauth } = context;
const [isLoading, setIsLoading]= useState(false)
  const navigate = useNavigate();

  type initialTypes = {
    email: string;
    username: string;
    password: string;
  };
  const INITIAL_VALUES: initialTypes = {
    email: "",
    username: "",
    password: "",
  };


  const signup = async (data: any) => {
		setIsLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
				setIsLoading(false)
				navigate("/");

        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
				setIsLoading(false)
        console.log(error);
        // ..
      });
  };

  const googleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        // ...
      });
  };

  const handleSubmit = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    signup(values);
  };

	if (cauth) {
		return <Navigate to={"/"}/>
	}

  return (
    <>
      <Helmet>
        <title>Signup | Scissor</title>
      </Helmet>

      <div className="flex flex-col justify-center bg-lightBlue min-h-screen ">
        <div className="container mx-auto flex flex-col p-7 justify-center bg-white rounded-md gap-8 md:w-1/2 xl:w-1/3 ">
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col items-center gap-4 mb-4">
              <p className="font-semibold">Sign Up with:</p>
              <div className="flex gap-5">
                <button
                  className="bg-blue-700 text-white px-4 py-2 rounded flex gap-2 items-center"
                  onClick={googleLogin}
                >
                  <img src={google} alt="google" /> Google
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded flex gap-2 items-center">
                  <img src={apple} alt="google" /> Apple
                </button>
              </div>
              <div className="flex w-full items-center gap-5 mt-3">
                <hr className="border w-full border-gray-200 " />
                Or
                <hr className="border w-full border-gray-200" />
              </div>
            </div>

            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={signupSchema}
              onSubmit={handleSubmit}
              innerRef={formikRef}
            >
              {({ isValid, handleSubmit }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-1">
                        <Field
                          type="text"
                          name="username"
                          placeholder="Username"
                          className="p-3 rounded-xl border-2 focus:outline-none focus:border-blue-500 lg:p-4"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="username"
                          component="div"
                        />
                      </div>

                      <div className={`flex flex-col gap-1 w-full`}>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="first-letter:w-full p-3 rounded-xl border-2 focus:outline-none focus:border-blue-500 lg:p-4"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="firstName"
                          component="div"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="w-full p-3 rounded-xl border-2 focus:outline-none focus:border-blue-500 lg:p-4"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="password"
                          component="div"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <Field
                          type="password"
                          name="repassword"
                          placeholder="Password"
                          className="p-3 rounded-xl border-2 focus:outline-none focus:border-blue-500 lg:p-4"
                        />
                        <ErrorMessage
                          className="text-red-500"
                          name="repassword"
                          component="p"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={!isValid}
                        className="p-3 bg-blue-700 text-white text-lg font-semibold rounded-2xl border-2 hover:bg-blue-500 focus:outline-none  disabled:cursor-not-allowed lg:p-4"
                      >
                        {isLoading ? (
													<i className='fa fa-spinner fa-spin' aria-hidden='true'></i>
												) : (
													"Sign up"
												)}
                        
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="flex justify-center border-t-2 pt-5">
            <p className="text-center text-lg text-grayText ">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-700 hover:text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
