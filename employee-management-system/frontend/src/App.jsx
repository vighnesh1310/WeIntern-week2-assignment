import { useEffect, useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import { getEmployees } from "./services/employeeApi";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Employee Management</h1>
          <p>Manage employee records</p>
        </div>

        <button className="add-button">
          Add Employee
        </button>
      </header>

      <main className="main-content">
        <div className="page-heading">
          <h2>Employees</h2>
          <p>View and manage all employee records.</p>
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
      </main>
    </div>
  );
}

export default App;