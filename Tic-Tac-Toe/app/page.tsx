"use client";

import { useEffect, useState } from "react";
import Cell from "./components/cell";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMsg, setWinningMsg] = useState("");

  const { width, height } = useWindowSize();

  useEffect(() => {
    winningCombos.forEach((combo) => {
      let circleWinning = combo.every((cell) => cells[cell] == "circle");
      let crossWinning = combo.every((cell) => cells[cell] == "cross");

      if (circleWinning) {
        setWinningMsg("Circle Is Win !");
        return;
      }

      if (crossWinning) {
        setWinningMsg("Cross Is Win !");
        return;
      }
    });
  }, [cells]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMsg) {
      setWinningMsg("Draw !");
    }
  }, [cells, winningMsg]);

  return (
    <>
      <main className="container">
        <h1 className="title">Tic Tac Toe</h1>


        {winningMsg && (
          <>
            {winningMsg === "Draw !" ? (
              <p className="text">{winningMsg}</p>
            ) : (
              <>
                <div className="win-overlay">🎉 {winningMsg} 🎉</div>
                <Confetti width={width} height={height} />
              </>
            )}
          </>
        )}

        {!winningMsg && (
          <div className="text">
            <p>
              Current Turn:{" "}
              <span style={{ color: go === "circle" ? "#F2A7A7" : "#64C57A" }}>
                {go === "circle" ? "O" : "X"}
              </span>
            </p>
          </div>
        )}

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
                winningMsg={winningMsg}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
