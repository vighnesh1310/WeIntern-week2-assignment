function Notification({ type, message, onClose }) {
  if (!message) {
    return null;
  }

  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>

      <button
        type="button"
        onClick={onClose}
        className="notification-close"
      >
        ×
      </button>
    </div>
  );
}

export default Notification;