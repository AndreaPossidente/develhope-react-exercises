import { useState } from "react";

export default function useForm() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return { data, handleForm };
}
