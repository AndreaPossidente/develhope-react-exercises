import React from "react";
import Counter from "./Counter";
import FilteredList from "./FilteredList";

export default function App() {
  const peopleList = [
    { id: 0, name: "Mario", age: 25 },
    { id: 1, name: "Luigi", age: 14 },
    { id: 2, name: "Romeo", age: 27 },
    { id: 3, name: "Nadia", age: 31 },
    { id: 4, name: "Piero", age: 10 },
    { id: 5, name: "Stefania", age: 45 },
    { id: 6, name: "Francesco", age: 28 },
    { id: 7, name: "Elena", age: 16 },
    { id: 8, name: "Andrea", age: 30 },
    { id: 9, name: "Silvio", age: 24 },
  ];

  return (
    <div>
      <Counter initialValue={0} />
      <FilteredList list={peopleList} />
    </div>
  );
}
