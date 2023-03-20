import React, { useMemo } from "react";

export default function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age >= 18);
  }, [list]);

  return (
    <>
      <h1 className="font-bold text-xl">FitleredList</h1>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>{`${item.name} is ${item.age} year's old`}</li>
        ))}
      </ul>
    </>
  );
}
