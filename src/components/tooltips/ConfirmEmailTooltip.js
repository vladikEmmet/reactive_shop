import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/esm/Container";

const ConfirmEmailTooltip = ({ handleClick }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);
  return (
    <div className="email-tooltip-container">
      {isTooltipVisible && (
        <Container className="pt-2 pb-2 mb-3 d-flex justify-content-between align-items-center">
          <div>We sent a link to activate your account to your email</div>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setIsTooltipVisible(false)}
          />
        </Container>
      )}
    </div>
  );
};

export default ConfirmEmailTooltip;
