import { useState } from "react";
import Button from "./Button";
import "./CardList.css";

export default function CardList({ numberOfBtns }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="card--list">
      {Array(numberOfBtns)
        .fill()
        .map((_, idx) => (
          <Button btnId={idx} activeId={activeId} setActiveId={setActiveId} />
        ))}
    </div>
  );
}
