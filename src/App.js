import "./App.css";

function App() {
  const hello = <h1>Hello, World!</h1>;

  const sayHello = (name) => <h1>Hello, {name}</h1>;

  return (
    <div>
      {hello}
      <br />
      {sayHello("Gianni")}
    </div>
  );
}

export default App;
