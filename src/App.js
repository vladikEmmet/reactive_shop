import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import "./App.css";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { check } from "./http/userApi";
import { fetchTypes, fetchBrands, fetchDevices } from "./http/deviceApi";
import Loader from "./components/Loader";

const App = observer(() => {
  const { user, device } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data.user);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
});

export default App;
