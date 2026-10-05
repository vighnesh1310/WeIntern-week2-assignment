import { useEffect, useState } from "react";

import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

import {
  getEmployees,
  createEmployee
} from "./services/employeeApi";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

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

  const handleEmployeeAdded = async (employee) => {
    try {
      const response = await createEmployee(employee);

      setEmployees((previousEmployees) => [
        response.employee,
        ...previousEmployees
      ]);

      setShowForm(false);
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message ||
        "Failed to create employee";

      alert(message);

      throw error;
    }
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
            onClick={() => setShowForm(true)}
          >
            Add Employee
          </button>
        )}
      </header>

      <main className="main-content">
        {showForm ? (
          <EmployeeForm
            onEmployeeAdded={handleEmployeeAdded}
            onCancel={() => setShowForm(false)}
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
              <EmployeeTable employees={employees} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;