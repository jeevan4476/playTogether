This project is a **Playo-like platform** for discovering, booking, and organizing sports activities and facilities. Users can join or host sports events, book courts, and connect with other sports enthusiasts.

## Features

- Book sports facilities (badminton, tennis, football fields, etc.).
- Create or join sports events.
- Connect with other players.
- Rate and review facilities.
- Secure user authentication and payments.
- Mobile-friendly design.

## Tech Stack

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Security**: JWT for authentication, HTTPS for secure data handling

## Installation and Setup

### Prerequisites:
- Node.js (v12 or higher)
- MongoDB (local or cloud)

### Steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. **Install Dependencies**:
    Navigate into both `client` and `server` directories and run:

    ```bash
    cd client
    npm install

    cd server
    npm install
    ```

3. **Environment Variables**:
   Create a `.env` file in the `server` folder:
    ```
   PORT=5000
   MONGO_URI=<your-mongo-db-uri>
   JWT_SECRET=<your-secret-key>
   ```

4. **Run the Application**:

    Start the backend and frontend in two terminals:

    - **Backend**:
   ```bash
      cd server
      npm start
     ```

    - **Frontend**:
   ```bash
      cd client
      npm start
      ```

    Visit `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
