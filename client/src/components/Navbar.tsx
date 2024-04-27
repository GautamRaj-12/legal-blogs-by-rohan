import { useState } from "react";
import logo from "../assets/legal-blogs-logo-light.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../app/userSlice";
import axios from "axios";
import { API_URL } from "../config";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState<string>("block");
  const [menuClose, setMenuClose] = useState<string>("hidden");
  const [navLink, setNavLink] = useState<string>("hidden");

  const handleOpenMenu = (): void => {
    setMenuOpen("hidden");
    setMenuClose("block");
    setNavLink("flex");
  };

  const handleCloseMenu = (): void => {
    setMenuClose("hidden");
    setMenuOpen("block");
    setNavLink("hidden");
  };

  const user = useSelector((store: any) => store.user.user);
  // console.log(user);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/users/logout`,
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
      <header className="px-4 py-4 md:py-2">
        <nav className="grid grid-cols-12 gap-2 font-bold">
          <h1 className="col-span-3 ">
            <Link to="/">
              <img src={logo} alt="legal blogs by rohan logo" />
            </Link>
          </h1>
          <ul
            className={`col-span-9 text-2xl md:flex ${navLink} md:flex-row flex-col justify-evenly items-center md:relative absolute md:top-auto top-0 md:right-auto right-0 md:bg-transparent bg-[--primary-bg-color] md:h-auto h-screen md:w-auto w-1/2 animate-slide-from-right`}
          >
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="#posts">
              <li>Posts</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
            {user === null ? (
              <NavLink to="/Login">
                <li>Login</li>
              </NavLink>
            ) : (
              <NavLink to="" onClick={handleLogout}>
                <li>Logout</li>
              </NavLink>
            )}
            {user === null ? (
              <NavLink to="/login">
                <li>Write</li>
              </NavLink>
            ) : (
              <NavLink to="/write">
                <li>Write</li>
              </NavLink>
            )}

            <ul className="flex gap-5">
              <Link to="https://x.com/abdsa017" target="_blank">
                <li>
                  <i className="fa-brands fa-x-twitter"></i>
                </li>
              </Link>
              <Link
                to="https://www.linkedin.com/in/rohan-raj-604342213/"
                target="_blank"
              >
                <li>
                  <i className="fa-brands fa-linkedin-in"></i>
                </li>
              </Link>
              <Link to="https://www.instagram.com/abd_sa_017/" target="_blank">
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </Link>
            </ul>
          </ul>
          <div className="absolute right-0 mr-2 cursor-pointer menu">
            <i
              className={`fa-solid fa-bars text-4xl absolute right-0 md:hidden ${menuOpen}`}
              onClick={handleOpenMenu}
            ></i>
            <i
              className={`fa-solid fa-xmark text-4xl absolute right-0 ${menuClose}`}
              onClick={handleCloseMenu}
            ></i>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
