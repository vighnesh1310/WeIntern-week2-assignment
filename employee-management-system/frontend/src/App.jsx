import { useEffect, useState } from "react";

import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import DeleteModal from "./components/DeleteModal";

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from "./services/employeeApi";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [employeeToDelete, setEmployeeToDelete] =
    useState(null);

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getEmployees();

      setEmployees(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load employees");
    } finally {
      setLoading(false);
    }
  };

  const handleAddClick = () => {
    setSelectedEmployee(null);
    setShowForm(true);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const handleEmployeeAdded = async (employee) => {
    try {
      const response = await createEmployee(employee);

      setEmployees((previousEmployees) => [
        response.employee,
        ...previousEmployees
      ]);

      setShowForm(false);
      setSelectedEmployee(null);
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message ||
        "Failed to create employee";

      alert(message);

      throw error;
    }
  };

  const handleEmployeeUpdated = async (
    id,
    employee
  ) => {
    try {
      const response = await updateEmployee(
        id,
        employee
      );

      setEmployees((previousEmployees) =>
        previousEmployees.map((item) =>
          item.id === id
            ? response.employee
            : item
        )
      );

      setShowForm(false);
      setSelectedEmployee(null);
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message ||
        "Failed to update employee";

      alert(message);

      throw error;
    }
  };

  const handleDeleteClick = (employee) => {
    setEmployeeToDelete(employee);
  };

  const handleDeleteConfirm = async () => {
    if (!employeeToDelete) {
      return;
    }

    try {
      setDeleting(true);

      await deleteEmployee(employeeToDelete.id);

      setEmployees((previousEmployees) =>
        previousEmployees.filter(
          (employee) =>
            employee.id !== employeeToDelete.id
        )
      );

      setEmployeeToDelete(null);
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message ||
        "Failed to delete employee";

      alert(message);
    } finally {
      setDeleting(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Employee Management</h1>
          <p>Manage employee records</p>
        </div>

        {!showForm && (
          <button
            className="add-button"
            onClick={handleAddClick}
          >
            Add Employee
          </button>
        )}
      </header>

      <main className="main-content">
        {showForm ? (
          <EmployeeForm
            employee={selectedEmployee}
            onEmployeeAdded={handleEmployeeAdded}
            onEmployeeUpdated={handleEmployeeUpdated}
            onCancel={handleCancel}
          />
        ) : (
          <>
            <div className="page-heading">
              <h2>Employees</h2>

              <p>
                View and manage all employee records.
              </p>
            </div>

            {loading && (
              <div className="status-message">
                Loading employees...
              </div>
            )}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {!loading && !error && (
              <EmployeeTable
                employees={employees}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
              />
            )}
          </>
        )}
      </main>

      <DeleteModal
        employee={employeeToDelete}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setEmployeeToDelete(null)}
        deleting={deleting}
      />
    </div>
  );
}

export default App;