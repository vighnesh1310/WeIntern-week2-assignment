# Full-Stack Authentication System

A secure user authentication platform featuring a **Node.js/Express REST API backend** connected to **MySQL** and a **React (Vite) frontend**.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MySQL2, `bcrypt` (password hashing), `jsonwebtoken` (JWT), `cors`, `dotenv`
- **Frontend:** React.js, Vite, Modern CSS
- **Database:** MySQL relational database

---

## 📁 Directory Structure

```
authentication-system/
│
├── backend/
│   ├── config/              # Database connection pool setup
│   ├── controllers/         # Business logic for registration, login, profile
│   ├── middleware/          # JWT authentication verification middleware
│   ├── routes/              # Auth & User API route endpoints
│   ├── .env                 # Environment variables (DB credentials, JWT secret)
│   ├── package.json         # Backend dependencies & npm scripts
│   └── server.js            # Express application entry point
│
└── frontend/
    ├── src/                 # React components, pages, state & API callers
    ├── package.json         # Frontend dependencies & Vite scripts
    └── vite.config.js       # Vite configuration
```

---

## 🔐 API Endpoints

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new user account | No |
| `POST` | `/api/auth/login` | Authenticate user & return JWT token | No |
| `GET` | `/api/users/profile` | Retrieve logged-in user profile | **Yes (JWT Required)** |

---

## 🚀 Setup & Execution Guide

### 1. Database Configuration
Create a MySQL database and update your `backend/.env` file:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=auth_system_db
JWT_SECRET=your_jwt_secret_key
```

### 2. Run Backend Server
```bash
cd backend
npm install
npm run dev
# Server runs on http://localhost:5000
```

### 3. Run Frontend Application
```bash
cd ../frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```
