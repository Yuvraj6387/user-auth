# Auth Service

This is a simple authentication service built with Node.js and Express. It allows users to register and log in using their email and password, and it returns a JWT token upon successful login.

## Features

- User registration with email and password
- User login with JWT token generation
- Password hashing using bcrypt
- MongoDB for user data storage
- Middleware for JWT verification

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- JSON Web Token (JWT)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd auth-service
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

### Running the Application

To start the server, run:
```
npm start
```

The server will run on `http://localhost:3000`.

### API Endpoints

- **POST /api/auth/register**
  - Register a new user
  - Request body: `{ "email": "user@example.com", "password": "yourpassword" }`
  
- **POST /api/auth/login**
  - Log in an existing user
  - Request body: `{ "email": "user@example.com", "password": "yourpassword" }`
  - Response: `{ "token": "your_jwt_token" }`

### License

This project is licensed under the MIT License.