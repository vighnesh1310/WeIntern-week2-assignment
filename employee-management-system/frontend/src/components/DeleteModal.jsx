function DeleteModal({
  employee,
  onConfirm,
  onCancel,
  deleting
}) {
  if (!employee) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <h2>Delete Employee?</h2>

        <p>
          Are you sure you want to delete{" "}
          <strong>{employee.name}</strong>?
        </p>

        <p className="delete-warning">
          This action cannot be undone.
        </p>

        <div className="modal-actions">
          <button
            className="cancel-button"
            onClick={onCancel}
            disabled={deleting}
          >
            Cancel
          </button>

          <button
            className="confirm-delete-button"
            onClick={onConfirm}
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;