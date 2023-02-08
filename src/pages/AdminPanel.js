import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import BrandModal from "../components/modals/BrandModal";
import DeviceModal from "../components/modals/DeviceModal";
import TypeModal from "../components/modals/TypeModal";

const AdminPanel = () => {
  const [isBrandModalVisible, setIsBrandModalVisible] = useState(false);
  const [isTypeModalVisible, setIsTypeModalVisible] = useState(false);
  const [isDeviceModalVisible, setIsDeviceModalVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setIsTypeModalVisible(true)}
        variant={"outline-dark"}
        className="mt-4 p-2"
      >
        Add type
      </Button>
      <Button
        onClick={() => setIsBrandModalVisible(true)}
        variant={"outline-dark"}
        className="mt-4 p-2"
      >
        Add brand
      </Button>
      <Button
        onClick={() => setIsDeviceModalVisible(true)}
        variant={"outline-dark"}
        className="mt-4 p-2"
      >
        Add device
      </Button>
      <BrandModal
        show={isBrandModalVisible}
        onHide={() => setIsBrandModalVisible(false)}
      />
      <DeviceModal
        show={isDeviceModalVisible}
        onHide={() => setIsDeviceModalVisible(false)}
      />
      <TypeModal
        show={isTypeModalVisible}
        onHide={() => setIsTypeModalVisible(false)}
      />
    </Container>
  );
};

export default AdminPanel;
