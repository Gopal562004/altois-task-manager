# Task Manager Application

This is a full-stack web application built to manage tasks. It allows users to create, view, update, and delete tasks, while also providing features like filtering by status.

## Technologies Used

### Frontend
- **React** (via Vite) for a fast and component-driven UI.
- **TailwindCSS** for modern, responsive, and maintainable styling.
- **Framer Motion** for smooth animations and transitions.
- **Axios** for API requests.
- **React Hot Toast** for beautiful notifications.

### Backend
- **Node.js & Express.js** for building the REST API.
- **MongoDB & Mongoose** for the database and schema modeling.
- **Joi** for robust API payload validation.
- **Jest & Supertest** for automated API testing.

## Prerequisites
- Node.js (v14 or higher)
- A MongoDB instance (local or MongoDB Atlas connection string)

## Setup and Installation

### 1. Clone the repository
Navigate to the root project directory.

### 2. Backend Setup
1. Open a terminal and navigate to the `server` directory:
   \`\`\`bash
   cd server
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Create a `.env` file in the `server` directory if one doesn't exist, and add your MongoDB connection string:
   \`\`\`env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority
   # Replace the connection string above with your actual MongoDB URI, or use a local instance (mongodb://localhost:27017/task-manager)
   \`\`\`
4. Start the backend server:
   \`\`\`bash
   npm run dev
   \`\`\`

### 3. Frontend Setup
1. Open a new terminal window and navigate to the `client` directory:
   \`\`\`bash
   cd client
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the frontend development server:
   \`\`\`bash
   npm run dev
   \`\`\`

The application should now be accessible at `http://localhost:5173`.

## Running Tests
To run the automated tests for the backend:
1. Navigate to the `server` directory.
2. Run the test command:
   \`\`\`bash
   npm test
   \`\`\`

## Design Decisions
- **Architecture**: Separated into frontend (`client`) and backend (`server`) to ensure loose coupling and scalability.
- **Database**: MongoDB was chosen for flexibility, and Mongoose for clear schema definition and validation.
- **Validation**: Joi was used in the backend to ensure data integrity before reaching the database, returning meaningful error messages.
- **Styling**: TailwindCSS was utilized for rapid UI development without writing custom CSS, providing consistency and responsiveness.
- **UX**: Added Framer Motion for micro-interactions (like task creation and deletion) and React Hot Toast to keep the user informed of background actions.

## Limitations & Future Improvements
- **Authentication/Authorization**: Currently, any user can access and modify the tasks. Implementing user accounts (JWT) would secure personal task lists.
- **Pagination/Infinite Scroll**: If the list of tasks grows significantly, performance might degrade. Server-side pagination and lazy-loading in the frontend would solve this.
- **Drag and Drop**: Adding the ability to drag and drop tasks to change their status would greatly improve the user experience.
