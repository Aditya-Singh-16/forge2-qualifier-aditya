# 🚀 Kanban Board – Forge 2 Qualifier

A Trello-style Kanban Board built as part of the Forge 2 Qualifier assignment using Laravel, React, OpenClaw, and Hermes Agent.

---

# Live Demo

Frontend (Vercel)

 https://forge2-qualifier-aditya-iouiuohrz-aditya-16.vercel.app

Backend API (Render)

https://kanban-board-ndn9.onrender.com

---

# Features

* Create tasks
* Update tasks
* Delete tasks
* Move tasks between workflow columns
* To Do / In Progress / Done workflow
* Laravel REST API backend
* React frontend UI
* OpenClaw Slack integration
* Hermes Agent integration
* Persistent memory support
* Autonomous workflows
* Custom skills support

---

# Tech Stack

## Backend

* Laravel 13
* PHP 8.3
* SQLite (Development)
* PostgreSQL (Production / Render)

## Frontend

* React
* Vite
* Axios

## AI Agents

### Hermes Agent

Provider: Google Gemini

Model:

gemini-2.5-flash

Capabilities:

* Persistent memory
* Project planning
* Autonomous execution
* Skill execution
* Progress tracking

### OpenClaw

Provider: Google Gemini

Model:

gemini-2.5-flash

Capabilities:

* Coding assistance
* Slack integration
* Development workflows
* Project execution

---

# Architecture

Slack
↓
Hermes Agent (Brain)
↓
OpenClaw (Hands)
↓
GitHub Repository
↓
Laravel API + React Frontend

---

# Project Structure

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

# Installation

## Clone Repository

```bash
git clone https://github.com/Aditya-Singh-16/forge2-qualifier-aditya.git

cd forge2-qualifier-aditya
```

---

## Backend Setup

```bash
cd backend

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

Backend URL

```text
http://127.0.0.1:8001
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL

```text
http://localhost:5176
```

---

# API Endpoints

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| GET    | /api/tasks      | Get all tasks |
| POST   | /api/tasks      | Create task   |
| PUT    | /api/tasks/{id} | Update task   |
| DELETE | /api/tasks/{id} | Delete task   |

---

# Hermes Agent

Hermes was configured with:

* Persistent memory
* Slack integration
* Status-report skill
* Autonomous workflow support
* Project planning

## Memory Verification

Hermes successfully stored and recalled project information across separate sessions.

Stored Information:

* Repository: forge2-qualifier-aditya
* Default Branch: main

---

# Status Report Skill

Location:

```text
skills/status-report/SKILL.md
```

Provides:

* What I Did
* What's Left
* What Needs Your Call

---

# Autonomous Workflow

Hermes is configured to perform autonomous project monitoring and can post progress updates to Slack without manual prompting.

---

# OpenClaw

OpenClaw is connected to Slack and can:

* Execute coding tasks
* Generate code suggestions
* Assist with project workflows
* Support repository development

---

# Screenshots

Include the following screenshots before final submission:

* Hermes memory recall
* Hermes autonomous workflow
* OpenClaw Slack interaction
* Kanban board UI
* Render deployment
* Vercel deployment

---

# GitHub Repository

Repository:

https://github.com/Aditya-Singh-16/forge2-qualifier-aditya

---

# Author

Aditya Singh

B.Tech Computer Science (Artificial Intelligence)

Pranveer Singh Institute of Technology

GitHub:
https://github.com/Aditya-Singh-16

LinkedIn:
https://www.linkedin.com/in/aditya-singh-891bb91b4
