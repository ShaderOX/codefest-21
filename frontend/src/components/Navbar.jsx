import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ className, ...props }) => {
  return (
    <header className="text-gray-600 body-font bg-slate-800">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <span className="ml-2 text-2xl text-white">Hyper Kart</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-white text">
          <a className="mr-5 font-semibold text-black bg-gray-400 px-4 py-2 rounded-lg cursor-pointer">
            Home
          </a>
          <a className="mr-5 hover:font-bold cursor-pointer" href="#">
            About Us
          </a>
          <a className="mr-5 hover:font-bold cursor-pointer" href="#">
            Contact
          </a>
        </nav>

        <FontAwesomeIcon
          icon={faShoppingCart}
          className="mr-5 fa-2x text-white"
        />
      </div>
    </header>
  );
};

export default Navbar;
