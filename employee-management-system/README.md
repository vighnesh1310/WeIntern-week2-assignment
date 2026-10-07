# Employee Management System (EMS)

A full-stack CRUD application for managing organizational employee records, built with **React (Vite)** on the frontend and **Node.js/Express + MySQL** on the backend.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Modular CSS
- **Backend:** Node.js, Express.js, MySQL2, `cors`, `dotenv`
- **Database:** MySQL
- **Testing:** Postman API Collections

---

## 📁 Directory Structure

```
employee-management-system/
│
├── backend/
│   ├── config/              # MySQL connection pool configuration
│   ├── controllers/         # CRUD logic for employees
│   ├── routes/              # Employee REST route definitions
│   ├── .env                 # Database connection environment variables
│   ├── package.json         # Backend dependencies & npm scripts
│   └── server.js            # Express server configuration
│
├── frontend/
│   ├── src/                 # React components (Table, Forms, Modals)
│   ├── package.json         # Frontend dependencies & scripts
│   └── vite.config.js       # Vite build config
│
└── postman/                 # Exported Postman JSON collections for API testing
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/employees` | Get list of all employees |
| `GET` | `/api/employees/:id` | Get details for a specific employee |
| `POST` | `/api/employees` | Create a new employee record |
| `PUT` | `/api/employees/:id` | Update an existing employee record |
| `DELETE` | `/api/employees/:id` | Delete an employee record |
| `GET` | `/api/test-db` | Verify MySQL database connectivity |

---

## 🚀 Setup & Execution Guide

### 1. Database Configuration
Ensure MySQL is running and set up `backend/.env`:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_management_db
```

### 2. Run Backend API
```bash
cd backend
npm install
npm run dev
# Server runs on http://localhost:5000
```

### 3. Run Frontend Dashboard
```bash
cd ../frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```
