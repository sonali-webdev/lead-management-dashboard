# Lead Management Dashboard

A mini CRM-style Lead Management Dashboard built using a full-stack approach.  
This project allows users to manage leads with search, filters, pagination, analytics, and a basic login system.

---

## 🚀 Live Demo

- **Frontend (Vercel):**  
  👉 https://YOUR_FRONTEND_URL.vercel.app

- **Backend (Render):**  
  👉 https://YOUR_BACKEND_URL.onrender.com

---

## 🛠️ Tech Stack

### Frontend

- React (Vite)
- React Router DOM
- Axios
- CSS (Flexbox, Responsive UI)

### Backend

- Node.js
- Express.js
- MongoDB Atlas (Free Tier)
- Mongoose

---

## ✨ Features

- Basic Login Screen (client-side auth)
- Leads Dashboard with:
  - Search by name
  - Filter by status (New, Contacted, Converted)
  - Server-side pagination
- Lead Details View
- Analytics:
  - Total Leads
  - Converted Leads
  - Leads grouped by status
- Mobile-responsive UI
- Deployed using free hosting providers

---

## 📂 Project Structure

lead-management-dashboard/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── seed/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
└── README.md

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

MONGO_URI=your_mongodb_connection_string
PORT=5000

### Frontend (`frontend/.env`)

VITE_API_URL=https://lead-management-dashboard-ei2j.onrender.com

---

## 🌱 Seeding Dummy Data

The project includes a seed script to generate dummy leads.

### Steps:

```bash
cd backend
npm install @faker-js/faker
node seed/seedLeads.js
This seeds 500 dummy leads into MongoDB.

🧪 Running Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

🔐 Demo Credentials

Basic authentication is implemented (client-side).
Email: any email
Password: any password

📌 Notes

MongoDB Atlas free tier is used.
Backend is deployed on Render.
Frontend is deployed on Vercel.
Environment variables are securely managed and not pushed to GitHub.

👤 Author
Sonali Gupta

```
