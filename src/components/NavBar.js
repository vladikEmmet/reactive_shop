import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { observer } from "mobx-react-lite";
import {
  ABOUT_US_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  CONTACTS_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { logout } from "../http/userApi";
import ConfirmEmailTooltip from "./tooltips/ConfirmEmailTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const handleClick = async () => {
    try {
      const response = await logout();
      localStorage.removeItem("token");
      user.setIsAuth(false);
      user.setUser({});
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Navbar
        className="header-nav"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Link to="/" className="navbar-logo">
            Reactive shop
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={ABOUT_US_ROUTE} className="nav-link">
                About us
              </Link>
              <Link to={CONTACTS_ROUTE} className="nav-link">
                Contacts
              </Link>
            </Nav>
            {user.isAuth ? (
              <Nav>
                <Link to={BASKET_ROUTE} className="nav-link">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>

                {user.user.role === "ADMIN" && (
                  <Link to={ADMIN_ROUTE} className="nav-link">
                    Admin panel
                  </Link>
                )}
                <Link
                  to={SHOP_ROUTE}
                  onClick={handleClick}
                  className="nav-link"
                >
                  Log out
                </Link>
              </Nav>
            ) : (
              <Nav>
                <Link to={LOGIN_ROUTE}>Log in</Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {user.isAuth && !user.user.isActivated && <ConfirmEmailTooltip />}
    </>
  );
});

export default NavBar;
