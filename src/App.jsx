import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import "./Responsiveness.css";

function App() {
  const paths= createBrowserRouter([{path:"*" ,element:<Layout/>}]);
  return (

      <RouterProvider router={paths} />

  );
}

export default App;
