function EmployeeTable({ employees, onEdit }) {
  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="7" className="no-data">
                No employees found
              </td>
            </tr>
          ) : (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>

                <td>{employee.name}</td>

                <td>{employee.department}</td>

                <td>{employee.role}</td>

                <td>₹{Number(employee.salary).toLocaleString("en-IN")}</td>

                <td>{employee.join_date}</td>

                <td>
                  <button
                    className="edit-button"
                    onClick={() => onEdit(employee)}
                  >
                    Edit
                  </button>

                  <button className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;