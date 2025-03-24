import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <Link to="/">Gadget Heaven</Link>
        </div>
        <nav className="gap-7">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <div>
          <button>cart</button>
          <button>Wish List</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
