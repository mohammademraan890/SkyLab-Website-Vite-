import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";
import "./App.css";
import Layout from "./Components/Layout";
import "./Responsiveness.css";

export const ErrorUI = (props) => {
  console.log("Error UI Props:", props); 
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <pre>{props?.error?.message}</pre>
      <button onClick={props?.resetErrorBoundary}>Try Again</button>
    </div>
  );
};

ErrorUI.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  resetErrorBoundary: PropTypes.func 
};

ErrorUI.defaultProps = {
  error: { message: "An unexpected error occurred" }, 
  resetErrorBoundary: () => {}
};

function App() {
  const paths = createBrowserRouter([
    {
      path: "*",
      element: <Layout />,
    },
  ]);
  return <RouterProvider router={paths} />;
}

export default App;
