import { useEffect, useState } from "react";

const AppWrapper = (props) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  if (!isOnline) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>You are offline</h1>
        <p>Please check your internet connection.</p>
      </div>
    );
  }
  return <div>{props.children}</div>;
};

export default AppWrapper;
