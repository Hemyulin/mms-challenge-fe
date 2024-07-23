import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const url = `http://localhost/3000/graphql`;

    const postData = async () => {
      const data = {};
    };

    try {
      const data = 10;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    [0];
  });

  return (
    <>
      <h1>LOL</h1>
      <form></form>
    </>
  );
}

export default App;
