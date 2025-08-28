Sticky Notes Application
A simple and elegant web application for creating and managing sticky notes, built with Node.js, Express, MongoDB, and EJS.

https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
https://img.shields.io/badge/EJS-8A2BE2?style=for-the-badge

Features
Create Notes: Add new sticky notes with titles and content

View All Notes: Browse all your notes in a beautiful grid layout

Delete Notes: Remove notes you no longer need

Responsive Design: Works seamlessly on desktop and mobile devices

MongoDB Integration: All notes are stored in a MongoDB database for persistence

Live Demo
Check out the live demo: Sticky Notes App

https://via.placeholder.com/800x400?text=Sticky+Notes+Application+Screenshot

Technology Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Templating: EJS (Embedded JavaScript)

Styling: Custom CSS with responsive design

Icons: Font Awesome

Installation
Prerequisites
Node.js (v14 or higher)

MongoDB (local installation or MongoDB Atlas account)

npm or yarn package manager

Setup Instructions
Clone the repository

bash
git clone https://github.com/your-username/sticky-notes-app.git
cd sticky-notes-app
Install dependencies

bash
npm install
Set up environment variables

bash
cp .env.example .env
Edit the .env file with your configuration:

text
PORT=3000
MONGODB_URI=mongodb://localhost:27017/stickynotesdb
NODE_ENV=development
Start MongoDB

If using local MongoDB, make sure the MongoDB service is running

If using MongoDB Atlas, update the connection string in your .env file

Start the application

bash
npm start
For development with auto-restart:

bash
npm run dev
Open your browser and navigate to:

text
http://localhost:3000

Project Structure
text
sticky-notes-app/
├── app.js                 # Main application file
├── package.json           # Project dependencies and scripts
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── models/
│   └── Note.js           # Mongoose Note model
├── views/
│   ├── index.ejs         # Home page - Add note form
│   └── show.ejs          # View all notes page
├── public/
│   └── css/
│       └── style.css     # Application styles
└── README.md             # Project documentat
