# Jokes Mini-Project

## Project Overview
The Jokes Mini-Project is a fun web application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to browse, add, and delete jokes. This application demonstrates CRUD functionality and the seamless integration of frontend and backend technologies.

---

## Features
- **View Jokes**: Browse a collection of jokes stored in the database.
- **Add Jokes**: Submit your own jokes to the list.
- **Delete Jokes**: Remove jokes you no longer want in the collection.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Real-time Updates**: Dynamically updates the list of jokes without reloading the page.

---

## Technologies Used

### Frontend
- **React**: JavaScript library for building the user interface.
- **Axios**: For making API requests to the backend.
- **CSS / Tailwind CSS**: Styling for the application.
- **React Router**: For handling frontend navigation.

### Backend
- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for creating RESTful APIs.
- **MongoDB**: Database for storing jokes.
- **Mongoose**: For schema-based interaction with MongoDB.

---

## Installation Guide

### Prerequisites
- Node.js (v16 or later)
- MongoDB installed locally or access to a cloud-based MongoDB instance
- A modern web browser
- A code editor (optional for modifications)

---

### Steps

#### 1. Clone the Repository:
   ```bash
   git clone https://github.com/Idrees-28/jokes-mini-project.git
   ```

#### 2. Navigate to the Project Directory:
   ```bash
   cd jokes-mini-project
   ```

#### 3. Install Dependencies:

   **For Backend:**
   ```bash
   cd backend
   npm install
   ```

   **For Frontend:**
   ```bash
   cd frontend
   npm install
   ```

#### 4. Configure Environment Variables:
Create a `.env` file in the `backend` directory and add the following:
   ```
   PORT=5000
   DB_URI=your_database_connection_string
   ```

#### 5. Start the Application:

   **Start the Backend:**
   ```bash
   cd backend
   npm start
   ```

   **Start the Frontend:**
   ```bash
   cd frontend
   npm start
   ```

#### 6. Open the App:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Endpoints

### Backend REST API
- **GET /jokes**: Fetch the list of all jokes.
- **POST /jokes**: Add a new joke to the collection.
- **DELETE /jokes/:id**: Delete a joke by its ID.

---

## Contribution Guidelines
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## Acknowledgments
- **React**: For building the interactive frontend.
- **Node.js**: For creating a robust backend server.
- **Express**: For simplifying REST API creation.
- **MongoDB**: For database management.

---

## Contact
For any inquiries, feel free to reach out:
- **Email**: idreesjee2810@gmail.com
- **GitHub**: [Idrees-28](https://github.com/Idrees-28)

---
