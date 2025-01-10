# Project: Cryptocurrency Tracker

![Tech Stack](path-to-your-image.png)

## Overview
The **Cryptocurrency Tracker** is a Node.js server-side application integrated with MongoDB to:
- Fetch the latest price, market cap, and 24-hour change data for Bitcoin, Matic, and Ethereum using the CoinGecko API.
- Provide APIs to retrieve the latest cryptocurrency data and calculate the standard deviation of prices over the last 100 records.
- Automate periodic updates using a background job.

This project demonstrates the use of robust backend development practices, including database management, API integration, and statistical computation.

---

## Features
1. **Background Job**
   - Runs every 2 hours to fetch and store cryptocurrency data.
   - Retrieves details such as price, market cap, and 24-hour change for Bitcoin, Matic, and Ethereum.

2. **APIs**
   - **`GET /stats`**: Fetches the latest data for a specified cryptocurrency.
   - **`GET /deviation`**: Computes the standard deviation of the last 100 prices for a specified cryptocurrency.

3. **Database Management**
   - Data is stored in MongoDB with schemas designed for efficient storage and retrieval.

4. **Optional Deployment**
   - Deployed on MongoDB Atlas for database hosting.
   - Application hosted on a cloud platform like Heroku, AWS, or GCP.

---

## Technologies Used
- **Node.js**: Backend runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing cryptocurrency data.
- **Mongoose**: ODM for MongoDB.
- **Axios**: For making API requests.
- **CoinGecko API**: Source for cryptocurrency data.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/)
- VS Code (or your preferred code editor)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/cryptocurrency-tracker.git
   cd cryptocurrency-tracker
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
   ```

4. **Run the Application**
   - **Start the Server:**
     ```bash
     npm start
     ```
   - **Run in Development Mode:**
     ```bash
     npm run dev
     ```

5. **Test the APIs**
   Use [Thunder Client](https://www.thunderclient.com/) (VS Code) or Postman to test the endpoints.

---

## API Documentation

### 1. **`GET /stats`**
   - **Description:** Fetches the latest data for the requested cryptocurrency.
   - **Query Parameters:**
     ```json
     {
       "coin": "bitcoin" // Options: bitcoin, matic-network, ethereum
     }
     ```
   - **Response Example:**
     ```json
     {
       "price": 40000,
       "marketCap": 800000000,
       "24hChange": 3.4
     }
     ```

### 2. **`GET /deviation`**
   - **Description:** Calculates the standard deviation of the last 100 prices for the requested cryptocurrency.
   - **Query Parameters:**
     ```json
     {
       "coin": "bitcoin" // Options: bitcoin, matic-network, ethereum
     }
     ```
   - **Response Example:**
     ```json
     {
       "deviation": 4082.48
     }
     ```

---

## Database Schema
- **Cryptocurrency Data Collection:**
  ```json
  {
    "coin": "string", // e.g., bitcoin, matic-network, ethereum
    "price": "number",
    "marketCap": "number",
    "24hChange": "number",
    "timestamp": "Date"
  }
  ```

---

## Deployment
### Optional Task Steps
1. **Database Deployment:**
   - Use [MongoDB Atlas](https://www.mongodb.com/atlas) for cloud-hosted database.

2. **Backend Deployment:**
   - Platforms like [Heroku](https://www.heroku.com/), [AWS](https://aws.amazon.com/), or [GCP](https://cloud.google.com/) can be used to deploy the backend.
   - Set up environment variables on the hosting platform.

---

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch for your feature/bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes with meaningful messages:
   ```bash
   git commit -m "Added feature-name"
   ```
4. Push your branch and create a pull request.

---

## Acknowledgments
- [CoinGecko API Documentation](https://docs.coingecko.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Node.js Documentation](https://nodejs.org/)

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

