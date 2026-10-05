function EmployeeTable({
  employees,
  onEdit,
  onDelete,
  searchText,
  onSearchChange,
  sortBy,
  onSortChange
}) {
  return (
    <>
      <div className="table-toolbar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchText}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
          />

          {searchText && (
            <button
              className="clear-search"
              onClick={() => onSearchChange("")}
            >
              Clear
            </button>
          )}
        </div>

        <div className="sort-box">
          <label htmlFor="sortBy">Sort by:</label>

          <select
            id="sortBy"
            value={sortBy}
            onChange={(event) =>
              onSortChange(event.target.value)
            }
          >
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="salary">Salary</option>
            <option value="join_date">Join Date</option>
          </select>
        </div>
      </div>

      <div className="table-info">
        <span>
          {employees.length}{" "}
          {employees.length === 1
            ? "employee"
            : "employees"}
        </span>
      </div>

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

                  <td>
                    ₹
                    {Number(
                      employee.salary
                    ).toLocaleString("en-IN")}
                  </td>

                  <td>{employee.join_date}</td>

                  <td>
                    <button
                      className="edit-button"
                      onClick={() =>
                        onEdit(employee)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-button"
                      onClick={() =>
                        onDelete(employee)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmployeeTable;