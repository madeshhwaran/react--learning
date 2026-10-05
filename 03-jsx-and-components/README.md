# Building the Foundation: JSX & Components

1. **Using Components:** Instead of writing one huge HTML file, we now build small, separate blocks. Why? So we can write the code once and reuse it anywhere. This keeps our project clean and easy to manage.
2. **Functional Components:** A functional component is just a normal JavaScript function with two strict rules: its name must start with a Capital letter (like `App`), and it must return JSX code.
3. **The Power of JSX:** JSX looks like HTML, but it is actually JavaScript. We learned to use curly braces `{ }` to write real JavaScript (like math or variables) right inside our UI.
4. **Component Composition:** Think of this like building with Lego blocks. We can easily build complex websites by putting smaller components (like `<Title />`) inside a larger component (like `<App />`).
5. **Industry Standard Way:** We learned the three ways to show a component, but we are using the professional standard: using the self-closing tag `<Title />` instead of calling it like a normal JavaScript function.

## 🛠️ Code Structure

- `App.jsx`: The main UI container. It acts as the "parent" that brings all the smaller blocks together into one final design.
- `main.jsx`: The starting point. Its only job is to import the main `<App />` component and show it on the screen using `ReactDOM.createRoot()`.
- `index.css`: Where we add our styles. We import this directly into `main.jsx` to style the whole app without making the HTML messy.
- `index.html`: The simple base file that contains the main `<div id="root">` and links to our script.

## 🚀 Full Process: Setup & Run 

Open your terminal in your **Main Project Folder** and run these commands in order:

### 1. Install & Setup
install React and Vite:
```bash
npm init -y
npm install react react-dom
npm install -D vite
npm run start
