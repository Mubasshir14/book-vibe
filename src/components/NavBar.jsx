import { NavLink } from "react-router-dom";


const NavBar = () => {

    const navItem = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/listed'>Listed Book</NavLink></li>
    <li><NavLink to='/toread'>Pages To Read</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 border-b-4 border-[#23BE0A]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu text-[#23BE0A] menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl md:text-2xl text-[#23BE0A] font-extrabold font-play">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-[#23BE0A] gap-4 menu-horizontal px-1">
                       {navItem}
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <a className="btn text-white font-semibold bg-[#23BE0A]">Sign In</a>
                    <a className="btn text-white font-semibold bg-[#59C6D2] hidden md:flex">Sign Up</a>
                </div>
            </div>
            
        </div>

    );
};

export default NavBar;