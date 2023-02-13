import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import NavBar from "./NavBar";
import { observer } from "mobx-react-lite";

const Router = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      <NavBar />
      <Routes>
        {user.isAuth &&
          authRoutes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}

        {publicRoutes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
});

export default Router;
