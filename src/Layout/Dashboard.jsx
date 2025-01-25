import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBookAtlas, FaList, FaMessage, FaUsers, FaUtensils } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { MdListAlt, MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();

    // Get admin Values from the database
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-72 min-h-screen bg-orange-500">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome">
                                <FaHome></FaHome>
                                Admin Home</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/manageItems">
                                <FaList></FaList>
                                Manage Items</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/manageBookings">
                                <FaBookAtlas />
                                Manage Bookings</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/allUsers">
                                <FaUsers />
                                All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    User Home</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart ({cart.length})</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/reservation">
                                    <FaCalendar></FaCalendar>
                                    Reservation</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/review">
                                    <MdOutlineReviews />
                                    Add Review</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/bookings">
                                    <MdListAlt />
                                    My bookings</NavLink>
                                </li>
                            </>
                    }

                    {/* Common Nav Links */}

                    {/* divider */}

                    <div className="divider divider-success"></div>

                    <li><NavLink to="/home">
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li><NavLink to="/menu">
                        <FaHome></FaHome>
                        Menu</NavLink>
                    </li>
                    <li><NavLink to="/order">
                        <FiShoppingBag />
                        Shop</NavLink>
                    </li>
                    <li><NavLink to="/aboutUs">
                        <FaMessage></FaMessage>
                        Contact</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;