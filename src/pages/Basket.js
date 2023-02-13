import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "..";
import { getBasket, removeFromBasket } from "../http/basketApi";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import ErrorModal from "../components/modals/ErrorModal";

const Basket = observer(() => {
  const [total, setTotal] = useState(0);
  const { device } = useContext(Context);
  const [errMessage, setErrMessage] = useState("");
  const formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    getBasket()
      .then((data) => {
        device.setBaskets(data);
        setTotal(sum());
      })
      .catch((err) => setErrMessage(err.message));
  }, [device.basket]);

  function sum() {
    let prices = 0;
    if (device.basket.length <= 0) return 0;
    device.basket.map((price) => (prices += Number(price.Device.price)));
    return prices;
  }

  const remove = async (id) => {
    removeFromBasket(id)
      .then((data) => {
        device.setBaskets(device.basket.filter((i) => i.id !== data.id));
      })
      .catch((err) => setErrMessage(err.response.data.message));
  };

  return (
    <div className="d-flex align-items-center mt-3 basket-container">
      <h1 className="pb-2">Cart</h1>

      <Card className="d-flex flex-row p-2 justify-content-between align-items-center mb-2">
        <h1 className="pr-2">Total:</h1>
        <h1 className="pl-2">{formatter.format(total)}</h1>
      </Card>

      {device.basket.map((product) => (
        <div key={product.id} className="w-100 mobile-wrapper">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <Link
              to={DEVICE_ROUTE + `/${product.Device.id}`}
              className="text-decoration-none text-dark"
            >
              <Card className="d-flex w-100 p-2 justify-content-center basket-card">
                <Row className="d-flex w-100">
                  <Col>
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src={"http://localhost:5000/" + product.Device.img}
                        alt="device-img"
                        width={50}
                      />
                      <h1 className="pl-3">{product.Device.name}</h1>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                      <h2 className="font-weight-light">
                        {formatter.format(product.Device.price)}
                      </h2>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Link>
            <Button
              variant="outline-danger"
              onClick={() => remove(product.id)}
              className="pc-button"
            >
              Delete
            </Button>
          </div>
          <Button
            variant="danger"
            onClick={() => remove(product.id)}
            className="mobile-button"
          >
            Delete
          </Button>
        </div>
      ))}
      <ErrorModal
        handleClose={() => setErrMessage("")}
        show={errMessage.length > 0}
        message={errMessage}
      />
    </div>
  );
});

export default Basket;
