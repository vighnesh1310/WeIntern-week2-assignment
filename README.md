# WeIntern Week 2 Assignments

A comprehensive repository containing full-stack web development projects built as part of the **WeIntern Week 2** curriculum.

---

## 📁 Repository Overview

This repository includes three dedicated projects covering frontend design, backend API development, database integration, and secure user authentication:

```
week2-assignments/
│
├── 🏢 company-website/                 # Multi-page responsive corporate website
│   ├── css/style.css                   # Custom modern CSS design system
│   ├── js/script.js                    # Mobile menu & interactive form validation
│   ├── index.html                      # Homepage with metrics & service highlights
│   ├── about.html                      # Story, mission, vision & core values
│   ├── services.html                   # Detailed services & tech stack overview
│   └── contact.html                    # Contact details & validated inquiry form
│
├── 🔐 authentication-system/           # Full-stack JWT Authentication System
│   ├── backend/                        # Node.js, Express, MySQL, bcrypt & JWT API
│   └── frontend/                       # React + Vite authentication user interface
│
└── 👥 employee-management-system/      # Full-stack CRUD Employee Management System
    ├── backend/                        # Node.js, Express & MySQL REST API
    ├── frontend/                       # React + Vite dashboard for employee records
    └── postman/                        # Postman API test collections
```

---

## 🚀 Projects Summary

### 1. [Company Website](./company-website/)
- **Tech Stack:** HTML5, CSS3 (Vanilla / Custom Tokens), JavaScript (ES6+)
- **Description:** A corporate website for **NEXORA Technology** featuring a modern layout, responsive navigation, service cards, mission/vision sections, and an interactive contact form with instant validation.
- **Key Features:**
  - Responsive desktop & mobile design with drawer navigation.
  - Sticky glassmorphic navbar with active page indicators.
  - Client-side form validation with real-time feedback.
  - Custom design tokens with CSS variables for seamless theme consistency.

### 2. [Authentication System](./authentication-system/)
- **Tech Stack:** React, Vite, Node.js, Express, MySQL, JSON Web Tokens (JWT), bcrypt
- **Description:** A secure authentication platform supporting user registration, encrypted password hashing, login token generation, and protected route access.
- **Key Features:**
  - Password hashing with `bcrypt`.
  - Stateless authentication using `jsonwebtoken` (JWT).
  - Protected API routes with custom authorization middleware.
  - Interactive React frontend with token storage & route protection.

### 3. [Employee Management System](./employee-management-system/)
- **Tech Stack:** React, Vite, Node.js, Express, MySQL2
- **Description:** A full-featured employee management portal allowing administrators to create, read, update, and delete (CRUD) employee records with search and filter capabilities.
- **Key Features:**
  - Complete RESTful API endpoints for employee data.
  - MySQL database connection pooling.
  - Clean React interface with tabular record view and modal forms.
  - Exported Postman collections for rapid API testing.

---

## 🛠️ Quick Start & Setup

### Running the Company Website
Simply open `company-website/index.html` in any modern web browser or serve it using VS Code Live Server / standard HTTP server:
```bash
cd company-website
# Open index.html in your browser
```

### Running the Full-Stack Applications

#### Authentication System:
```bash
# 1. Start Backend
cd authentication-system/backend
npm install
npm run dev

# 2. Start Frontend
cd ../frontend
npm install
npm run dev
```

#### Employee Management System:
```bash
# 1. Start Backend
cd employee-management-system/backend
npm install
npm run dev

# 2. Start Frontend
cd ../frontend
npm install
npm run dev
```

---

## 📜 License
This repository is maintained for educational and internship evaluation purposes under the **WeIntern** program.
