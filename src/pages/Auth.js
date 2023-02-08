import { useState, useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ErrorModal from "../components/modals/ErrorModal";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(true);

  const handleClick = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(emailValue, passwordValue);
      } else {
        data = await registration(emailValue, passwordValue);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="p-5 auth-card">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Don't have an account?
                <Link to={REGISTRATION_ROUTE}>Sign up</Link>
              </div>
            ) : (
              <div>
                Already have an account?
                <Link to={LOGIN_ROUTE}>Log in</Link>
              </div>
            )}
            <Button
              className="mt-3 align-self-end"
              variant={"outline-success"}
              onClick={handleClick}
            >
              {isLogin ? "Log in" : "Sign up"}
            </Button>
          </Row>
        </Form>
      </Card>
      <ErrorModal
        isVisible={errorMessage.length > 0}
        handleClose={() => setErrorMessage("")}
        message={errorMessage}
      />
    </Container>
  );
});

export default Auth;
