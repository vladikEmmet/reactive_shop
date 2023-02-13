import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
      <div className="brand-row">
        {device.brands.map((brand) => (
          <Card
            key={brand.id}
            className="p-3 brand-card"
            onClick={() =>
              device.setSelectedBrand(
                device.selectedBrand === brand ? {} : brand
              )
            }
            border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          >
            {brand.name}
          </Card>
        ))}
      </div>
      <DropdownButton
        as={ButtonGroup}
        variant="secondary"
        title="Select brand"
        className="mobile-brandbar"
      >
        {device.brands.map((brand) => (
          <DropdownItem
            key={brand.id}
            onClick={() =>
              device.setSelectedBrand(
                device.selectedBrand === brand ? {} : brand
              )
            }
          >
            {brand.name}
          </DropdownItem>
        ))}
      </DropdownButton>
    </>
  );
});

export default BrandBar;
