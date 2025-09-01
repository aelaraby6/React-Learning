import { Dispatch, SetStateAction } from "react";
import "../globals.css";

type cellProps = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  winningMsg: string;
};

export default function Cell({
  id,
  go,
  setGo,
  cells,
  setCells,
  winningMsg,
}: cellProps) {
  function handleClick(e: any) {
    if (winningMsg) return;
    if (cells[id]) return;

    handleCellChange(go);

    setGo((prev) => (prev === "circle" ? "cross" : "circle"));
  }

  function handleCellChange(mode: string) {
    setCells((prev) => prev.map((cell, idx) => (idx === id ? mode : cell)));
  }

  return (
    <div className="square" onClick={handleClick}>
      <div className={cells[id]}>
        {cells[id] ? (cells[id] == "circle" ? "O" : "X") : ""}
      </div>
    </div>
  );
}
