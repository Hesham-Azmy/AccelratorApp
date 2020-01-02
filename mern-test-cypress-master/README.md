# MERN Stack Todo Application

A Mongo + Express + React + Node.js Todo list application (and Node.js backend). Originally cloned from https://github.com/Azure-Samples/applicationinsights-mern-todo

## Requirements

- A local mongoDB server, use MongoDB Compass or run `mongod` in your terminal, make sure it's using port 27017 (the default port)
- You must be running inside a POSIX-compliant shell (usually Linux, Mac, WSL under windows). Windows (non-WSL) is not supported

## Running the App

- First start your local mongo server. Make sure to install and run mongodb on port 27017 before starting the backend

- Navigate to the top-level folder and run `npm install`, this will install dependencies for both the frontend and backend projects. Alternatively, you can run this

- You can then run `npm run backend` and `npm run frontend` in two separate terminals to run both the backend and frontend respectively

## Running the tests

- Navigate to the top-level folder and run `npm test`, this will start both backend and frontend and run the sample cypress test. Alternatively you can start backend and frontend manually, then run `npx cypress open` to open the cypress interactive window
