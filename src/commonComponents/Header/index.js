import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <div>
      {/* {Object.entries(ROUTES).map(([routeName, path]) => (
        <Link to={path} key={routeName}>
          <button>{(routeName)}</button>
        </Link>
      ))} */}

<NavBar />

      {/* <Link to={ROUTES.HOME}><button>Home</button></Link> */}
    </div>
  );
};

export default Header;