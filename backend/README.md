# Backend – Project1 (Node.js + Express + MongoDB)

This folder contains the backend server code for the full-stack project. It handles user authentication, task management, and serves RESTful APIs.

---

## Folder Structure

backend/
├── controllers/ # (Optional) Request handling logic
├── middleware/ # JWT auth middleware, etc.
├── models/ # Mongoose schemas (e.g., User.js, Task.js)
├── routes/ # API routes (e.g., authRoutes.js, taskRoutes.js)
├── .env # Environment variables (not pushed to GitHub)
├── .gitignore # Files/folders to ignore
├── package.json # NPM dependencies
├── server.js # Entry point of the backend server

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

1. Navigate to the backend folder:

   ```bash
   cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in this directory with the following variables:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the development server:

bash
Copy
Edit
node server.js
The server should now be running at http://localhost:5000
