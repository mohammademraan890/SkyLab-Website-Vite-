import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import "./Responsiveness.css";
import Loader from "./Components/loader/Loader";
import { router } from "./RouterConfig";

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

// ],{
//   future:{
//     v7_startTransition  : true
//   }
// });

function App() {
  return (
    <Suspense fallback={<Loader></Loader>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
