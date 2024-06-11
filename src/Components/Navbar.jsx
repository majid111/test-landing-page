import { IoMdArrowDropdown } from "react-icons/io";
import logoLarge from '../assets/logo large.svg';

const Navbar = () => {

  const navLink = (
    <>
      <li className="mr-6 flex items-center hover:border-b-4 border-white">
        Platform <IoMdArrowDropdown />
      </li>
      <li className="mr-6 hover:border-b-4 border-white">Services</li>
      <li className="mr-6 flex items-center hover:border-b-4 border-white">
        Templates <IoMdArrowDropdown />
      </li>
      <li className="mr-6 hover:border-b-4 border-white">Pricing</li>
      <li className="mr-6 flex items-center hover:border-b-4 border-white">
        Expertise <IoMdArrowDropdown />
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent py-3 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 mr-10"
          >
            {navLink}
          </ul>
        </div>
        <div className="flex items-center">
          <div >
          <a className="btn btn-ghost text-xl"><p className="flex"><img src={logoLarge} alt="" />Leadpages</p></a>
          </div>
          <div className="lg:items-center hidden pl-12 pr-1 lg:flex ">
            <ul className="flex px-1 items-center ">{navLink}</ul>
          </div>
        </div>
      </div>
      <div className="navbar-end gap-4">
        <a className="hover:border-b-4 border-white ">log in</a>
        <button className="btn border-4 border-[#d1c6f9] rounded-full bg-transparent text-white hover:bg-white hover:text-[#4938C4] hover:border-white ">Start Free Trial</button>
      </div>
    </div>
  );
};

export default Navbar;
