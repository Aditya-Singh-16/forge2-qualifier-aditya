# Kanban Board – Forge 2 Qualifier

A Trello-style Kanban board built using Laravel and React as part of the Forge 2 Qualifier assignment.

## Features

* Create tasks
* Move tasks between columns

  * To Do
  * In Progress
  * Done
* Delete tasks
* Laravel REST API backend
* React frontend
* OpenClaw Slack integration
* Hermes Agent integration with memory, skills, and autonomous workflows

## Tech Stack

### Backend

* Laravel 13
* PHP 8.3
* SQLite

### Frontend

* React
* Vite
* Axios

### AI Agents

* OpenClaw
* Hermes Agent
* Slack Integration

---

## Project Structure

```text
ai-assignment/
├── backend/
│   ├── app/
│   ├── routes/
│   ├── database/
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
└── skills/
    └── status-report/
        └── SKILL.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Aditya-Singh-16/forge2-qualifier-aditya.git
cd forge2-qualifier-aditya
```

### Backend Setup

```bash
cd backend

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

Backend runs on:

```text
http://127.0.0.1:8001
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5176
```

---

## API Endpoints

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| GET    | /api/tasks      | Get all tasks |
| POST   | /api/tasks      | Create task   |
| PUT    | /api/tasks/{id} | Update task   |
| DELETE | /api/tasks/{id} | Delete task   |

---

## Hermes Agent

Hermes was configured with:

* Persistent memory
* Status report skill
* Slack integration
* Autonomous task execution support

Example skill:

```text
status-report
```

Provides:

* What I Did
* What's Left
* What Needs Your Call

---

## OpenClaw

OpenClaw is connected to Slack and can:

* Execute coding tasks
* Generate code suggestions
* Assist with project workflows

---

## Screenshots

Add screenshots here after deployment.

---

## Author

Aditya Singh

GitHub:
https://github.com/Aditya-Singh-16

LinkedIn:
https://www.linkedin.com/in/aditya-singh-891bb91b4
