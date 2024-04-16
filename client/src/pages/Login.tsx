import { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../app/userSlice";
import { API_URL } from "../config";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(true);
  const [usernameEmail, setusernameEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleUserNameEmailChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setusernameEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleShowHide = (e: SyntheticEvent) => {
    let passwordInput =
      document.querySelector<HTMLInputElement>(".password-input");
    e.preventDefault();
    if (passwordInput) {
      const currentType = passwordInput.type;
      passwordInput.type = currentType === "password" ? "text" : "password";
      setShow(currentType === "password" ? false : true);
    }
  };

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/users/login`,
        {
          email: usernameEmail,
          username: usernameEmail,
          password,
        },
        {
          withCredentials: true,
        }
      );
      // console.log(response);
      const loggedInUser = response.data.data.user;
      // console.log(loggedInUser);

      dispatch(setUser(loggedInUser));

      setusernameEmail("");
      setPassword("");
      setError(null);
      navigate("/");
      console.log(error);
    } catch (error: any) {
      // Handle login error
      setError(error.response.data.message || "An error occurred during login");
      console.log(
        error.response.data.message || "An error occurred during login"
      );
    }
  };
  return (
    <>
      <section className="mt-8 login">
        <h2 className="text-3xl font-[pacifico] text-center mb-4">Login</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center md:w-[500px] w-[100%] py-5 mx-auto mb-5 bg-slate-700/50 h-[400px] rounded-lg"
        >
          <div className="w-2/3 mb-4">
            <input
              type="text"
              className="w-full p-2 text-lg bg-transparent border-[1px] rounded-md outline-none border-slate-500"
              placeholder="enter username or email"
              value={usernameEmail}
              onChange={handleUserNameEmailChange}
            />
          </div>
          <div className="relative w-2/3 mb-4">
            <input
              type="password"
              className="w-full p-2 text-lg rounded-md bg-transparent border-[1px] outline-none border-slate-500 password-input"
              placeholder="enter password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className="absolute right-1 top-2 bg-[--button-bg-color] px-2 py-1 font-semibold rounded-sm"
              onClick={handleShowHide}
            >
              {show ? "show" : "hide"}
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[--button-bg-color2] text-slate-800 px-6 py-2 rounded-3xl font-[pacifico] text-lg mb-3"
            >
              Login
            </button>
          </div>
          <p className="text-lg">
            Don't have an account?{" "}
            <span className="italic font-bold underline">
              {" "}
              <NavLink to="/register">Register</NavLink>
            </span>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
