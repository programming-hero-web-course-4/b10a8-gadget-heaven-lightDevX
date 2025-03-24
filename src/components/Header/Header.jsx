import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <Link to="/">Gadget Heaven</Link>
        </div>
        <nav>dhfd</nav>
        <div>
          <button>cart</button>
          <button>Wish List</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
