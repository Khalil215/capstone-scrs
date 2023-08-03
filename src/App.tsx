import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import Login from "./pages/login/index.tsx";
import Signup from "./pages/signup/index.tsx";
import Home from "./pages/home/index.tsx";
import NotFound from "./pages/404Page/index.tsx";

const App = () => {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/*",
			element: <NotFound />,
		},
	]);
	return (
		<Fragment>
			<RouterProvider router={router} />
		</Fragment>
	);
};

export default App;
