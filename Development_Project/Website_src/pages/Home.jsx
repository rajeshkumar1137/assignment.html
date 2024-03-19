import React from 'react'
import { NavLink, Link } from 'react-router-dom'
function Home() {
    return (
        <>
            {/*banner*/}
            <div className="banner">
                <div className="col-sm-3 banner-mat">
                    <img className="img-responsive" src="images/ba1.jpg" alt />
                </div>
                <div className="col-sm-6 matter-banner">
                    <div className="slider">
                        <div className="callbacks_container">
                            <ul className="rslides" id="slider">
                                <li>
                                    <img src="images/1.jpg" alt />
                                </li>
                                <li>
                                    <img src="images/2.jpg" alt />
                                </li>
                                <li>
                                    <img src="images/1.jpg" alt />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 banner-mat">
                    <img className="img-responsive" src="images/ba.jpg" alt />
                </div>
                <div className="clearfix"> </div>
            </div>
            {/*//banner*/}
            {/*content*/}
            <div className="content">
                <div className="container">
                    <div className="content-top">
                        <h1>Recent Products</h1>
                        <div className="content-top1">
                            <div className="col-md-3 col-md2">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi.png" alt />
                                    </a>
                                    <h3><a href="single.html">Tops</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-md2">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi2.png" alt />
                                    </a>
                                    <h3><a href="single.html">T-Shirt</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-md2">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi4.png" alt />
                                    </a>
                                    <h3><a href="single.html">Shirt</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-md2">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi1.png" alt />
                                    </a>
                                    <h3><a href="single.html">Tops</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="content-top1">
                            <div className="col-md-3 col-md2">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi3.png" alt />
                                    </a>
                                    <h3><a href="single.html">Shirt</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-md2">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi5.png" alt />
                                    </a>
                                    <h3><a href="single.html">T-Shirt</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-md2">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi6.png" alt />
                                    </a>
                                    <h3><a href="single.html">Jeans</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-md2">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi7.png" alt />
                                    </a>
                                    <h3><a href="single.html">Tops</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*//content*/}
            
        </>

    )
}

export default Home
