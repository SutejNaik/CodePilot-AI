# PROJECT_SPEC.md

# Project

CodePilot-AI

AI-Powered Code Review & Security Analysis Platform

---

# Problem Statement

Developers spend a significant amount of time reviewing code manually.

Manual reviews may miss:

- Bugs
- Security vulnerabilities
- Code smells
- Performance issues
- Poor coding practices

CodePilot-AI automates the review process using static analysis and AI.

---

# Objective

Develop a web application where users can:

- Register
- Login
- Upload source code
- Paste source code
- Select programming language
- Run static analysis
- Receive AI-generated review
- View review history
- Download reports

---

# Features

Authentication

- Register
- Login
- JWT Authentication

Dashboard

- Total Reviews
- Average Score
- Languages Used
- Recent Reviews

Review

- Upload Code
- Paste Code
- Language Selection
- AI Review
- Static Analysis
- Code Score

History

- Previous Reviews
- Search
- Filter

Profile

- User Information
- Statistics

---

# Supported Languages (Phase 1)

- Python
- JavaScript

Future

- Java
- C++
- C#
- Go

---

# Review Flow

User

↓

Upload Code

↓

Static Analysis

↓

Generate Findings

↓

Send Findings to AI

↓

Generate Report

↓

Save to Database

↓

Display Report

---

# Tech Stack

Frontend

React
Tailwind CSS

Backend

FastAPI

Database

MongoDB Atlas

Authentication

JWT

AI

OpenRouter

---

# UI Theme

Primary

Blue

Background

Dark Slate

Cards

Dark Gray

Style

Modern SaaS Dashboard

---

# Development Strategy

Sprint 1

Project Setup

Sprint 2

Frontend

Sprint 3

Authentication

Sprint 4

Database

Sprint 5

Review Engine

Sprint 6

AI Integration

Sprint 7

Dashboard

Sprint 8

Deployment