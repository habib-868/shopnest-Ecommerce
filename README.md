# 🛍️ ShopNest - Full Stack MERN E-Commerce Platform

ShopNest is a modern full-stack MERN E-Commerce application built with React, Node.js, Express, and MongoDB.

The platform includes authentication, product management, cart functionality, order handling, payment integration, admin features, and a responsive frontend UI.

---

# 🚀 Features

## 👤 Authentication

* User Registration & Login
* JWT Authentication
* Protected Routes
* Role-Based Access (Admin/User)

## 🛒 E-Commerce Features

* Product Listing
* Product Details
* Add to Cart
* Order Placement
* Order History
* Razorpay Payment Integration

## 📦 Admin Features

* Manage Products
* View Orders
* Update Order Status
* Analytics APIs

## ⚡ Technical Features

* REST API Architecture
* MongoDB Database
* Redux State Management
* Secure Password Hashing
* Email Notifications
* Cloudinary Image Uploads
* Concurrent Frontend + Backend Development Setup

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Redux
* React Router
* Axios
* CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Nodemailer
* Razorpay
* Cloudinary

---

# 📂 Project Structure

```bash
ShopNest/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── utils/
│   ├── uploads/
│   ├── seed.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── package.json
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=8080

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RAZOR_KEY_ID=your_razorpay_key_id
RAZOR_KEY_SECRET=your_razorpay_secret
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/habib-868/shopnest-Ecommerce.git
cd shopnest-Ecommerce
```

## Install Dependencies

```bash
npm run install-all
```

---

# ▶️ Run Project

## Start Frontend + Backend Together

```bash
npm run dev
```

## Backend Runs On

```bash
http://localhost:8080
```

## Frontend Runs On

```bash
http://localhost:3000
```

---

# 🌱 Seed Dummy Data

```bash
npm run seed
```

This inserts:

* Demo Users
* Products
* Orders

---

# 🔐 Demo Credentials

## Admin Login

```txt
Email: admin@shopnest.com
Password: password123
```

---

# 📸 Screenshots

*Add project screenshots here later.*

---

# 🚀 Future Improvements

* Wishlist Functionality
* Product Reviews
* Search & Filters
* Responsive Mobile UI
* Admin Dashboard UI
* Stripe Integration
* Deployment

---

# 👨‍💻 Author

## Habibullah

* 📍 Kanki, West Bengal
* 💼 LinkedIn: https://linkedin.com/in/md-habibullah-743594207
* 💻 GitHub: https://github.com/habib-868

---

# ⭐ Support

If you like this project, consider giving it a star on GitHub ⭐
