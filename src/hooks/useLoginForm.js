import { useState } from "react";

export default function useForm() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return {
    username: data.username,
    password: data.password,
    handleInputChange,
  };
}
