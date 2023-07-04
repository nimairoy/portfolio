
const Navbar = () => {

    const navbarItems = <>
        <li> <a className="bg-none text-lg hover:text-yellow-500" href="/"> Home </a></li>
        <li> <a className="bg-none text-lg hover:text-yellow-500" href="/#about"> About </a></li>
        <li> <a className="bg-none text-lg hover:text-yellow-500" href="/#service"> Services </a></li>
        <li> <a className="bg-none text-lg hover:text-yellow-500" href="/#portfolio"> Portfolio </a></li>
        <li> <a className="bg-none text-lg hover:text-yellow-500" href="/contact"> Contact </a></li>
    </>

    return (
        <div style={ {backgroundColor: '#9333EA'} } className="text-white">
            <div className="navbar my-container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul style={ {backgroundColor: "#050505"} } tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navbarItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost  text-yellow-400 text-xl">Dev Nimai</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;