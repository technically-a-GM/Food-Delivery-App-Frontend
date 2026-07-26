# 🍔 Food Delivery App

A full-stack food ordering platform built using the **MERN Stack**, featuring secure authentication with **Auth0**, online payments through **Stripe**, image uploads via **Cloudinary**, and a responsive modern UI built with **React** and **Tailwind CSS**.

The application allows users to discover restaurants, browse menus, place orders securely, and track their orders. Restaurant owners can manage their restaurants, menus, and customer orders through a dedicated dashboard.

---

## 🚀 Live Demo

### Frontend
https://food-delivery-app-frontend-r6po.onrender.com/

### Backend API
https://food-delivery-app-backend-0zi3.onrender.com/

---

# ✨ Features

## 👤 Authentication

- Secure login/signup using Auth0
- JWT-based authorization
- Protected routes
- Persistent user sessions

---

## 🍽 Restaurant Discovery

- Search restaurants by city
- Search restaurants by restaurant name
- Filter restaurants by cuisines
- Sort restaurants by:
  - Best Match
  - Delivery Price
  - Estimated Delivery Time
- Pagination support

---

## 🛒 Ordering System

- Add items to cart
- Increase item quantity
- Remove items from cart
- Persistent cart using Session Storage
- Order summary with pricing

---

## 💳 Secure Payments

- Stripe Checkout Integration
- Secure online payment flow
- Checkout session generation from backend
- Order creation after successful payment

---

## 🏪 Restaurant Management

Restaurant owners can:

- Create their restaurant
- Upload restaurant images
- Edit restaurant details
- Manage menu items
- Update cuisines
- Update delivery pricing
- Update estimated delivery time

---

## 📦 Order Management

Restaurant owners can:

- View customer orders
- Update order status
- Track ongoing orders

Customers can:

- View current orders
- Track order status

---

## 🖼 Image Upload

- Cloudinary Integration
- Image optimization
- Secure cloud storage

---

## 📱 Responsive Design

Fully responsive interface optimized for:

- Desktop
- Tablet
- Mobile

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- React Router
- TanStack React Query
- React Hook Form
- Zod
- Tailwind CSS
- Shadcn/UI
- Lucide Icons

---

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

---

## Authentication

- Auth0

---

## Payments

- Stripe

---

## Image Storage

- Cloudinary

---

## Deployment

- Render

---

# 📂 Project Structure

```
Food_Delivery_App/

├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── forms/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── layouts/
│   │   └── types.ts
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── config/
│   │   └── index.ts
│
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/<your-github-username>/<repository-name>.git
```

```bash
cd Food_Delivery_App
```

---

## Install Frontend

```bash
cd frontend
npm install
```

---

## Install Backend

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

## Frontend

Create a `.env` file inside `frontend/`

```env
VITE_API_BASE_URL=
VITE_AUTH0_DOMAIN=
VITE_AUTH0_CLIENT_ID=
VITE_AUTH0_CALLBACK_URL=
VITE_AUTH0_AUDIENCE=
VITE_STRIPE_PUBLISHABLE_KEY=
```

---

## Backend

Create a `.env` file inside `backend/`

```env
MONGODB_CONNECTION_STRING=
AUTH0_AUDIENCE=
AUTH0_ISSUER_BASE_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
STRIPE_API_KEY=
FRONTEND_URL=
```

---

# ▶️ Running Locally

## Backend

```bash
npm run dev
```

Runs on

```
http://localhost:7000
```

---

## Frontend

```bash
npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 📡 API Overview

### User

```
POST /api/my/user
PUT  /api/my/user
GET  /api/my/user
```

---

### Restaurant

```
GET    /api/restaurant/search/:city
GET    /api/restaurant/:restaurantId
POST   /api/my/restaurant
PUT    /api/my/restaurant
GET    /api/my/restaurant
```

---

### Orders

```
POST /api/order/checkout/create-checkout-session
GET  /api/my/order
GET  /api/my/restaurant/order
PATCH /api/my/restaurant/order/:orderId/status
```

---

# 🧠 Concepts Implemented

- RESTful API Design
- JWT Authentication
- Protected Routes
- React Query Data Fetching
- Optimistic UI Updates
- Form Validation with Zod
- Schema-based Validation
- Pagination
- Search & Filtering
- File Uploads
- Payment Gateway Integration
- Responsive UI
- Environment Configuration
- Secure API Design

---

# 📸 Screenshots

Add screenshots here to showcase:

- Home Page
- Restaurant Search
- Restaurant Details
- Cart
- Checkout
- Manage Restaurant
- Order Dashboard

---

# 🚀 Future Improvements

- Email Notifications
- Google Maps Integration
- Live Order Tracking
- Push Notifications
- Restaurant Reviews
- Ratings
- Wishlist
- Admin Dashboard
- Coupons & Discounts
- Dark Mode

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Abhinav Tiwari**


