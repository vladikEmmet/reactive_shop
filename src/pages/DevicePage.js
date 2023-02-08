import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceApi";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const [price, setPrice] = useState(0);
  const { id } = useParams();

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
            src={"http://localhost:5000/" + device.img}
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
                Have you used this device? <button>Rate it!</button>
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
                <Button>Add to basket</Button>
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
    </Container>
  );
};

export default DevicePage;
