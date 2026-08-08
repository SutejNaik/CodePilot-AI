# CodePilot AI

### AI-Powered Code Review & Security Analysis Platform

CodePilot AI is a full-stack web application that uses AI to analyze source code and provide professional code reviews, security insights, bug detection, performance suggestions, and improvement recommendations.

It is designed to help developers understand and improve their code before committing or merging it into a project.

---

## 🚀 Features

- 🔐 User registration and login
- 🔑 JWT-based authentication
- 🤖 AI-powered code analysis
- 💻 Multi-language code review
- 🐛 Bug and issue detection
- 🛡️ Security vulnerability analysis
- ⚡ Performance recommendations
- 🧹 Code quality and best-practice suggestions
- 📊 Review results and analysis
- 💬 AI chat for discussing reviewed code
- 🕒 Review history
- 👤 User profile
- 📄 Review report generation
- 📱 Responsive modern interface

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │      CodePilot      │
                    │     Web Client      │
                    │   React + Vite      │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST API
                               ▼
                    ┌─────────────────────┐
                    │     FastAPI         │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
        ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
        │   MongoDB   │ │  Groq / AI  │ │    Auth     │
        │    Atlas    │ │    Model    │ │    JWT      │
        └─────────────┘ └─────────────┘ └─────────────┘