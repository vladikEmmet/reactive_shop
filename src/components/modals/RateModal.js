import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const RateModal = ({ smShow, onHide, sendRate }) => {
  return (
    <Modal
      size="sm"
      show={smShow}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          What is your assessment?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-between">
        {[0, 1, 2, 3, 4, 5].map((rate) => (
          <button
            className="rate-button"
            key={rate}
            onClick={() => sendRate(rate)}
          >
            {rate}
          </button>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default RateModal;
