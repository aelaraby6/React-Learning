"use client";

import { useState } from "react";
import Cell from "./components/cell";

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");

  console.log(cells);

  return (
    <>
      <main className="container">
        <h1 className="title">Tic Tac Toe</h1>

        <div className="current-player">
          <p>
            Current Turn:{" "}
            <span style={{ color: go === "circle" ? "#F2A7A7" : "#64C57A" }}>
              {go === "circle" ? "O" : "X"}
            </span>
          </p>
        </div>

        <div className="gameBoard">
          {cells.map((cell, index) => {
            return (
              <Cell
                id={index}
                key={index}
                go={go}
                setGo={setGo}
                cells={cells}
                setCells={setCells}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
