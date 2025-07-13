import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div>
        <NavLink to="/">
          <img src="/src/images/Logo.svg" alt="Logo" />
        </NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <div>
            <li>
              <NavLink to="/about">About</NavLink>{" "}
            </li>
            <div className="relative group">
              <ul>
                <li>
                  <NavLink to="/about/lenka">Lenka</NavLink>
                </li>
                <li>
                  <NavLink to="/about/training-classes">Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/about/sessions">Sessions</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <li>
            <NavLink to="/services">Services</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>{" "}
          </li>
        </ul>
        <div>
          <img src="/src/images/cart.svg" alt="cart" />
          <img src="/src/images/user.svg" alt="user" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
