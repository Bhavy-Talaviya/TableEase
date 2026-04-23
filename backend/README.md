# TableEase — Backend API

> Node.js + Express.js REST API for the **TableEase** restaurant table reservation system.

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # DB connection, logger, CORS, and other app configs
│   ├── controllers/     # HTTP request handlers (thin layer, delegates to services)
│   ├── middleware/      # Auth guards, error handler, validators, rate limiter
│   ├── models/          # Database schemas / ORM models
│   ├── routes/          # Express routers mapped to controllers
│   ├── services/        # Business logic layer
│   ├── utils/           # Reusable helpers and constants
│   ├── app.js           # Express app bootstrap (middleware + routes)
│   └── server.js        # HTTP server entry point
├── .env                 # Environment variables (DO NOT commit)
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Copy `.env` and fill in your values:
```bash
cp .env .env.local
```

### 3. Start the development server
```bash
npm run dev
```

The API will be available at `http://localhost:5000`.

---

## 🔧 Scripts

| Script          | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Start server with nodemon (hot reload)|
| `npm start`     | Start server in production mode      |

---

## 📦 Core Dependencies

| Package   | Purpose                        |
|-----------|--------------------------------|
| express   | Web framework                  |
| dotenv    | Environment variable management|
| cors      | Cross-Origin Resource Sharing  |

---

## 🗺️ Planned API Endpoints

| Method | Endpoint                     | Description                  |
|--------|------------------------------|------------------------------|
| POST   | `/api/auth/register`         | Register a new user          |
| POST   | `/api/auth/login`            | Login and receive JWT        |
| GET    | `/api/tables`                | List all tables              |
| POST   | `/api/reservations`          | Create a reservation         |
| GET    | `/api/reservations/:id`      | Get reservation details      |
| PUT    | `/api/reservations/:id`      | Update a reservation         |
| DELETE | `/api/reservations/:id`      | Cancel a reservation         |

---

## 🛠️ Tech Stack (Planned)

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose) _or_ PostgreSQL (Sequelize / Prisma)
- **Auth**: JWT
- **Validation**: Joi / Zod
- **Email**: Nodemailer

---

*TableEase © 2026*
