import { useEffect, useState } from "react";

import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import DeleteModal from "./components/DeleteModal";
import Notification from "./components/Notification";

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
  const [selectedEmployee, setSelectedEmployee] =
    useState(null);

  const [employeeToDelete, setEmployeeToDelete] =
    useState(null);

  const [deleting, setDeleting] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const [notification, setNotification] = useState({
    type: "",
    message: ""
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const showNotification = (type, message) => {
    setNotification({
      type,
      message
    });

    setTimeout(() => {
      setNotification({
        type: "",
        message: ""
      });
    }, 3000);
  };

  const loadEmployees = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getEmployees();

      setEmployees(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load employees");

      showNotification(
        "error",
        "Unable to load employees"
      );
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

      showNotification(
        "success",
        "Employee added successfully"
      );
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message ||
        "Failed to create employee";

      showNotification("error", message);

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

      showNotification(
        "success",
        "Employee updated successfully"
      );
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message ||
        "Failed to update employee";

      showNotification("error", message);

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

      showNotification(
        "success",
        "Employee deleted successfully"
      );
    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.message ||
        "Failed to delete employee";

      showNotification("error", message);
    } finally {
      setDeleting(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedEmployee(null);
  };

  const filteredEmployees = employees
    .filter((employee) => {
      const search = searchText
        .toLowerCase()
        .trim();

      if (!search) {
        return true;
      }

      return (
        employee.name
          .toLowerCase()
          .includes(search) ||
        employee.department
          .toLowerCase()
          .includes(search) ||
        employee.role
          .toLowerCase()
          .includes(search)
      );
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }

      if (sortBy === "salary") {
        return (
          Number(b.salary) -
          Number(a.salary)
        );
      }

      if (sortBy === "join_date") {
        return (
          new Date(b.join_date) -
          new Date(a.join_date)
        );
      }

      return 0;
    });

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

      <Notification
        type={notification.type}
        message={notification.message}
        onClose={() =>
          setNotification({
            type: "",
            message: ""
          })
        }
      />

      <main className="main-content">
        {showForm ? (
          <EmployeeForm
            employee={selectedEmployee}
            onEmployeeAdded={handleEmployeeAdded}
            onEmployeeUpdated={
              handleEmployeeUpdated
            }
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
                <div className="loader"></div>
                <span>
                  Loading employees...
                </span>
              </div>
            )}

            {error && (
              <div className="error-message">
                <p>{error}</p>

                <button
                  className="retry-button"
                  onClick={loadEmployees}
                >
                  Try Again
                </button>
              </div>
            )}

            {!loading && !error && (
              <EmployeeTable
                employees={filteredEmployees}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
                searchText={searchText}
                onSearchChange={setSearchText}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            )}
          </>
        )}
      </main>

      <DeleteModal
        employee={employeeToDelete}
        onConfirm={handleDeleteConfirm}
        onCancel={() =>
          setEmployeeToDelete(null)
        }
        deleting={deleting}
      />
    </div>
  );
}

export default App;