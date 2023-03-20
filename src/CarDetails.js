import React, { useEffect, useRef } from "react";

export default function CarDetails({ initialData }) {
  const formRef = useRef(initialData);

  useEffect(() => {
    const [model, year, color] = formRef.current;
    model.value = initialData.model;
    year.value = initialData.year;
    color.value = initialData.color;
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [model, year, color] = formRef.current;
    console.log(model.value, year.value, color.value);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="model">Model:</label>
      <input type="text" id="model" name="model" placeholder="model" />

      <label htmlFor="year">Year:</label>
      <input type="text" id="year" name="year" placeholder="year" />

      <label htmlFor="color">Color:</label>
      <input type="text" id="color" name="color" placeholder="color" />

      <button type="submit">Submit</button>
    </form>
  );
}
