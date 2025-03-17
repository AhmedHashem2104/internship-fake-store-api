import { JSX, useState } from "react";
import apis from "../apis/apis";

const Login = (): JSX.Element => {
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await apis.loginFn(payload);
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>Username</label>
      <input name="username" onChange={handleChange} />
      <label>Password</label>
      <input name="password" onChange={handleChange} />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
