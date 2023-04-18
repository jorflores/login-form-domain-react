import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const domain = "nagarro.com";

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="username-input">Usuario:</label>
          <div style={styles.inputGroup}>
            <input
              id="username-input"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              style={styles.input}
              required
            />
            <div style={styles.domain}>{`@${domain}`}</div>
          </div>
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  heading: {
    marginBottom: "32px",
    fontSize: "36px",
    fontWeight: "bold",
  },
  formGroup: {
    marginBottom: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: "8px",
    borderRadius: "4px 0 0 4px",
    border: "1px solid #ccc",
    width: "200px",
    marginRight: "-1px",
  },
  domain: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "0 4px 4px 0",
    backgroundColor: "#f5f5f5",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default LoginPage;
