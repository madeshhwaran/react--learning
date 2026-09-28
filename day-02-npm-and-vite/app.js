import React from "react";
import ReactDOM from "react-dom/client";

const appContainer = React.createElement("div", { id: "app-container" }, [
  
  React.createElement("div", { id: "welcome" }, [
    React.createElement(
      "h1",
      { className: "heading" },
      "Chennai Super Kings",
    ),
    React.createElement("h2", {}, "Whistle Podu Army!"),
  ]),

  React.createElement("div", {}, [
    React.createElement("h1", {}, "Captain Cool"),
    React.createElement("h2", {}, "MS Dhoni - Jersey No. 7"),
  ]),
]);

console.log(appContainer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(appContainer);