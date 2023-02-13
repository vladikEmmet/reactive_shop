import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <>
      <ListGroup className="type-list">
        {device.types.map((type) => (
          <ListGroup.Item
            className="type-item"
            active={type.id === device.selectedType.id}
            key={type.id}
            onClick={() =>
              device.setSelectedType(device.selectedType === type ? {} : type)
            }
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <DropdownButton
        as={ButtonGroup}
        variant="secondary"
        title="Select type"
        className="mobile-typebar"
      >
        {device.types.map((type) => (
          <Dropdown.Item
            key={type.id}
            onClick={() =>
              device.setSelectedType(device.selectedType === type ? {} : type)
            }
          >
            {type.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
});

export default TypeBar;
