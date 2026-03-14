# 🚀 Bulk User Management System

## Overview
The **Bulk User Management System** is a backend application built to efficiently manage large-scale user operations. It allows creating and updating multiple users in a single request, reducing the number of API calls and improving system performance.

The system uses **MongoDB** to store user information and demonstrates scalable REST APIs capable of handling **bulk operations (up to 5000 users per request)**.

---

## Features
- Bulk **User Creation**
- Bulk **User Update using PUT**
- Handles **up to 5000 users in a single request**
- Efficient processing of large datasets
- User data stored in **MongoDB**

---

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

---

## Project Structure

```
bulk-user-management/
│
├── node_modules/
├── src/
│   ├── Db/
│   │   └── db.js
│   │
│   ├── model/
│   │   └── userModel.js
│   │
│   └── Route/
│       └── userRoute.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── readme.md
```

---

## API Endpoints

Method | Endpoint | Description
------ | -------- | -----------
POST | /api/users/bulk-create | Create multiple users
PUT | /api/users/bulk-update | Update existing users

---

## Example Request (Bulk Create Users)

[
 { "name": "John Doe", "email": "john@example.com", "age": 25 },
 { "name": "Jane Smith", "email": "jane@example.com", "age": 28 }
]

---

## API Request Flow

Client Request  
      ↓  
API Endpoint (POST / PUT)  
      ↓  
Express Route Handler   
      ↓  
Mongoose Model  
      ↓  
MongoDB Database  
      ↓  
Response Sent Back to Client

---

## Run the Project

Install dependencies

npm install

Start the server

npm start

---

## Purpose
This project demonstrates **efficient bulk data handling and scalable backend API design** using **Node.js, Express.js, and MongoDB**.

---

## Author
Backend project demonstrating **bulk API operations and scalable system design**.