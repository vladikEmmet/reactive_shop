import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import Card from "react-bootstrap/Card";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="brand-row">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3 brand-card"
          onClick={() =>
            device.setSelectedBrand(device.selectedBrand === brand ? {} : brand)
          }
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
