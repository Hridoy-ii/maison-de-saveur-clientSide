import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaOpencart } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";



const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    console.log(cart);

    const [isAdmin] = useAdmin();

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        {/* <li><Link to="/secret">Secret</Link></li> */}
        <li><Link to="/dashboard/cart">
            <button className="btn">
                <FaOpencart className="mr-4" />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>

        </Link></li>

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Maison de Saveur</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user ? <>
                            {/* <span>{ user?.displayName }</span> */}
                            <button onClick={handleSignOut} className="btn btn-sm btn-active">Log out</button>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                </div>
                            </div>
                        </> :
                            <>
                                <button className="btn btn-sm btn-active"><Link to="/login">Login</Link></button>
                            </>
                    }

                </div>
            </div>
        </>
    );
};

export default NavBar;