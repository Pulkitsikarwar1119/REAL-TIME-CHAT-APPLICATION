# REAL TIME CHAT APPLICATION

COMPANY : CODTECH IT SOLUTIONS

NAME  : PULKIT SIKARWAR

INTERN ID  :CT08DF482

DOMAIN  : MERN STACK WEB DEVELOPMENT

DURATION :8 WEEKS

MENTOR : NEELA SANTOSH

##Description of Task: 

The objective of Task 1 was to design and implement a fully functional real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js) integrated with Socket.IO to enable live, two-way communication between users.

⚙️ Tech Stack Overview

MongoDB: Used as a NoSQL database to store user data, message logs, or optional chat history if required.

Express.js: A backend framework used to create REST APIs and manage middleware and routes.

React.js: Frontend framework responsible for building an interactive user interface that responds in real time.

Node.js: JavaScript runtime to execute backend logic and connect to the database.

Socket.IO: A JavaScript library used on both the client and server side to implement real-time, bi-directional communication via WebSockets.

🛠️ Project Structure

Backend (/backend)

Created using Node.js + Express.

Set up a server using http.createServer() and initialized Socket.IO on port 4000 or 3001.

Socket.IO handled events like connection, send_message, and receive_message to manage chat traffic.

Used middleware like cors and express.json() for request handling and cross-origin support.

Optionally connected to MongoDB to persist messages (if extended).

Frontend (/frontend)

Built using React.js via create-react-app.

Used components like ChatWindow.jsx, App.js, and CSS files for layout and styling.

Integrated socket.io-client to connect to the server.

React state hooks like useState and useEffect were used to handle dynamic message updates and lifecycle events.

Chat UI was designed to be responsive and user-friendly, showing user and bot messages in different styles.

💬 Functionalities Implemented

Real-time messaging: Messages are instantly sent and received using WebSockets.

Chat layout: Messages appear in styled chat bubbles with alignment based on sender/receiver.

Basic user identification: Messages could be tagged with user IDs like "User1", "User2", etc.

Frontend styling: Implemented custom CSS to style the chat window and used avatars, headers, and input areas.

Background image support: Enhanced UI with optional background images and layout improvements.

Error handling: Managed socket disconnections, double message bugs, and port conflicts.

Execution Steps
Install npm and node modules.

Start Backend:
Navigate to /backend and run:

bash


node server.js

Start Frontend:

Navigate to /frontend and run:

bash

npm start

Use Application:

Open multiple browser tabs or devices to simulate real-time chat.

Type and send messages that appear in both sender and receiver windows instantly.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

# Output:
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/c1711338-9633-4c25-a77b-f265fd038f66" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/716f1240-4e0e-4c1d-960e-050f40296de1" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/f341157a-3263-44ca-b120-95e1a7e646a6" />



