import { useState } from "react";

function EmployeeForm({ onEmployeeAdded, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    role: "",
    salary: "",
    join_date: ""
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: ""
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.department.trim()) {
      newErrors.department = "Department is required";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!formData.salary) {
      newErrors.salary = "Salary is required";
    } else if (Number(formData.salary) <= 0) {
      newErrors.salary = "Salary must be greater than 0";
    }

    if (!formData.join_date) {
      newErrors.join_date = "Join date is required";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);

      await onEmployeeAdded({
        name: formData.name.trim(),
        department: formData.department.trim(),
        role: formData.role.trim(),
        salary: Number(formData.salary),
        join_date: formData.join_date
      });

      setFormData({
        name: "",
        department: "",
        role: "",
        salary: "",
        join_date: ""
      });

      setErrors({});
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <div>
          <h2>Add Employee</h2>
          <p>Enter the employee details below.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
            />

            {errors.name && (
              <span className="field-error">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>

            <input
              id="department"
              name="department"
              type="text"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department"
            />

            {errors.department && (
              <span className="field-error">
                {errors.department}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>

            <input
              id="role"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter job role"
            />

            {errors.role && (
              <span className="field-error">{errors.role}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="salary">Salary</label>

            <input
              id="salary"
              name="salary"
              type="number"
              min="1"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter salary"
            />

            {errors.salary && (
              <span className="field-error">{errors.salary}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="join_date">Join Date</label>

            <input
              id="join_date"
              name="join_date"
              type="date"
              value={formData.join_date}
              onChange={handleChange}
            />

            {errors.join_date && (
              <span className="field-error">
                {errors.join_date}
              </span>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
            disabled={submitting}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="save-button"
            disabled={submitting}
          >
            {submitting ? "Saving..." : "Save Employee"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;