import React ,{useEffect}  from'react'
import { NavLink,Link,useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
function Header() {
    const redirect = useNavigate();
    useEffect(()=>{
        if (!localStorage.getItem('admin_id')) {
           return redirect('/'); 
        }
    });
    const logout = () => {
        localStorage.removeItem('admin_id');
       localStorage.removeItem('admin_name');
       toast.success('logout sucess');
       return redirect('/')  
 }
    // 
    return (
        <div>
            <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>

                    <Link className="navbar-brand" to="/Home">COMPANY NAME</Link>
                </div>
                <div className="header-right">
                    <a href="message-task.html" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-envelope-o fa-2x" /></a>
                    <a href="message-task.html" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-2x" /></a>
                    <a href="javascript:void(0)" onClick={logout} className="btn btn-danger" title="Logout"><i className="fa fa-exclamation-circle fa-2x" /></a>
                </div>
            </nav>
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <div className="user-img-div">
                                <img src="assets/img/user.png" className="img-thumbnail" />
                                <div className="inner-text">
                                    {/* Jhon Deo Alex */}
                                   
                                    {
                                        (
                                            ()=>{
                                                if(localStorage.getItem('admin_id'))
                                                {
                                                    return(
                                                        <>
                                                            {localStorage.getItem('admin_name')}
                                                        </>
                                                    )
                                                }
                                            }
                                        )()
                                    }
                                    {/* Nikhil Gaud */}
                                     <br />
                                    <small>Last Login : 2 Weeks Ago </small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink className="active-menu" to="/Home"><i className="fa fa-dashboard " />Dashboard</NavLink>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-desktop " />Admin<span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/Add_admin"><i className="fa fa-toggle-on" />Add_Admin</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Manage_add"><i className="fa fa-bell " />Manage_Admin</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Add_cate"><i className="fa fa-circle-o " />Add_categories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Manage_cate"><i className="fa fa-code " />Manage_Categories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Add_prod"><i className="fa fa-bug " />Add_product</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Manage_prod"><i className="fa fa-bug " />Manage_product</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Add_contact"><i className="fa fa-edit " />Add_contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Mnage_cont"><i className="fa fa-eyedropper " />Manage contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Add_employee"><i className="fa fa-edit " />Add_employee</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Manage_employee"><i className="fa fa-eyedropper " /> Mnage_employee</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Add_customer"><i className="fa fa-edit " />Add_customer</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Manage_customer"><i className="fa fa-eyedropper " /> Manage_customer</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Add_blog"><i className="fa fa-edit " />Add_blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Manage_blog"><i className="fa fa-eyedropper " /> Manage_blog</NavLink>
                                </li>
                                <li>
                                    {/* <NavLink to="/Add_cart"><i className="fa fa-edit " />Add_cart</NavLink> */}
                                </li>
                                <li>
                                    {/* <NavLink to="/Manage_cart"><i className="fa fa-eyedropper " /> Manage_cart</NavLink>   */}
                                </li>
                                <li>
                                    {/* <NavLink to="/Add_order"><i className="fa fa-edit " />Add_order</NavLink> */}
                                </li>
                                <li>
                                    {/* <NavLink to="/Manage_order"><i className="fa fa-eyedropper " /> Manage_order</NavLink>   */}
                                </li>
                                <li>
                                    {/* <NavLink to="/Add_payment"><i className="fa fa-edit " />Add_payment</NavLink> */}
                                </li>
                                <li>
                                    {/* <NavLink to="/Manage_payment"><i className="fa fa-eyedropper " /> Manage_payment</NavLink>   */}
                                </li>
{/* ///// */}
{/* ///// */}
                               
                            </ul>
                        </li>
                        {/* <li>
                            <a href="#"><i className="fa fa-yelp " />Extra Pages <span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="invoice.html"><i className="fa fa-coffee" />Invoice</a>
                                </li>
                                <li>
                                    <a href="pricing.html"><i className="fa fa-flash " />Pricing</a>
                                </li>
                                <li>
                                    <a href="component.html"><i className="fa fa-key " />Components</a>
                                </li>
                                <li>
                                    <a href="social.html"><i className="fa fa-send " />Social</a>
                                </li>
                                <li>
                                    <a href="message-task.html"><i className="fa fa-recycle " />Messages &amp; Tasks</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li>
                            <a href="table.html"><i className="fa fa-flash " />Data Tables </a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bicycle " />Forms <span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="form.html"><i className="fa fa-desktop " />Basic </a>
                                </li>
                                <li>
                                    <a href="form-advance.html"><i className="fa fa-code " />Advance</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="gallery.html"><i className="fa fa-anchor " />Gallery</a>
                        </li>
                        <li>
                            <a href="error.html"><i className="fa fa-bug " />Error Page</a>
                        </li> */}
                        <li>
                            <NavLink to="/"><i className="fa fa-sign-in " />Login Page</NavLink>
                        </li>
                        <li className="nav-item">
        {(()=>{
          if (localStorage.getItem('admin_id')) {
            return(
              <div className='col-sm-4 col-6 top-login-buttn-right mt-sm-2'>
                <Link to="javascript:void(0)" onclick={logout}
                className="nav-item">Logout</Link>
              </div>
            )
            
          }else{
            return(
              <div className='col-sm-4 col-6 top-login-buttn-right mt-sm-2'>
              <Link to="/login" 
              className="nav-item">Login</Link>
            </div>
            )
          }
        })()}
        </li>
                        {/* <li>
                            <a href="#"><i className="fa fa-sitemap " />Multilevel Link <span className="fa arrow" /></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#"><i className="fa fa-bicycle " />Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-flask " />Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link<span className="fa arrow" /></a>
                                    <ul className="nav nav-third-level">
                                        <li>
                                            <a href="#"><i className="fa fa-plus " />Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-comments-o " />Third Level Link</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li>
                            <a href="blank.html"><i className="fa fa-square-o " />Blank Page</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>

    )
}
// }

export default Header