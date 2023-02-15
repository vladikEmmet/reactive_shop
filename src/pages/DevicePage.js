import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevice, sendRate } from "../http/deviceApi";
import RateModal from "../components/modals/RateModal";
import { Context } from "../index";
import ErrorModal from "../components/modals/ErrorModal";
import { addToBasket } from "../http/basketApi";

const DevicePage = () => {
  const { user } = useContext(Context);
  const [device, setDevice] = useState({ info: [] });
  const [price, setPrice] = useState(0);
  const [isRateModalVisible, setIsRateModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDeviceAdded, setIsDeviceAdded] = useState(false);
  const [tooltipCoords, setTooltipCoords] = useState({});
  const { id } = useParams();

  const add = (x, y) => {
    try {
      const formData = new FormData();
      formData.append("deviceId", id);
      addToBasket(formData)
        .then((response) => {
          setTooltipCoords({ x, y });
          setIsDeviceAdded(true);
          setTimeout(() => setIsDeviceAdded(false), 1500);
        })
        .catch((err) => setErrorMessage(err.response.data.message));
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
  };

  const sendDeviceRate = async (rate) => {
    try {
      const data = await sendRate({ id, userId: user.user.id, rate });
      const updated = {};
      for (let key in device) {
        if (key === "rating") {
          updated[key] = data;
          continue;
        }
        updated[key] = device[key];
      }
      setDevice(updated);
    } catch (err) {
      setErrorMessage(err.response.data.message);
    } finally {
      setIsRateModalVisible(false);
    }
  };

  useEffect(() => {
    fetchOneDevice(id).then((data) => {
      setDevice(data);
      setPrice(
        new Intl.NumberFormat("ru", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        }).format(data.price)
      );
    });
  }, []);

  return (
    <Container className="mt-3">
      <div className="d-flex flex-wrap device-page-container">
        <Col md={4}>
          <Image
            className="device-page-img"
            src={process.env.REACT_APP_API_URL + "/" + device.img}
          />
        </Col>
        <Col md={5}>
          <div className="d-flex flex-column justify-content-between device-page-info">
            <h2>{device.name}</h2>
            <div>
              <h3>
                <span className="text-black-50">Rating:</span> {device.rating}
              </h3>
              <h4>
                Have you used this device?
                <button onClick={() => setIsRateModalVisible(true)}>
                  Rate it!
                </button>
              </h4>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <Card style={{ overflow: "hidden" }} className="device-card">
            <Card.Body>
              <div className="d-flex flex-column align-items-center justify-content-between device-page-price-basket">
                <div className="tmp"></div>
                <h3>{price}</h3>
                <Button onClick={(e) => add(e.clientX, e.clientY)}>
                  Add to basket
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
      <div className="d-flex flex-column p-3 mt-3 description-list">
        <h3>Characteristics</h3>
        {device.info.map((info) => (
          <Row key={info.id}>
            {info.title}: {info.description}
          </Row>
        ))}
      </div>

      {isDeviceAdded && (
        <div
          className="device-added-tooltip text-center"
          style={{
            position: "absolute",
            width: 100,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: 10,
            top: tooltipCoords.y,
            left: tooltipCoords.x,
            color: "#fff",
          }}
        >
          <h5>Added!</h5>
        </div>
      )}
      <RateModal
        smShow={isRateModalVisible}
        onHide={() => setIsRateModalVisible(false)}
        sendRate={sendDeviceRate}
      />
      <ErrorModal
        isVisible={errorMessage !== ""}
        message={errorMessage}
        handleClose={() => setErrorMessage("")}
      />
    </Container>
  );
};

export default DevicePage;
