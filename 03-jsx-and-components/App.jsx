import React from "react";

const Title = () => (
    <h1 className="head">
        Enterprise Dashboard Overview
    </h1>
);

const activeUsers = 5000;

const App = () => (
    <div id="container">
        {/* Calling it like a normal JavaScript function */}
        {Title()}

        {/* Calling it like a normal HTML tag */}
        <Title></Title>

        {/* Calling it with a self-closing tag (Industry Standard) */}
        <Title />

        <h2>Active Users: {activeUsers} | Daily Visitors: {100 + 500}</h2>
        <h1 className="heading">Main Application Container</h1>
    </div>
);

export default App;
