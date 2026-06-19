# 📚 TutorSync — Online Tutor Booking Platform

TutorSync is a modern full-stack tutoring platform where students can explore available tutors, view detailed tutor profiles, book sessions, and manage their bookings with secure authentication and protected routes.

## 🔗 Live Links

- 🌐 Live Site: [https://tutorsync-omega.vercel.app](https://tutorsync-omega.vercel.app)
- 🚀 Backend API: [https://tutorsync-server.onrender.com](https://tutorsync-server.onrender.com)
- 💻 Client Repository: [https://github.com/amina-islam-meem/TutorSync-client](https://github.com/amina-islam-meem/TutorSync-client)

---

## ✨ Features

- 👩‍🏫 Browse and explore available tutors
- 🔎 Search tutors by name
- 📅 Filter tutors based on availability dates
- 🔐 Secure authentication using Better Auth
- 👤 User profile management
- 📚 Book tutoring sessions
- 📝 View booked sessions in "My Booked Sessions"
- ➕ Add new tutor profiles
- ✏️ Update and manage tutor information
- 🗑️ Delete tutor profiles
- 🔒 Protected routes with JWT verification
- 📱 Fully responsive design for all devices

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
| Login | `/login` | User authentication |
| Sign Up | `/signup` | Create new account |

---

## 🏗️ Production Build

```bash
npm run build

npm start
```

---

## 🤝 Contributing

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

## 👩‍💻 Author

### Amina Islam Meem

- GitHub: [@amina-islam-meem](https://github.com/amina-islam-meem)

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to give it a star on GitHub!