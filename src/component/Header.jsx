import { NavLink } from "react-router-dom";
function Header({searchRes}) {
  return (
    <nav className="nav">
      <p className="resnum">Search Result:{searchRes}</p>
      <div>
        <p className="nameuse">
          Admin
        </p>
        <NavLink className="exit" to="/">
        LogOut
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;