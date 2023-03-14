import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Container from "./Container";
import Counter from "./Counter";
import DisplayLanguage from "./DisplayLanguage";
import Hello from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import Login from "./Login";
import Sum from "./Sum";
import TodoList from "./TodoList";
import UncontrolledLogin from "./UncontrolledLogin";
import Welcome from "./Welcome";

export default class App extends Component {
  state = {
    lang: "it",
  };

  handleLangChange = (e) => {
    this.setState({ lang: e.target.value });
  };

  onLogin = (user) => {
    console.log(user);
  };
  render() {
    const styles = {
      list: "border overflow-hidden rounded-md m-2 w-[346px]",
      listItem:
        "border-b flex justify-between p-2 even:bg-slate-100 last:border-none",
      deleteBtn:
        "transition ease-in-out duration-200 text-xs hover:text-red-600 hover:scale-105",
    };

    return (
      <div>
        {/* START SUM COMPONENT */}
        <Sum numbers={[8, 10, 2]} />
        <Sum />
        {/* END SUM COMPONENT */}

        {/* START CONTEXT EXERCISE */}
        <div className="flex justify-center items-center">
          <select
            onChange={this.handleLangChange}
            className="border p-1 border-slate-700 rounded-md m-4"
          >
            <optgroup>
              <option value="it">Italiano</option>
              <option value="en">Inglese</option>
              <option value="fr">Francese</option>
            </optgroup>
          </select>
          <LanguageContext.Provider value={this.state.lang}>
            <DisplayLanguage />
          </LanguageContext.Provider>
        </div>
        {/* END CONTEXT EXERCISE */}
        <hr />
        {/* START TODO LIST */}
        <TodoList
          render={(items, handleRemove) => {
            return (
              <ul
                className={`${styles.list} ${
                  items.length === 0 && "invisible"
                }`}
              >
                {items.map((item, index) => (
                  <li key={item + index} className={styles.listItem}>
                    {item}
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleRemove(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            );
          }}
        />
        {/* END TODO LIST */}
        <Hello />
        <hr />
        <Welcome name={<strong>Gianni</strong>} age={25} />
        <hr />
        <Welcome name={<strong>Pino</strong>} age={16} />
        <hr />
        <Welcome name={<strong>Mario</strong>} age={67} />
        <hr />
        <Welcome name={<strong>John</strong>} age={42} />
        <hr />
        <Welcome />
        <hr />
        <Counter initialValue={0} increment={2} interval={2000} />
        <hr />
        <ClickCounter />
        <hr />
        <ClickTracker />
        <hr />
        <InteractiveWelcome />
        <hr />
        <Login onLogin={this.onLogin} />
        <hr />
        <UncontrolledLogin onLogin={this.onLogin} />
        <hr />
        <Container title="Questo è il titolo">
          Questo è il contenuto del componente "Container"
        </Container>
      </div>
    );
  }
}
