StudySync: Group Matching System

Course: OSS (Open Source Systems Development) SENG 411

Project Type: Group Software Development

Description:

StudySync is a simple system that helps students find compatible study partners and groups based on interests, selected courses, availability, and study style.
It automatically recommends the best study group for each student.

Figma link: https://www.figma.com/design/e2vwNW2JId20IwlSPIAEcy/amos-project?node-id=0-1&t=BuGWE8d1stvG4y6s-1

Project Overview

University students often struggle to find the right study group.
StudySync solves this by allowing students to:

 Create an account
 Select their interests or courses
 Choose preferred study style
 Set their availability
 Get matched with ideal groups

The goal is to provide a lightweight, open-source platform that improves academic collaboration.

This project includes:

•	Frontend – React (HTML, CSS, JS, Tailwind / Custom CSS)
•	Backend (Optional) – Node.js / Express (matching logic can also run locally)
•	UI/UX Mockups – Figma
•	Documentation for OSS contribution

 Key Features
 Student Signup / Login
Dashboard with recommended actions
Interest selection chips
Study style & availability selection
“Find Group” page
“Available Groups” listing
Group navigation dashboard
Responsive design for mobile & desktop


Project Structure

Your updated folder structure based on the current app:

```
studysync/
│
├── backend/                      # (Optional) Node.js matching logic
│   └── server.js (or empty for now)
│
├── frontend/
│   ├── public/
│   │   └── assets/
│   │
│   ├── src/
│   │   ├
│   │   │   
│   │   │   
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── FindGroup.jsx
│   │   │   ├── AvailableGroups.jsx
│   │   │   └── Home.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── docs/
    ├── project-proposal.md
    ├── requirements.md
    ├── UI-mockups/
    └── README-assets/

