# Task Manager

A full-stack task management app built with React, Node.js, Express, and MongoDB.

## Tech Stack

- **Frontend:** React (Vite), TailwindCSS v4, Framer Motion, Axios
- **Backend:** Node.js, Express, Mongoose, Joi
- **Database:** MongoDB (Atlas)
- **Testing:** Jest, Supertest

## Getting Started

### Backend

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Running Tests

```bash
cd server
npm test
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks (supports `?status=` filter) |
| GET | /api/tasks/:id | Get a task by ID |
| POST | /api/tasks | Create a task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## Features

- Create, edit, delete tasks with validation
- Filter by status (pending, in-progress, completed)
- Priority levels (low, medium, high)
- Responsive layout
- Toast notifications for actions
- Confirmation dialog before deleting

## What I'd Improve

- Add user authentication (JWT)
- Server-side pagination for large task lists
- Drag-and-drop to change task status
