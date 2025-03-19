import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
// import PropTypes from "prop-types";
import "./App.css";
import "./Responsiveness.css";
import Loader from "./Components/loader/Loader";

// export const ErrorUI = (props) => {
//   console.log("Error UI Props:", props);
//   return (
//     <div>
//       <h1>404</h1>
//       <h2>Page Not Found</h2>
//       <pre>{props?.error?.message}</pre>
//       <button onClick={props?.resetErrorBoundary}>Try Again</button>
//     </div>
//   );
// };

// ErrorUI.propTypes = {
//   error: PropTypes.shape({
//     message: PropTypes.string
//   }),
//   resetErrorBoundary: PropTypes.func
// };

// ErrorUI.defaultProps = {
//   error: { message: "An unexpected error occurred" },
//   resetErrorBoundary: () => {}
// };

// Lazy load your components

const Login = lazy(() => import("./Components/LoginPage/Login"));
const Registration = lazy(() =>
  import("./Components/Registration/Registration")
);
const Profile = lazy(() => import("./Components/Profile/Profile"));
const PrivateWrapper = lazy(() => import("./Components/PrivateWrapper"));
const HomePage = lazy(() => import("./Components/Pages/HomePage/HomePage"));
const About = lazy(() => import("./Components/Pages/AboutPage/About"));
const PublicWrapper = lazy(() =>
  import("./Components/publicwrapper/PublicWrapper")
);
const ServicesPage = lazy(() =>
  import("./Components/Pages/ServicesPage/ServicesPage")
);
const ContactPage = lazy(() =>
  import("./Components/Pages/ContactPage/ContactPage")
);
const ProductPage = lazy(() =>
  import("./Components/Pages/ProductPage/ProductPage")
);
const Card = lazy(() => import("./Components/Pages/Card/Card"));
const UseCallback = lazy(() => import("./Components/usecallback/UseCallback"));
const Form = lazy(() => import("./Components/FormUsingFormik/Formikform"));
const NotFound = lazy(() => import("./Components/Pages/NotFound/NotFound"));

const router = createBrowserRouter([
  {
    element:
  },
  {
    element: <PublicWrapper />,
    children: [
      { path: "/", element: <Login /> },
      { path: "signup", element: <Registration /> },
      
    ],
  },

  {
    element: <PrivateWrapper />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "services", element: <ServicesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "product/:id/:category", element: <ProductPage /> },
      { path: "service/:id", element: <Card /> },
      { path: "usecallback", element: <UseCallback /> },
      { path: "formikform", element: <Form /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader></Loader>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
