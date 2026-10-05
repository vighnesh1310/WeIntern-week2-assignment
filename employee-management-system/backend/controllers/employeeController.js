const pool = require("../config/db");

const getEmployees = async (req, res) => {
  try {
    const [employees] = await pool.query(
      "SELECT * FROM employees ORDER BY id DESC"
    );

    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error.message);

    res.status(500).json({
      message: "Failed to fetch employees"
    });
  }
};

const createEmployee = async (req, res) => {
  try {
    const {
      name,
      department,
      role,
      salary,
      join_date
    } = req.body;

    if (!name || !department || !role || !salary || !join_date) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    if (Number(salary) <= 0) {
      return res.status(400).json({
        message: "Salary must be greater than 0"
      });
    }

    const [result] = await pool.query(
      `INSERT INTO employees
       (name, department, role, salary, join_date)
       VALUES (?, ?, ?, ?, ?)`,
      [
        name.trim(),
        department.trim(),
        role.trim(),
        salary,
        join_date
      ]
    );

    const [newEmployee] = await pool.query(
      "SELECT * FROM employees WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json({
      message: "Employee created successfully",
      employee: newEmployee[0]
    });
  } catch (error) {
    console.error("Error creating employee:", error.message);

    res.status(500).json({
      message: "Failed to create employee"
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      department,
      role,
      salary,
      join_date
    } = req.body;

    // Check required fields
    if (!name || !department || !role || !salary || !join_date) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Check salary
    if (Number(salary) <= 0) {
      return res.status(400).json({
        message: "Salary must be greater than 0"
      });
    }

    // Check if employee exists
    const [existingEmployee] = await pool.query(
      "SELECT * FROM employees WHERE id = ?",
      [id]
    );

    if (existingEmployee.length === 0) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    // Update employee
    await pool.query(
      `UPDATE employees
       SET name = ?,
           department = ?,
           role = ?,
           salary = ?,
           join_date = ?
       WHERE id = ?`,
      [
        name.trim(),
        department.trim(),
        role.trim(),
        salary,
        join_date,
        id
      ]
    );

    // Get updated employee
    const [updatedEmployee] = await pool.query(
      "SELECT * FROM employees WHERE id = ?",
      [id]
    );

    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee[0]
    });
  } catch (error) {
    console.error("Error updating employee:", error.message);

    res.status(500).json({
      message: "Failed to update employee"
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if employee exists
    const [existingEmployee] = await pool.query(
      "SELECT * FROM employees WHERE id = ?",
      [id]
    );

    if (existingEmployee.length === 0) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    // Delete employee
    await pool.query(
      "DELETE FROM employees WHERE id = ?",
      [id]
    );

    res.status(200).json({
      message: "Employee deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting employee:", error.message);

    res.status(500).json({
      message: "Failed to delete employee"
    });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
