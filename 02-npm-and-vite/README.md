# Day 2: Igniting the App with NPM & Vite 🔥

## 🎯 What I Learned Today

1. **Why We Dropped CDNs:** Transitioned from internet CDN links to local **NPM (Node Package Manager)**. CDNs are fine for basic testing, but real-world apps need NPM to securely manage package versions, work offline, and bundle code efficiently for production.
2. **Package.json:** Created the "ID Card" of the project (`npm init`) to keep track of installed libraries and custom scripts.
3. **Implementing a Local Server:** Browsers restrict running modern ES modules directly from local files due to security (CORS) policies. Setting up a local server allows the application to run properly in a real development environment.
4. **Why Vite? (The Upgrade):** Skipped older bundlers and integrated **Vite**. Why Vite? Because it uses native browser ES modules to start the server *instantly* and provides lightning-fast Hot Module Replacement (HMR) — meaning changes show up in the browser instantly without a full page reload.
5. **Local Imports:** Learned to use `import React from "react"` and `import ReactDOM from "react-dom/client"` inside JavaScript files.
6. **Smart Architecture:** Instead of creating separate `node_modules` for every single day, I set up a single root environment. This saves disk space and keeps the workspace highly organized.

## 🛠️ Code Structure

- `index.html`: Removed CDN links (to rely fully on local dependencies) and updated the script tag to `<script type="module" src="./app.js"></script>`.
- `app.js`: Updated to import React directly from the local `node_modules` folder.
- `package.json` (Root Folder): Configured the `"start": "vite"` script and removed the unnecessary `"main"` field since this is a web app, not a library.

## 🚀 How to Run

Since the project uses a smart root-level architecture:

1. Open your terminal in the **Main Project Folder** (ReactLearning).
2. Run the Vite server by typing:
   ```bash
   npm run start