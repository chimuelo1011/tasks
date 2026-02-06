import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                <h1>
                    <span style={{ color: "red" }}>
                        {" "}
                        UD CISC275 with React Hooks and TypeScript
                    </span>
                </h1>
            </header>
            <img
                src="C:\Users\JBT10\tasks\src\wisin.jpg"
                alt="wisin y yandel"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Jeremias Brana Tonelli. Hello World
            </p>
            <ul>
                <li>Ri</li>
                <li>cardo</li>
                <li>Fort</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
