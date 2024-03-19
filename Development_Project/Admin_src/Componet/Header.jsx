import React, { useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('admin_id')) {
            return redirect('/')
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('admin_id');
        localStorage.removeItem('admin_name');
        toast.success('Logout Success !');
        return redirect('/login');
    }
    return (
        <div>
            <div id="wrapper">
                <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink className="navbar-brand" to="/">COMPANY NAME</NavLink>
                    </div>
                    <div className="header-right">
                        <a href="/Messages_Tasks" className="btn btn-info " title="New Message"><b>30 </b><i className="fa fa-envelope-o fa-2x" /></a>
                        <a href="/Messages_Tasks" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-2x" /></a>

                        <a href="javascript:void(0)" onClick={logout} className="btn btn-danger" title="logout"><i className="fa fa-exclamation-circle fa-2x" /></a>
                    </div>
                </nav>
                {/* /. NAV TOP  */}
                <nav className="navbar-default navbar-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav" id="main-menu">
                            <li>
                                <div className="user-img-div">
                                    <img src="assets/img/user.png" className="img-thumbnail" />
                                    <div className="inner-text">
                                        {
                                            (
                                                () => {
                                                    if (localStorage.getItem('admin_id')) {
                                                        return (
                                                            <>
                                                                {localStorage.getItem('admin_name')}
                                                            </>
                                                        )

                                                    }
                                                }
                                            )()
                                        }

                                        <br />
                                        <small>Last Login : 2 Weeks Ago </small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <NavLink className="active-menu " to="/home"><i className="fa fa-dashboard " />Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="#"><i className="fa fa-desktop " />Admin <span className="fa arrow" /></NavLink>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/Add_Admin"><i className="fa fa-toggle-on" />Add Admin</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Manage_Admin"><i className="fa fa-toggle-on" />Manage Admin</NavLink>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-desktop " />Employee <span className="fa arrow" /></a>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/add_emp"><i className="fa fa-toggle-on" />Add Employee</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manage_emp"><i className="fa fa-toggle-on" />Manage Employee</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="#"><i className="fa fa-yelp " />Categories <span className="fa arrow" /></NavLink>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/Add_categories"><i className="fa fa-toggle-on" />Add Categories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Manage_Categories"><i className="fa fa-toggle-on" />Manage Categories</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="#"><i className="fa fa-bicycle " />Products <span className="fa arrow" /></NavLink>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/Add_products"><i className="fa fa-toggle-on" />Add Products</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Manage_Product"><i className="fa fa-toggle-on" />Manage Products</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="#"><i className="fa fa-desktop " />View cart <span className="fa arrow" /></NavLink>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <NavLink to="/Add_cart"><i className="fa fa-toggle-on" />Add cart</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manage_cart"><i className="fa fa-toggle-on" />Manage cart</NavLink>
                                    </li>

                                </ul>
                            </li>

                            <li>
                                <NavLink to="#"><i class="fa fa-yelp "></i>Blog<span class="fa arrow"></span></NavLink>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <NavLink to="/Add_blog"><i class="fa fa-toggle-on "></i>Add blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Manage_blog"><i class="fa fa-toggle-on "></i>Manage blog</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/Manage_contact"><i className="fa fa-desktop " />Manage_contact <span className="fa arrow" /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/Manage_User"><i className="fa fa-desktop " />Manage_User <span className="fa arrow" /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/"><i className="fa fa-sign-in " />Login Page</NavLink>
                            </li>









                            {/* <li>
                                <NavLink to="table.html"><i className="fa fa-flash " />Data Tables </NavLink>
                            </li> */}

                            {/* <li>
                                <NavLink to="/"><i class="fa fa-yelp "></i>ExtraPages <span class="fa arrow"></span></NavLink>
                                <ul class="nav nav-second-level">

                                    <li>
                                        <NavLink to="/Messages_Tasks"><i class="fa fa-recycle "></i>Messages & Tasks</NavLink>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </nav>
                {/* /. NAV SIDE  */}

                {/* /. PAGE WRAPPER  */}
            </div>
        </div>

    )
}

export default Header