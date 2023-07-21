import "./Button.css";

export default function Button({ activeId, btnId, setActiveId }) {
  function toggleBtn() {
    if (btnId === activeId) {
      setActiveId(null);
      return;
    }
    setActiveId(btnId);
  }
  return (
    <div className="button--class">
      <button
        className={`${activeId === btnId && "active"}`}
        onClick={toggleBtn}
      >
        {activeId === btnId ? "❌" : "✅"}
      </button>
    </div>
  );
}
