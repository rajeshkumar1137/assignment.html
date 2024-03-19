import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Products() {
    useEffect(() => {
        fetch();
    }, []);

    const {id}=useParams();
    const [data, Setdata] = useState({});

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/product/${id}`);
        //console.log(res.data);
        Setdata(res.data);
    }
    return (
        <>
            <div>
                {/*content*/}
                <div className="products">
                    <div className="container">
                        <h1>Products</h1>
                        <div className="col-md-9">
                            <div className="content-top1">
                                <div className="col-md-4 col-md3">
                                    <div className="col-md1 simpleCart_shelfItem">
                                        <a href="single.html">
                                            <img className="img-responsive" src={data.img} alt />
                                        </a>
                                        <h3><a href="single.html">Tops</a></h3>
                                        <div className="price">
                                            <h5 className="item_price">$300</h5>
                                            <a href="#" className="item_add">Add To Cart</a>
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-md3">
                                    <div className="col-md1 simpleCart_shelfItem">
                                        <a href="single.html">
                                            <img className="img-responsive" src={data.img} alt />
                                        </a>
                                        <h3><a href="single.html">T-Shirt</a></h3>
                                        <div className="price">
                                            <h5 className="item_price">$300</h5>
                                            <a href="#" className="item_add">Add To Cart</a>
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-md3">
                                    <div className="col-md1 simpleCart_shelfItem">
                                        <a href="single.html">
                                            <img className="img-responsive" src={data.img} alt />
                                        </a>
                                        <h3><a href="single.html">Shirt</a></h3>
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
                                <div className="col-md-4 col-md3">
                                    <div className="col-md1 simpleCart_shelfItem">
                                        <a href="single.html">
                                            <img className="img-responsive" src={data.img} alt />
                                        </a>
                                        <h3><a href="single.html">Tops</a></h3>
                                        <div className="price">
                                            <h5 className="item_price">$300</h5>
                                            <a href="#" className="item_add">Add To Cart</a>
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-md3">
                                    <div className="col-md1 simpleCart_shelfItem">
                                        <a href="single.html">
                                            <img className="img-responsive" src={data.img} alt />
                                        </a>
                                        <h3><a href="single.html">T-Shirt</a></h3>
                                        <div className="price">
                                            <h5 className="item_price">$300</h5>
                                            <a href="#" className="item_add">Add To Cart</a>
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-md3">
                                    <div className="col-md1 simpleCart_shelfItem">
                                        <a href="single.html">
                                            <img className="img-responsive" src={data.img}alt />
                                        </a>
                                        <h3><a href="single.html">T-Shirt</a></h3>
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
                                <div className="col-md-4 col-md3">
                                    <div className="col-md1 simpleCart_shelfItem">
                                        <a href="single.html">
                                            <img className="img-responsive" src={data.img} alt />
                                        </a>
                                        <h3><a href="single.html">Jeans</a></h3>
                                        <div className="price">
                                            <h5 className="item_price">$300</h5>
                                            <a href="#" className="item_add">Add To Cart</a>
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-md3">
                                    <div className="col-md1 simpleCart_shelfItem">
                                        <a href="single.html">
                                            <img className="img-responsive" src={data.img}alt />
                                        </a>
                                        <h3><a href="single.html">Tops</a></h3>
                                        <div className="price">
                                            <h5 className="item_price">$300</h5>
                                            <a href="#" className="item_add">Add To Cart</a>
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-md3">
                                    <div className="col-md1 simpleCart_shelfItem">
                                        <a href="single.html">
                                            <img className="img-responsive" src={data.img}alt />
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
                        <div className="col-md-3 product-bottom">
                            {/*categories*/}
                            <div className=" rsidebar span_1_of_left">
                                <h3 className="cate">Categories</h3>
                                <ul className="menu-drop">
                                    <li className="item1"><a href="#">Men </a>
                                        <ul className="cute">
                                            <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                                            <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                                            <li className="subitem3"><a href="single.html">Automatic Fails </a></li>
                                        </ul>
                                    </li>
                                    <li className="item2"><a href="#">Women </a>
                                        <ul className="cute">
                                            <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                                            <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                                            <li className="subitem3"><a href="single.html">Automatic Fails </a></li>
                                        </ul>
                                    </li>
                                    <li className="item3"><a href="#">Kids</a>
                                        <ul className="cute">
                                            <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                                            <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                                            <li className="subitem3"><a href="single.html">Automatic Fails</a></li>
                                        </ul>
                                    </li>
                                    <li className="item4"><a href="#">Accesories</a>
                                        <ul className="cute">
                                            <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                                            <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                                            <li className="subitem3"><a href="single.html">Automatic Fails</a></li>
                                        </ul>
                                    </li>
                                    <li className="item4"><a href="#">Shoes</a>
                                        <ul className="cute">
                                            <li className="subitem1"><a href="product.html">Cute Kittens </a></li>
                                            <li className="subitem2"><a href="product.html">Strange Stuff </a></li>
                                            <li className="subitem3"><a href="product.html">Automatic Fails </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/*initiate accordion*/}
                            {/*//menu*/}
                            {/*seller*/}
                            <div className="product-bottom">
                                <h3 className="cate">Best Sellers</h3>
                                <div className="product-go">
                                    <div className=" fashion-grid">
                                        <a href="single.html"><img className="img-responsive " src="images/pr.jpg" alt /></a>
                                    </div>
                                    <div className=" fashion-grid1">
                                        <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                        <span className=" price-in1"> $40.00</span>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="product-go">
                                    <div className=" fashion-grid">
                                        <a href="single.html"><img className="img-responsive " src="images/pr1.jpg" alt /></a>
                                    </div>
                                    <div className=" fashion-grid1">
                                        <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                        <span className=" price-in1"> $40.00</span>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="product-go">
                                    <div className=" fashion-grid">
                                        <a href="single.html"><img className="img-responsive " src="images/pr2.jpg" alt /></a>
                                    </div>
                                    <div className=" fashion-grid1">
                                        <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                        <span className=" price-in1"> $40.00</span>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="product-go">
                                    <div className=" fashion-grid">
                                        <a href="single.html"><img className="img-responsive " src="images/pr3.jpg" alt /></a>
                                    </div>
                                    <div className=" fashion-grid1">
                                        <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                        <span className=" price-in1"> $40.00</span>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            {/*//seller*/}
                            {/*tag*/}
                            <div className="tag">
                                <h3 className="cate">Tags</h3>
                                <div className="tags">
                                    <ul>
                                        <li><a href="#">design</a></li>
                                        <li><a href="#">fashion</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">dress</a></li>
                                        <li><a href="#">fashion</a></li>
                                        <li><a href="#">dress</a></li>
                                        <li><a href="#">design</a></li>
                                        <li><a href="#">dress</a></li>
                                        <li><a href="#">design</a></li>
                                        <li><a href="#">fashion</a></li>
                                        <li><a href="#">lorem</a></li>
                                        <li><a href="#">dress</a></li>
                                        <div className="clearfix"> </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                {/*//content*/}
                
            </div>

        </>
    )
}

export default Products