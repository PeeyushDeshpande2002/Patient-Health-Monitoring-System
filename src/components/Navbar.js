import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import { useAuth } from "../strore/auth";

export const Navbar = () => {
//   const { isLoggedIn } = useAuth();
//   const {user} = useAuth();
//   const isAdmin = user.isAdmin;
  return (
    <>
      <header>
        <div className="navbar">
          <div>
            <NavLink to="/">Health Tracker</NavLink>
          </div>

          <nav>
            <ul>
                <>
                <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
                </>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
