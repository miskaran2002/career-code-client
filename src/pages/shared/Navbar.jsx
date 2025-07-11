import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Navbar = () => {
    const { User, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('User signed out successfully');
            })
            .catch(error => {
                console.error('Error signing out:', error);
            });
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            {/* for applicant links.check roles as well  */}
            {
                User && <>
                    <li><NavLink to="/myApplications">MyApplications</NavLink></li>

                </>
            }
            {/* for recruiter .check role as well  */}
            {
                User && <>
                    <li><NavLink to="/addJob">Add Job</NavLink></li>
                    <li><NavLink to="/myPostedJobs">My Posted Jobs</NavLink></li>

                </>

            }
        </>
       
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
               
                {
                    User ? <button onClick={handleSignOut} className='btn'>Sign Out</button> :
                        <>
                            <NavLink className="btn" to="/register">Register</NavLink>
                            <NavLink className="btn" to="/signIn">Sign In</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;
