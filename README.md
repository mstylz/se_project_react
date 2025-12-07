WTWR (What To Wear) — React + Vite + Persistent Server (json-server)

Live demo:
https://mstylz.github.io/se_project_react/

A responsive, interactive React application that suggests clothing items based on the current weather. The project was originally built with a static wardrobe, but in this stage (Project 11), the app now uses a fully persistent backend powered by json-server. Users can add and delete clothing items, and changes remain saved even after refresh.

✨ Features
🌤 Weather Integration

Fetches real-time weather from OpenWeather API

Displays city, temperature, and weather type

Dynamically filters clothing items by weather category (❄ cold / 🌤 warm / ☀ hot)

👕 Wardrobe Management (Persistent Data)

Full CRUD-like interaction with a mock API (json-server)

Add new clothing items via ModalWithForm

Click any item to open a preview modal

Delete items permanently

All wardrobe data persists in db.json

🧱 Clean Component Architecture

Organized React structure (components/, utils/, hooks/)

Dedicated modals: AddItemModal, ItemModal, ModalWithForm

Reusable functional components and prop-driven UI

⚠️ Key Challenge Solved: Identifier Mismatch (id vs _id)

While implementing persistence, one major challenge was syncing identifiers between the frontend and backend.

The UI originally expected _id (as taught in earlier parts of the program),
but json-server only supports id.

This mismatch caused:

Clothing items not deleting

Wrong items being selected

404 / 500 server errors

React list keys becoming unstable

Solution:
I standardized the entire application to use id consistently:

Server stores items with id

React state normalizes received data

Delete and render logic now depend on a unified identifier

This alignment stabilized the entire data flow and fixed all persistence issues.

🛠 Tech Stack
Frontend

React 18 (hooks, functional components)

Vite 5 (super-fast dev server)

CSS & TripleTen design system

ESLint (flat config) + Prettier

Backend (Mock API)

json-server for persistent storage (db.json)

Custom API helper functions inside utils/api.js

Full error handling and response validation



📸 Screenshots

(Recommended on GitHub: They will render as full images)

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

🎥 Project Pitch Video

Check out this short walkthrough of my project and the challenges I solved:
https://drive.google.com/file/d/177DKcuWB7y1HU8riM0oCbkNUbfRN63hE/view?usp=drive_link

🚀 Installation & Setup (Local Development)
# Clone the repo
git clone https://github.com/mstylz/se_project_react.git
cd se_project_react

# Install dependencies
npm install

# Start json-server
npx json-server --watch db.json --port 3001

# Start Vite dev server
npm run dev

🧠 Future Improvements

Add user authentication with protected wardrobes

Let users "favorite" or categorize items

Expand weather logic (e.g., humidity, wind, precipitation)

Migrate from json-server to a real backend (Node/Express or MongoDB)

📄 License

MIT — free to use, modify, and share.