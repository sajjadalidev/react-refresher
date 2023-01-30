export const Modal = ({ onCancel, onConfirm }) => {
  const handleCancel = () => {
    onCancel();
  };
  const handleConfirm = () => {
    onConfirm();
  };
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={handleCancel}>
        Cancel
      </button>
      <button className="btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};
