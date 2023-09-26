import { Outlet, Link } from "react-router-dom";
import "../index.css";
export const Root = () => {
  return (
    <div>
      <div className="navigation">
        <div>
          <Link to="/cards">My Cards</Link>
        </div>
        <div>
          <Link to="/addcard">Add Card</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
