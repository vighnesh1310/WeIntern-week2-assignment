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

module.exports = {
  getEmployees
};