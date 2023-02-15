import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  const brands = device.brands;

  const findBrand = (id) => brands.find((brand) => brand.id === id);

  return (
    <div className="device-list">
      {device.devices &&
        device.devices.map((device) => (
          <DeviceItem
            key={device.id}
            device={device}
            brand={findBrand(device.brandId)}
          />
        ))}
    </div>
  );
});

export default DeviceList;
