import React from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device, brand }) => {
  return (
    <Link to={DEVICE_ROUTE + "/" + device.id} className="mt-3 device-item-link">
      <Col md={3}>
        <Card
          className="device-item-card"
          style={{ width: 200 }}
          border={"dark"}
        >
          <Card.Body style={{ width: "100%" }}>
            <Image
              width={150}
              height={150}
              src={"http://localhost:5000/" + device.img}
            />
            <div className="mt-1 d-flex justify-content-between align-items-center">
              <div className="text-black-50">{brand}</div>
              <div className="d-flex align-items-center">
                <div>{device.rating}</div>
                <FontAwesomeIcon className="device-item-star" icon={faStar} />
              </div>
            </div>
            <div>{device.name}</div>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
};

export default DeviceItem;
