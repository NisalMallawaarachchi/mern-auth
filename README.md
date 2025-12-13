# 🔐 MERN Authentication Practice Project

This project is a **learning-focused MERN stack authentication system** built to understand **authentication and authorization concepts clearly and practically**.

⚠️ **Important**: This project is **NOT production-ready**. It is created **only for learning and practice purposes**.

---

## 🎯 Purpose of This Project

The main goal of this project is to:
- Understand **how authentication works internally**
- Learn **JWT-based authentication**
- Learn the difference between **authentication vs authorization**
- Practice backend security concepts step-by-step
- Build confidence with Express, MongoDB, and middleware

This project focuses more on **clarity and understanding** rather than features.

---

## 🧠 What You Will Learn

- User registration and login flow
- Password hashing using `bcrypt`
- JWT token creation and verification
- Cookie-based authentication
- Protected routes using middleware
- Basic role-based authorization
- Secure handling of environment variables

---

## 🛠 Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **JWT (JSON Web Tokens)**
- **bcrypt**
- **cookie-parser**

### Frontend (Optional / Future)
- **React.js**
- **Axios**

---

## 📁 Project Structure

```
mern-auth-project/
│
├── server/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   └── .env
│
├── client/              # React frontend (optional)
│
├── .gitignore
├── README.md
└── package.json
```

---

## 🔐 Authentication Flow (Simple Explanation)

1. User registers with email and password
2. Password is hashed and stored in MongoDB
3. User logs in with credentials
4. Server verifies credentials
5. Server generates a JWT
6. JWT is stored in an HttpOnly cookie
7. Every protected request sends the cookie
8. Middleware verifies JWT on each request

---

## 🚪 Authorization Flow

- After authentication, user identity is known
- User permissions are checked (e.g., admin, user)
- Access is granted or denied based on role

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern-auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

⚠️ **Never commit `.env` files to GitHub**

---

## ▶️ Running the Project

### Backend
```bash
cd server
npm install
npm run dev
```

Server will run on:
```
http://localhost:5000
```

---

## 🧪 API Endpoints (Learning Scope)

| Method | Endpoint | Description |
|------|--------|------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/profile | Protected route |

---

## 📌 Best Practices Followed

- Passwords are never stored in plain text
- JWT secrets stored in environment variables
- HttpOnly cookies used for security
- Middleware-based authentication evaluation
- Clean project structure

---

## 🚫 Not Included (On Purpose)

- OAuth (Google, Facebook)
- Refresh tokens
- Advanced role systems
- Production-level security configs

These can be added **after understanding the basics**.

---

## 📚 Learning Disclaimer

This project is part of a **learning journey** to understand authentication deeply.
Mistakes, simplifications, and experimentation are intentional.

---

## 🤝 Author

**Nisal Rasika Mallawaarachchi**  
Learning MERN Stack & Backend Authentication

---

## ⭐ Final Note

If you understand **why** each authentication step exists — you’ve already won.

Happy learning 🚀