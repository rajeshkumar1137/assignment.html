import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Header() {
    const redirect = useNavigate();
    const Logout = () => {
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        toast.success('Logout Success !');
        return redirect('/login');
    }
    return (
        <div className="header">
            <div className="header-top">
                <div className="container">
                    <div className="col-sm-4 world">
                        <ul>
                            <li>
                                <select className="in-drop">
                                    <option>English</option>
                                    <option>Japanese</option>
                                    <option>French</option>
                                </select></li>
                            <li><select className="in-drop1">
                                <option>Dollar</option>
                                <option>Euro</option>
                                <option>Yen</option>
                            </select>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 logo">
                        <a href="index.html"><img src="images/logo.png" alt /></a>
                    </div>{/* <Link to="javascript:void(0)" className="color6" onClick={Logout}>Logout</Link> */}
                    <div className="col-sm-4 header-left">
                        {
                            (() => {
                                if (localStorage.getItem('user_id')) {
                                    return (

                                        <div className=""><Link to="javascript:void(0)" onClick={Logout}>Logout</Link>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div>
                                            <Link to="/" className="color6" >Login</Link><span>or</span><Link to="/Signup">Signup</Link>
                                        </div>
                                    )
                                }
                            })()}

                        <div className="cart box_1">
                            <a href="checkout.html">
                                <h3> <div className="total">
                                    <span className="simpleCart_total" /></div>
                                    <img src="images/cart.png" alt /></h3>
                            </a>
                            <p><a href="javascript:;" className="simpleCart_empty">Empty Cart</a></p>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="container">
                <div className="head-top">
                    <div className="col-sm-2 number">
                        <span><i className="glyphicon glyphicon-phone" />085 596 234</span>
                    </div>
                    <div className="col-sm-8 h_menu4">
                        <ul className="memenu skyblue">
                            <li className=" grid"><NavLink to="/Home">Home</NavLink></li>
                            <li><a href="#">Men</a>
                                <div className="mepanel">
                                    <div className="row">
                                        <div className="col1">
                                            <div className="h_nav">
                                                <h4>All Clothing</h4>
                                                <ul>
                                                    <li><a href="products.html">Shirts</a></li>
                                                    <li><a href="products.html">Sports Wear</a></li>
                                                    <li><a href="products.html">Shorts</a></li>
                                                    <li><a href="products.html">Suits &amp; Blazers</a></li>
                                                    <li><a href="products.html">Formal Shirts</a></li>
                                                    <li><a href="products.html">Sweatpants</a></li>
                                                    <li><a href="products.html">Swimwear</a></li>
                                                    <li><a href="products.html">Trousers &amp; Chinos</a></li>
                                                    <li><a href="products.html">T-Shirts</a></li>
                                                    <li><a href="products.html">Underwear &amp; Socks</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col1">
                                            <div className="h_nav">
                                                <h4>Footwear</h4>
                                                <ul>
                                                    <li><a href="products.html">Formal Shoes</a></li>
                                                    <li><a href="products.html">Boots</a></li>
                                                    <li><a href="products.html">Sports Shoes</a></li>
                                                    <li><a href="products.html">Casual Shoes</a></li>
                                                    <li><a href="products.html">Running Shoes</a></li>
                                                    <li><a href="products.html">Sneakers</a></li>
                                                    <li><a href="products.html">Loafers</a></li>
                                                    <li><a href="products.html">Slippers</a></li>
                                                    <li><a href="products.html">Sandals</a></li>
                                                    <li><a href="products.html">Flip-flops</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col1">
                                            <div className="h_nav">
                                                <h4>Popular Brands</h4>
                                                <ul>
                                                    <li><a href="products.html">Levis</a></li>
                                                    <li><a href="products.html">Persol</a></li>
                                                    <li><a href="products.html">Nike</a></li>
                                                    <li><a href="products.html">Edwin</a></li>
                                                    <li><a href="products.html">New Balance</a></li>
                                                    <li><a href="products.html">Jack &amp; Jones</a></li>
                                                    <li><a href="products.html">Paul Smith</a></li>
                                                    <li><a href="products.html">Ray-Ban</a></li>
                                                    <li><a href="products.html">Wood Wood</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="grid"><a href="#">	Women</a>
                                <div className="mepanel">
                                    <div className="row">
                                        <div className="col1">
                                            <div className="h_nav">
                                                <h4>All Clothing</h4>
                                                <ul>
                                                    <li><a href="products.html">Shirts &amp; Tops</a></li>
                                                    <li><a href="products.html">Sports Wear</a></li>
                                                    <li><a href="products.html">Kurtas &amp; Kurties</a></li>
                                                    <li><a href="products.html">Suits &amp; Blazers</a></li>
                                                    <li><a href="products.html">Sarees</a></li>
                                                    <li><a href="products.html">Sweatpants</a></li>
                                                    <li><a href="products.html">Swimwear</a></li>
                                                    <li><a href="products.html">Night-Suits</a></li>
                                                    <li><a href="products.html">T-Shirts</a></li>
                                                    <li><a href="products.html">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col1">
                                            <div className="h_nav">
                                                <h4>Footwear</h4>
                                                <ul>
                                                    <li><a href="products.html">Heels</a></li>
                                                    <li><a href="products.html">Flats</a></li>
                                                    <li><a href="products.html">Sports Shoes</a></li>
                                                    <li><a href="products.html">Casual Shoes</a></li>
                                                    <li><a href="products.html">Running Shoes</a></li>
                                                    <li><a href="products.html">Wedges</a></li>
                                                    <li><a href="products.html">Boots</a></li>
                                                    <li><a href="products.html">Pumps</a></li>
                                                    <li><a href="products.html">Slippers</a></li>
                                                    <li><a href="products.html">Flip-flops</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col1">
                                            <div className="h_nav">
                                                <h4>Popular Brands</h4>
                                                <ul>
                                                    <li><a href="products.html">Levis</a></li>
                                                    <li><a href="products.html">Persol</a></li>
                                                    <li><a href="products.html">Nike</a></li>
                                                    <li><a href="products.html">Edwin</a></li>
                                                    <li><a href="products.html">New Balance</a></li>
                                                    <li><a href="products.html">Jack &amp; Jones</a></li>
                                                    <li><a href="products.html">Paul Smith</a></li>
                                                    <li><a href="products.html">Ray-Ban</a></li>
                                                    <li><a href="products.html">Wood Wood</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><NavLink to="Blog">Blog</NavLink></li>
                            <li><NavLink className="color6" to="/Contact">Contact</NavLink></li>
                            {/* <li><NavLink className="color6" to="/Contact">Contact</NavLink></li> */}
                            {(() => {
                                if (localStorage.getItem('user_id')) {
                                    return (
                                        <li className="nav-item">
                                            <NavLink className="color6" to="/profile">Hi ..{localStorage.getItem('user_name')} / Profile</NavLink>
                                        </li>
                                    )
                                }
                            })()}


                        </ul>
                    </div>

                    <div className="col-sm-2 search">
                        <a className="play-icon popup-with-zoom-anim" href="#small-dialog"><i className="glyphicon glyphicon-search"> </i> </a>
                    </div>
                    <div className="clearfix"> </div>
                    {/*-pop-up-box--*/}
                    <link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
                    {/*-//pop-up-box--*/}
                    <div id="small-dialog" className="mfp-hide">
                        <div className="search-top">
                            <div className="login">
                                <input type="submit" defaultValue />
                                <input type="text" defaultValue="Type something..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" />
                            </div>
                            <p>	Shopping</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Header
