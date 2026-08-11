# CodePilot AI

### AI-Powered Code Review & Security Analysis Platform

**CodePilot AI** is a full-stack web application that uses artificial intelligence to analyze source code and provide meaningful code review feedback.

The platform helps developers identify potential bugs, security issues, code-quality problems, and improvement opportunities before committing or merging code into a project.

## 🚀 Live Demo

**Website:** https://codepilot-ai-nine.vercel.app/

**Backend API:** https://codepilot-ai-backend-d7wx.onrender.com/

**GitHub:** https://github.com/SutejNaik/CodePilot-AI

---

## ✨ Features

* 🔐 User registration and login
* 🛡️ JWT-based authentication
* 🤖 AI-powered code analysis
* 💻 Multi-language code review
* 🐛 Bug and issue identification
* 🔒 Security analysis
* ⚡ Performance recommendations
* 🧹 Code-quality and best-practice suggestions
* 📊 Review score and analysis results
* 💬 AI chat for discussing reviewed code
* 🕒 Review history
* 👤 User profile
* 📱 Responsive web interface

---

## 🎯 Problem Statement

Developers often spend significant time reviewing source code manually before committing or merging it into a project.

Manual code reviews can overlook:

* Bugs and logical issues
* Security vulnerabilities
* Poor coding practices
* Performance problems
* Code smells
* Maintainability issues

CodePilot AI provides an AI-assisted approach that analyzes source code and presents the results in an understandable format.

---

## 💡 Objectives

The main objectives of CodePilot AI are to:

1. Automate parts of the code-review process.
2. Identify potential issues in source code.
3. Provide security and quality recommendations.
4. Help developers understand problems in their code.
5. Provide an interactive AI chat for discussing review results.
6. Store previous reviews for future reference.
7. Provide a simple and modern developer-focused interface.

---

## 🏗️ System Architecture

```text
                         ┌──────────────────────────┐
                         │      CodePilot AI        │
                         │      React + Vite        │
                         │        Frontend          │
                         └────────────┬─────────────┘
                                      │
                                      │ HTTPS / REST API
                                      ▼
                         ┌──────────────────────────┐
                         │        FastAPI           │
                         │         Backend          │
                         └────────────┬─────────────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    │                 │                 │
                    ▼                 ▼                 ▼
             ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
             │  MongoDB    │  │  Groq AI    │  │    JWT      │
             │    Atlas    │  │    Model     │  │Authentication│
             └─────────────┘  └─────────────┘  └─────────────┘
```

---

## 🛠️ Technology Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Axios
* Lucide React

### Backend

* Python
* FastAPI
* Pydantic
* Uvicorn
* Python-JOSE
* Passlib / bcrypt

### Database

* MongoDB Atlas
* PyMongo

### AI

* Groq API
* AI-powered code analysis
* AI conversational code discussion

### Deployment

* Vercel — Frontend
* Render — Backend
* MongoDB Atlas — Database
* GitHub — Version control

---

## 📂 Project Structure

```text
CodePilot-AI/
│
├── backend/
│   ├── app/
│   │   ├── database/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── .env.example
│   └── requirements.txt
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   │
│   ├── package.json
│   └── vercel.json
│
├── .gitignore
└── README.md
```

---

## 🔄 How It Works

### 1. User Authentication

A user creates an account or logs in.

The backend authenticates the user and provides a JWT token.

### 2. Code Submission

The user selects a programming language and provides source code through the review interface.

### 3. AI Analysis

The backend sends the code and relevant instructions to the AI service.

The AI analyzes the code for areas such as:

* Bugs
* Security issues
* Performance
* Code quality
* Best practices

### 4. Review Results

The application presents the generated review in a structured interface along with a review score and identified issues.

### 5. AI Discussion

Users can continue discussing their reviewed code through the integrated AI chat.

### 6. Review History

Completed reviews are stored in MongoDB and can be accessed through the History section.

---

## 🔐 Security

CodePilot AI uses several security mechanisms:

* JWT authentication
* Password hashing using bcrypt
* Environment variables for sensitive configuration
* Protected API routes
* CORS configuration
* Secrets excluded from Git using `.gitignore`

Sensitive credentials such as database connection strings, AI API keys, and JWT secrets are not stored in the source repository.

---

## 🌐 Deployment

The application is deployed using a separated frontend/backend architecture.

```text
User
 │
 ▼
Vercel
React Frontend
 │
 │ HTTPS
 ▼
Render
FastAPI Backend
 │
 ├──────────────► MongoDB Atlas
 │
 └──────────────► Groq AI
```

### Production URLs

**Frontend**

https://codepilot-ai-nine.vercel.app/

**Backend**

https://codepilot-ai-backend-d7wx.onrender.com/

---

## 💻 Local Development

### Prerequisites

* Node.js
* Python
* MongoDB Atlas account
* Groq API key
* Git

### Clone the repository

```bash
git clone https://github.com/SutejNaik/CodePilot-AI.git
cd CodePilot-AI
```

### Backend

```bash
cd backend
python -m venv venv
```

Activate the virtual environment and install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside `backend` and configure the required environment variables.

Start the backend:

```bash
uvicorn app.main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

### Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The development frontend will be available at:

```text
http://localhost:5173
```

---

## 📊 Main Modules

| Module         | Description                                |
| -------------- | ------------------------------------------ |
| Authentication | Registration, login and JWT authentication |
| Code Review    | AI-powered source-code analysis            |
| AI Chat        | Interactive discussion about reviewed code |
| Dashboard      | Review statistics and recent activity      |
| History        | Previously completed code reviews          |
| Profile        | User profile and account information       |
| API            | FastAPI-based backend services             |
| Database       | MongoDB-based persistent storage           |

---

## 🔮 Future Scope

Possible future improvements include:

* GitHub repository integration
* Pull request code review
* Automated CI/CD integration
* More advanced static analysis
* Custom coding standards
* Team collaboration
* Review report export
* Additional programming-language support
* Improved security scanning
* Code-quality trend analytics

---

## 📌 Project Status

**Status: Completed and Deployed**

The current version includes the core authentication, AI code review, AI chat, history, profile, dashboard, database, and production deployment functionality.

---

## 👨‍💻 Author

**Sutej Naik**

CodePilot AI was developed as an academic full-stack project to explore AI-assisted software development and automated code review.

---

## 📄 License

This project is intended primarily for academic and educational purposes.
