import "./App.css";

const App = () => {
  return (
    <div>
      <input type="text" />
      <button>Add Todo</button>
      <div>
        <button>All</button>
        <button>Completed</button>
        <button>Pending</button>
      </div>
      <ul>
        <li
          style={{
            textDecoration: "line-through",
            cursor: "pointer",
          }}
        >
          todo-text
        </li>
      </ul>
    </div>
  );
};

export default App;
