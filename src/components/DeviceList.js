import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  const findBrand = (id) => device.brands.find((brand) => brand.id === id);

  return (
    <div className="device-list">
      {device.devices.map((device) => (
        <DeviceItem
          key={device.id}
          device={device}
          brand={findBrand(device.brandId).name}
        />
      ))}
    </div>
  );
});

export default DeviceList;
