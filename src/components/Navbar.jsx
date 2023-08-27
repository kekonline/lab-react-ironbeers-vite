import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";

function Navbar() {
  const navStyle = {
    backgroundColor: "turquoise",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "125px",
    width: "705px",
  };

  return (
    <Link to="/">
      <div style={navStyle}>
        <img src={homeIcon} />
      </div>{" "}
    </Link>
  );
}

export default Navbar;
