Sticky Notes Application
A simple and elegant web application for creating and managing sticky notes, built with Node.js, Express, MongoDB, and EJS.

Features
Create Notes: Add new sticky notes with titles and content

View All Notes: Browse all your notes in a beautiful grid layout

Responsive Design: Works seamlessly on desktop and mobile devices

MongoDB Integration: All notes are stored in a MongoDB database for persistence

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

some options
PORT=3000
MONGODB_URI=mongodb://localhost:27017/stickynotesdb
NODE_ENV=development

Project Structure

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
