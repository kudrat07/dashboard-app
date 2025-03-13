# Project Title
dashboard-UI

## Overview
This project is a **React-based dashboard application** that displays **user-related expenses** using real-time data fetched from [MockAPI.io](https://mockapi.io/). It features **user authentication** via [Reqres.in](https://reqres.in/), protected routes to ensure secure access, and **data visualization** with Chart.js.

## Features
- User authentication using [https://reqres.in/](https://reqres.in/)
- Protected routes ensuring only authenticated users can access the dashboard
- JWT token stored in **localStorage** to manage user session
- Logout functionality to clear session data
- Real-time data fetching from custom endpoints created using [MockAPI.io](https://mockapi.io/)
- Data visualization using Chart.js to display user expenses

## Tech Stack
- **Frontend:** React.js, HTML, CSS, JavaScript
- **Database:** [MockAPI.io for mock backend services]
- **Libraries & Tools:** Axios,  Chart.js, CSS,

## Installation & Setup
### Prerequisites
Make sure you have the following installed:
- Node.js & npm 
- Git

### Steps to Run the Project
1. **Clone the repository**
   
   git clone [GitHub Repository URL]
   cd [Project Directory]
   
2. **Install dependencies**

   npm install

3. **Start the development server**

   npm start

4. **Access the application**
   Open `http://localhost:3000` in your browser.

## Authentication Details
- **Login Credentials:**
  - Email: `emma.wong@reqres.in`
  - Password: `12345`
- Upon successful login, a JWT token is received and stored in `localStorage`.
- The dashboard is protected, and only authenticated users can access it.
- Logout clears the JWT token and redirects the user to the login page.

## Approach & Implementation
- **Authentication:** Implemented login using Reqres.in API, storing JWT tokens in localStorage.
- **Protected Routes:** Ensured only authenticated users can access the dashboard.
- **Data Handling:** Used MockAPI.io to create custom endpoints and fetch real-time dashboard data.
- **State Management:** Utilized Local State for managing state.
- **Chart.js Integration:** Implemented data visualization using Chart.js for interactive insights into user expenses.
- **Deployment:** Hosted on Vercel for a seamless and scalable deployment experience.

## Deployment
This project is deployed on Vercel. You can access it here: [Deployment Link]

## Folder Structure
```
📂 project-root
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📜 App.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## Contact
For any questions or issues, feel free to reach out at kudrathussain809@gmail.com

---
