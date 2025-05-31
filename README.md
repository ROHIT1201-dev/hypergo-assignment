# hypergo-assignment


# # 🏡 MEN Property Listing Backend

A full-featured RESTful API backend for managing property listings, built with **Node.js**, **Express**, **MongoDB**, and **Redis**.





## This project supports:
- User authentication (JWT)
- CRUD operations for property listings
- Filtering/Searching
- Favoriting properties
- Property recommendation between users
- Deployment with Render + Upstash Redis
## ## ⚙ Installation & Run

## 📂 Dataset

- [CSV Download Link](https://cdn2.gro.care/db424fd9fb74_1748258398689.csv)

### 1. Clone the Repository

```bash
git clone https://github.com/ROHIT1201-dev/hypergo-assignment.git
cd hypergo-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root with the following:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/properties
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://default:*******@redis-15345.crce182.ap-south-1-1.ec2.redns.redis-cloud.com:15345
```
> ✅ You can get the Redis URL from your Redis Console dashboard.
---

### 5. Run the Server

```bash
npm run dev   # For development
npm start     # For production
```
API runs on: `http://localhost:5000`

---

## 📁 Structure

```bash
├── controllers/        # Route controllers
├── models/             # Mongoose models
├── routes/             # Express routes
├── middleware/         # Auth middleware
├── utils/              # utilities used across controllers/middleware
├── config/             # MongoDB & Redis config
├── .env                # Env variables
├── server.js           # Entry point
└── README.md
```

---
## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **Redis (Redis Cloud)**
- **JWT** for auth
- **Render** for backend hosting
- **Postman** for API testing

---

## 📬 API Endpoints

### 🧑‍💼 Auth
```
POST    /api/auth/register           Register a new user and return JWT
POST    /api/auth/login              Login a user and return JWT
(protected)
```

### 🏠 Properties
```
GET     /api/properties              Get all properties (with filters)
POST    /api/properties              Create a new property (auth required)
PUT     /api/properties/:id          Update a property (auth required & only owner)
DELETE  /api/properties/:id          Delete a property (auth required & only owner)
```

### 🔍 Advanced Filtering Example
```
GET /api/properties?city=Delhi&price[lte]=50000&type=Apartment
```

### ❤️ Favorites
```
GET     /api/user/favorites               Get all favorite properties of the user
POST    /api/user/favorites/:propertyId   Add property to favorites
DELETE  /api/user/favorites/:propertyId   Remove property from favorites
```

### 📩 Recommendations
```
POST    /api/user/recommend               Recommend a property to another user
GET     /api/user/recommend/received              Get properties recommended to the logged-in user
```

> 🔐 All routes except `/auth/register` and `/auth/login`  and `/api/properties` are protected and require a valid JWT in the `Authorization` header .

---

## 🌐 Deployment
- 🟣 **Backend**: Hosted on [Render](https://hypergo-assignment-backend.onrender.com)

---

## 👤 Author

**Rohit Raj**  
GitHub: [@yourusername](https://github.com/ROHIT1201-dev)
