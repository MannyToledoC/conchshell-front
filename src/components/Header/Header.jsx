import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.scss";

function Header() {
  const account = useSelector((state) => state.account);
  return (
    <header className="project-header">
      <nav className="project-nav">
        <NavLink exact activeClassName="selected" className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="selected" className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink
          exact
          activeClassName="selected"
          className="nav-link"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        {account.status === "online" ? (
          <div className="user">
            <h5 className="user-name">{account.name}</h5>
            <Button className="logout" variant="dark">
              Logout
            </Button>
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}

export default Header;
