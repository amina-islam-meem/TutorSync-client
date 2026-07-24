# 📚 TutorSync — Online Tutor Booking Platform

TutorSync is a modern full-stack tutoring platform where students can explore available tutors, view detailed tutor profiles, book sessions, and manage their bookings with secure authentication and protected routes.

## 🔗 Live Links

- 🌐 Live Site: [https://tutorsync-omega.vercel.app](https://tutorsync-omega.vercel.app)
- 🚀 Backend API: [https://tutorsync-server.onrender.com](https://tutorsync-server.onrender.com)
- 💻 Client Repository: [https://github.com/amina-islam-meem/TutorSync-client](https://github.com/amina-islam-meem/TutorSync-client)

---

## ✨ Features

### ✅ Authentication (Better Auth)
- Email & Password Login
- Google OAuth (optional)
- JWT-based session strategy
- Secure HTTP-only cookies
- Protected routes (middleware)

### ✅ Tutor System
- Browse all tutors
- View tutor details
- Filter & search tutors
- Add new tutor (for tutors)
- Update & delete tutor

### ✅ Wishlist System
- Add to Favorites
- Remove from Favorites
- My Favorites page
- Secure user-specific wishlist

### ✅ Booking System
- Book tutor sessions
- Prevent booking before start date
- Auto decrease available slots
- Cancel booking
- Auto restore slots after cancellation


---

## 🛠️ Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Better Auth
- React Icons
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB (Native Driver)
- Jose-cjs (JWT Verification)
- CORS
- dotenv

### Deployment

- Frontend: Vercel
- Backend: Render

---

## 📂 Project Structure

```bash
tutorsync-client/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── TutorCard.jsx
│   │   │   └── BookSessionClient.jsx
│   │   │
│   │   ├── tutors/
│   │   │   ├── page.jsx
│   │   │   └── [id]/page.jsx
│   │   │
│   │   ├── my-booked-sessions/
│   │   ├── add-tutor/
│   │   ├── my-tutors/
│   │   ├── login/
│   │   ├── signup/
│   │   └── page.jsx
│   │
│   ├── lib/
│   │   ├── auth.js
│   │   └── auth-client.js
│
├── public/
├── .env.local
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Before running the project locally, make sure you have:

- Node.js (v18 or later)
- MongoDB Atlas Account (Recommended)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/amina-islam-meem/TutorSync-client.git

cd TutorSync-client
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Backend API
NEXT_PUBLIC_SERVER_URL=https://tutorsync-server.onrender.com

# Better Auth
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_secret_key

# Database (if required by Better Auth)
DATABASE_URL=your_database_url
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 🔧 Backend Environment Variables

Create a `.env` file in the backend project:

```env
PORT=7000

MONGODB_URI=your_mongodb_connection_string

CLIENT_URL=http://localhost:3000
```

---

## 🔐 Authentication Flow

TutorSync uses Better Auth for secure authentication.

### Authentication Process

1. User signs up or logs in.
2. Better Auth generates a JWT.
3. Backend protected routes verify the token through JWKS.
4. Authorized users gain access to protected resources.

### Protected Routes

- `/tutors/[id]`
- `/add-tutor`
- `/my-tutors`
- `/my-booked-sessions`
- `/my-favourites`

---

## 📸 Pages Overview

| Page | Route | Description |
|------|--------|-------------|
| Home | `/` | Landing page with featured tutors |
| Tutors | `/tutors` | Browse all tutors |
| Tutor Details | `/tutors/[id]` | View tutor profile |
| My Booked Sessions | `/my-booked-sessions` | Manage booked sessions |
| Add Tutor | `/add-tutor` | Create tutor profile |
| My Tutors | `/my-tutors` | Manage personal tutor listings |
| Favorites| `/my-favorites` | Wishlist page |
| Login | `/login` | User authentication |
| Sign Up | `/signup` | Create new account |

---

##  Future Improvements

TutorSync is designed to be scalable and production-ready. Below are planned enhancements for future versions:

###  Tutor Rating & Review System
- Students can leave ratings and written reviews after sessions
- 1–5 star rating system
- Average rating displayed on tutor cards
- Review moderation capability
- Sorting tutors by rating

---

###  Stripe Payment Integration
- Secure online payments before booking confirmation
- Payment verification via Stripe Webhooks
- Booking auto-confirmation after successful payment
- Transaction history for users
- Refund handling for cancelled sessions

---

### Tutor Dashboard Analytics
- Total bookings overview
- Monthly earnings statistics
- Session history insights
- Student count tracking
- Graph-based performance analytics (Recharts or Chart.js)

---

###  Email Notifications
- Booking confirmation emails
- Cancellation notifications
- Payment receipts
- Reminder emails before scheduled sessions
- Admin notification system

---

###  Real-Time Chat System
- Direct messaging between student and tutor
- WebSocket-based communication (Socket.io)
- Message history storage in MongoDB
- Online/offline user indicators
- Secure authenticated chat sessions

---

###  Admin Panel
- Admin role-based access control
- View and manage all users
- Monitor bookings and payments
- Ban or suspend users
- Platform-wide analytics dashboard

---

 These improvements will elevate TutorSync into a fully production-grade tutoring marketplace platform.

## 🏗️ Production Build

```bash
npm run build

npm start
```

---

##  Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m "Add AmazingFeature"
```

4. Push to GitHub

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

---

##  Author

### Amina Islam Meem

- GitHub: [@amina-islam-meem](https://github.com/amina-islam-meem)

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to give it a star on GitHub!