// import { useEffect } from "react";
import "./Button.css"; // Import CSS for styling
import { ErrorBoundary } from "react-error-boundary";
import { ErrorUI } from "../../../App";

const Buttons = ({ title, margin }) => {
  // useEffect(() => {
  //   throw new Error("This is an error");
  // }, []);
  return (
    <div
      className={`btns cursor-pointer d-flex align-items-center justify-content-center mx-sm-0 
      `}
      style={{ margin: margin }}
    >
      <a href="/">{title}</a>
    </div>
  );
};
// const ErrorBtn = () => {
//   return (
//     <ErrorBoundary FallbackComponent={ErrorUI}>
//       <Buttons></Buttons>
//     </ErrorBoundary>
//   );
// };

export default Buttons;
