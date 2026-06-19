# WTWR (What To Wear)

Live demo:
https://mstylz.github.io/se_project_react/

Backend repository:
https://github.com/mstylz/se_project_express

## About the Project

WTWR is a responsive React application that helps users decide what to wear based on the current weather. Users can register, log in, add clothing items, like items, delete their own items, and update their profile information.

This version connects the React frontend to a real Express/MongoDB backend with authentication and authorization.

## Features

* Real-time weather data from OpenWeather API
* Clothing suggestions based on weather type
* User registration and login
* JWT authentication with localStorage persistence
* Protected `/profile` route
* Current user profile display
* Add clothing items
* Delete only your own clothing items
* Like and unlike clothing items
* Likes persist after page refresh
* Edit profile name and avatar
* Responsive layout based on the Figma design

## Tech Stack

### Frontend

* React
* Vite
* React Router
* CSS
* Context API
* Local Storage
* ESLint
* Prettier

### Backend

* Node.js
* Express
* MongoDB
* Mongoose
* JWT
* bcryptjs
* validator
* CORS

## Installation

Clone the frontend repository:

```bash
git clone https://github.com/mstylz/se_project_react.git
cd se_project_react
npm install
npm run dev
```

Clone and run the backend repository:

```bash
git clone https://github.com/mstylz/se_project_express.git
cd se_project_express
npm install
npm run dev
```

The frontend runs on:

```bash
http://localhost:3000
```

The backend runs on:

```bash
http://localhost:3001
```

## Screenshots

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/1.png

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/2.png

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/3.png

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/4.png

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/5.png

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/6.png

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/7.png

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/8.png

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/9.png

https://github.com/mstylz/se_project_react/blob/main/src/assets/screenshots/10.png

## Project Video

https://drive.google.com/file/d/177DKcuWB7y1HU8riM0oCbkNUbfRN63hE/view?usp=drive_link

## Future Improvements

* Improve loading states
* Add better error messages for forms
* Add advanced weather filtering
* Improve accessibility for modals and buttons
* Deploy the backend to a production server

## License

MIT
