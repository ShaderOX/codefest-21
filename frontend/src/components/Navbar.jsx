const Navbar = ({ className, ...props }) => {
  return (
    <header className="text-gray-600 body-font bg-orange-600 ">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-2 text-3xl  text-white">Hyper Kart</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center text-white text-lg font-mono">
          <a className="mr-5 hover:font-bold bg-fuchsia-700 px-4 py-2 rounded-lg font-bold">
            Home
          </a>
          <a className="mr-5  hover:font-bold  ">About Us</a>
          <a className="mr-5 hover:font-bold ">Contact</a>
        </nav>

        <i class="fas fa-shopping-cart fa-3x mr-5"></i>
      </div>
    </header>
  );
};

export default Navbar;
