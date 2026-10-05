import EmployeeTable from "./components/EmployeeTable";
import "./App.css";

function App() {
  const employees = [];

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

        <EmployeeTable employees={employees} />
      </main>
    </div>
  );
}

export default App;