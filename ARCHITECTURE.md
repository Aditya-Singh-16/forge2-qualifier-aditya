# Architecture Overview

## System Architecture

This project uses a multi-agent architecture where Hermes acts as the orchestrator (brain) and OpenClaw acts as the execution agent (hands).

```text
Human
  │
  ▼
Slack (#sprint-main)
  │
  ▼
Hermes Agent (Brain)
  │
  ├── Planning
  ├── Memory
  ├── Skills
  ├── Autonomous Workflows
  └── Task Delegation
          │
          ▼
OpenClaw (Hands)
  │
  ├── Code Generation
  ├── Repository Operations
  ├── Development Tasks
  └── Slack Responses
          │
          ▼
GitHub Repository
          │
          ▼
Laravel API + React UI
```

---

# Agent Responsibilities

## Hermes Agent (Brain)

Hermes is responsible for high-level reasoning and orchestration.

### Responsibilities

* Project planning
* Task decomposition
* Progress tracking
* Persistent memory
* Skill execution
* Autonomous cron jobs
* Decision making
* Slack coordination

### Memory

Hermes stores project context across sessions.

Example:

* Repository: forge2-qualifier-aditya
* Default Branch: main

### Skills

Hermes uses reusable skills.

Implemented Skill:

```text
status-report
```

Produces:

* What I Did
* What's Left
* What Needs Your Call

### Autonomous Execution

Hermes can execute scheduled workflows without human prompts.

Examples:

* Progress updates
* Status reports
* Scheduled reminders

---

## OpenClaw (Hands)

OpenClaw is responsible for execution.

### Responsibilities

* Code generation
* Repository interaction
* Git operations
* Development workflows
* Slack interaction
* Coding assistance

### Examples

* Generate Laravel code
* Generate React components
* Create API endpoints
* Assist with debugging
* Commit and push workflow guidance

---

# Slack Channel Scheme

The system uses three Slack channels.

## #sprint-main

Primary human communication channel.

Purpose:

* Project updates
* Planning discussions
* Progress reporting
* Human ↔ Agent interaction

Participants:

* Human
* Hermes
* OpenClaw

---

## #agent-coder

Execution channel.

Purpose:

* Coding tasks
* Development requests
* Implementation work

Participants:

* OpenClaw

---

## #agent-log

Audit and transparency channel.

Purpose:

* Agent activity logs
* Planning visibility
* Execution traces
* Debugging information

Participants:

* Hermes
* OpenClaw

---

# Model Routing

## Hermes

Provider:

Google Gemini

Model:

gemini-2.5-flash

Routing:

Used for:

* Planning
* Memory retrieval
* Reasoning
* Skill execution
* Autonomous workflows

---

## OpenClaw

Provider:

Google Gemini

Model:

gemini-2.5-flash

Routing:

Used for:

* Coding tasks
* Tool execution
* Repository assistance
* Slack operations

---

# Development Workflow

1. Human submits request in Slack.
2. Hermes analyzes and plans the work.
3. Hermes breaks work into tasks.
4. Hermes delegates implementation tasks.
5. OpenClaw executes coding-related work.
6. Results are reported back to Slack.
7. Hermes updates project memory and progress state.

---

# Deployment Architecture

## Frontend

Platform:

Vercel

Technology:

* React
* Vite

Purpose:

User interface for the Kanban board.

---

## Backend

Platform:

Render

Technology:

* Laravel 13
* PHP 8.3

Purpose:

REST API and business logic.

---

## Repository

GitHub

Repository:

forge2-qualifier-aditya

Purpose:

Source control and deployment integration.

---

# Summary

Brain:

Hermes Agent

Responsibilities:

* Think
* Remember
* Plan
* Coordinate

Hands:

OpenClaw

Responsibilities:

* Build
* Execute
* Code
* Assist

This separation allows transparent, auditable, and autonomous AI-assisted software development while keeping the human in the loop.
