const ToDos = () => {
  const [todos, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "remove":
        return state.filter((i) => i !== action.payload);
      default:
        return new Error();
    }
  }, []);

  const addTodo = (event) => {
    if (event.code === "Enter") {
      dispatch({ type: "add", payload: event.target.value });
      event.target.value = "";
    }
  };

  const removeTodo = (text) => {
    dispatch({ type: "remove", payload: text });
  };

  return (
    <>
      <input type="text" onKeyPress={addTodo} />
      &nbsp;&nbsp;{todos.length}
      <ul>
        {todos.map((text, index) => (
          <li key={index}>
            <button
              data-text={text}
              onClick={() => removeTodo(text)}
              style={{ margin: ".5em" }}
            >
              -
            </button>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

const App = () => (
  <>
    <h1>YATA</h1>
    <ToDos />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
