import "./App.css";

function App() {
  const hello = <h1>Hello, World!</h1>;

  const sayHello = (name) => <h1>Hello, {name}</h1>;

  const sum = (a, b) => <h2>{a + b}</h2>;

  return (
    <div>
      {hello}
      <br />
      {sayHello("Gianni")}
      <br />
      {sum(10, 5)}
    </div>
  );
}

export default App;
