# React Core Elements

1. **CDNs:** We can write React without installing anything by using CDN links (`react` and `react-dom`) in the HTML file.
2. **React.createElement:** It takes 3 arguments: `(tag, attributes/props, children)`.
3. **Behind the Scenes:** `React.createElement` does NOT create HTML tags directly. It creates normal **JavaScript Objects**.
4. **ReactDOM:** `root.render()` is the engine that takes those JavaScript Objects and converts them into real HTML on the screen.
5. **Nesting:** We use JavaScript Arrays `[]` to put multiple tags inside a parent tag.

## 🛠️ Code Structure
* `index.html`: Holds the empty `<div id="root"></div>` and React CDN links.
* `style.css`: Basic styling for the UI.
* `app.js`: The core logic where we build the nested React elements and render them to the DOM.

## 🚀 How to Run
Simply double-click the `index.html` file to open it in your browser. No installation needed!