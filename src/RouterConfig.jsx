import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainWrapper from "./Components/mainWrapper/MainWrapper";
import DateFormating from "./Components/DateFNS/DateFormating";
import RegisteredUsers from "./Components/RegisteredUsers/RegisteredUsers";
// import LifeCycle from "./Components/componentLifeCycle/lifeCycle";
import ArrayMethods from "./Components/ArrayIterateMethods/ArrayMethods";
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
const FormikTable = lazy(() => import("./Components/FormikTable/FormikTable"));

export const router = createBrowserRouter([
  {
    element: <MainWrapper />,
    children: [
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
          { path: "formiktable", element: <FormikTable /> },
          { path: "profile", element: <Profile /> },
          { path: "/date-fns", element: <DateFormating /> },
          { path: "/registered-users", element: <RegisteredUsers /> },
          // { path: "/LifeCycle", element: <LifeCycle /> },
          { path: "/arrayMethods", element: <ArrayMethods /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);
