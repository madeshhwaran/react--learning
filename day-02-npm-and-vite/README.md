# Day 2: Igniting the App with NPM & Vite 🔥

## 🎯 What I Learned Today

1. **No More CDNs:** Transitioned from using internet CDN links to installing React locally using **NPM (Node Package Manager)**.
2. **Package.json:** Created the "ID Card" of the project (`npm init`) to keep track of installed libraries and custom scripts.
3. **The Vite Upgrade:** Skipped older bundlers and integrated **Vite**, the modern, lightning-fast development server used by industry pros.
4. **Local Imports:** Learned to use `import React from "react"` and `import ReactDOM from "react-dom/client"` inside JavaScript files.
5. **Smart Architecture:** Instead of creating separate `node_modules` for every single day, I set up a single root environment. This saves disk space and keeps the workspace highly organized.

## 🛠️ Code Structure

- `index.html`: Removed CDN links and updated the script tag to `<script type="module" src="./app.js"></script>`.
- `app.js`: Updated to import React directly from the local `node_modules` folder.
- `package.json` (Root Folder): Configured the `"start": "vite"` script and removed the unnecessary `"main"` field since this is a web app, not a library.

## 🚀 How to Run

Since the project uses a smart root-level architecture:

1. Open your terminal in the **Main Project Folder** (ReactLearning).
2. Run the Vite server by typing:
   ```bash
   npm run start
   ```
