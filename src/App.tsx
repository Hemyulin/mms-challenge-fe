import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";

interface FormState {
  name: string;
  email: string;
  password: string;
}

function App() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const url = `http://localhost:3000/graphql`;
    const query = `
      mutation {
        createCustomer(
          name: "${formState.name}"
          email: "${formState.email}"
          password: "${formState.password}"
        ) {
          id
          name
          email
          password
        }
      }
    `;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok, status: ${response.status}`
        );
      }

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error("Failed to fetch:", err);
    }
  };

  return (
    <>
      <h1>LOL</h1>
      <h3>Create account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Create Account</button>
      </form>
    </>
  );
}

export default App;
