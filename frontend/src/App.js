import Home from "./Pages/Home";
import { useEffect } from "react";
import useAuth from "./Hooks/useAuth";

function App() {
  const { user } = useAuth();
  const { userID, setUserID } = user;
  useEffect(() => {
    const getID = sessionStorage.getItem("USER_ID");
    if (!getID) {

      const ask = window.confirm("Your Need New Account",)
      if (ask) {
        const x = window.prompt("Create Your New ID*****", "");
        if (x) {
          sessionStorage.setItem("USER_ID", x);
          const getID = sessionStorage.getItem("USER_ID");
          setUserID(getID);
        }
      }
      else {
        const y = window.prompt("Give Your Previous Account ID", "");
        if (y) {
          sessionStorage.setItem("USER_ID", y);
          const getID = sessionStorage.getItem("USER_ID");
          setUserID(getID);
        }
      }
    } else {
      setUserID(getID)
    }
  }, [userID]);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
