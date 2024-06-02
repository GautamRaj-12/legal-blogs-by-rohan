/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/legal-blogs-logo.svg";
import searchIcon from "../../assets/images/search.svg";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../store/userSlice";
import axios from "axios";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store: any) => store.user.user);
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/logout`,
        {},
        { withCredentials: true }
      );
      console.log(response);
      dispatch(clearUser());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <header className="pt-4 font-roboto">
        <nav className="flex justify-between items-center text-dark text-buttonText uppercase border border-dark/25 px-6 py-4 rounded-full">
          <div>
            <NavLink to="/">
              <img src={logo} alt="Legal blogs by rohan logo" />
            </NavLink>
          </div>
          <ul className="flex items-center gap-6">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="">
              <li>Posts</li>
            </NavLink>
            <NavLink to="">
              <li>About</li>
            </NavLink>
            <NavLink to="">
              <li>Contact</li>
            </NavLink>
          </ul>
          <ul className="flex items-center gap-4">
            <img
              src={searchIcon}
              alt="A clickable search icon for searching blog posts"
              className="bg-dark/10 rounded-full p-2"
            />
            {user === null ? (
              <NavLink to="/login">
                <li className="py-3 px-6 bg-dark text-light rounded-[24px]">
                  Login
                </li>
              </NavLink>
            ) : (
              <NavLink to="" onClick={handleLogout}>
                <li className="py-3 px-6 bg-dark text-light rounded-[24px]">
                  Logout
                </li>
              </NavLink>
            )}

            <NavLink to="/write">
              <li className="py-3 px-6 bg-dark text-light rounded-[24px]">
                Write
              </li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
