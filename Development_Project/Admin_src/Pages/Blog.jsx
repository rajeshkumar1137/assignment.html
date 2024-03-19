import React from 'react'

function Blog() {
    return (
        <>
            <div>
                {/* breadcrumb */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Blog Page</li>
                    </ol>
                </nav>
                {/* breadcrumb */}
                {/* //banner */}
                {/* blog */}
                <div className="blog-w3l py-5">
                    <div className="container py-xl-5 py-lg-3">
                        <h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">blog
                            <span className="font-weight-bold">page</span>
                        </h3>
                        <div className="row blog-content pt-md-4">
                            {/* left side */}
                            <div className="col-lg-8 blog_section">
                                <div className="card">
                                    <img className="card-img-top" src="images/banner2.jpg" alt />
                                    <div className="card-body text-center">
                                        <h6 className="blog-first text-dark">
                                            <i className="far fa-user mr-2" />Adrian Lie
                                        </h6>
                                        <ul className="blog_list my-3">
                                            <li>May 15, 2018</li>
                                            <li className="mx-3">
                                                <a href="#">
                                                    <i className="far fa-heart mr-1" />
                                                    30</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments mr-1" />
                                                    18</a>
                                            </li>
                                        </ul>
                                        <h5 className="card-title">
                                            <a href="single.html" className="text-dark">Blog title here</a>
                                        </h5>
                                        <p className="card-text">Morbi eget dui elit. In lectus eros, convallis vel dolor vitae, semper sodales risus. Donec convallis maximus neque
                                            vel cursus.</p>
                                        <a href="single.html" className="btn btn-primary blog-button mt-3">Read More</a>
                                    </div>
                                </div>
                                <div className="card my-4">
                                    <img className="card-img-top" src="images/banner3.jpg" alt />
                                    <div className="card-body text-center">
                                        <h6 className="blog-first text-dark">
                                            <i className="far fa-user mr-2" />James Doe
                                        </h6>
                                        <ul className="blog_list my-3">
                                            <li>May 22, 2018</li>
                                            <li className="mx-3">
                                                <a href="#">
                                                    <i className="far fa-heart mr-1" />
                                                    28</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments mr-1" />
                                                    12</a>
                                            </li>
                                        </ul>
                                        <h5 className="card-title">
                                            <a href="single.html" className="text-dark">Blog title here</a>
                                        </h5>
                                        <p className="card-text">Morbi eget dui elit. In lectus eros, convallis vel dolor vitae, semper sodales risus. Donec convallis maximus neque
                                            vel cursus.</p>
                                        <a href="single.html" className="btn btn-primary blog-button mt-3">Read More</a>
                                    </div>
                                </div>
                                <div className="card my-4">
                                    <img className="card-img-top" src="images/banner4.jpg" alt />
                                    <div className="card-body text-center">
                                        <h6 className="blog-first text-dark">
                                            <i className="far fa-user mr-2" />Jenny Joy
                                        </h6>
                                        <ul className="blog_list my-3">
                                            <li>June 02, 2018</li>
                                            <li className="mx-3">
                                                <a href="#">
                                                    <i className="far fa-heart mr-1" />
                                                    22</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments mr-1" />
                                                    16</a>
                                            </li>
                                        </ul>
                                        <h5 className="card-title">
                                            <a href="single.html" className="text-dark">Blog title here</a>
                                        </h5>
                                        <p className="card-text">Morbi eget dui elit. In lectus eros, convallis vel dolor vitae, semper sodales risus. Donec convallis maximus neque
                                            vel cursus.</p>
                                        <a href="single.html" className="btn btn-primary blog-button mt-3">Read More</a>
                                    </div>
                                </div>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination mt-5">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* //left side */}
                            </div>
                            {/* right side */}
                            <div className="col-lg-4 event-right mt-lg-0 mt-sm-5 mt-4">
                                <div className="event-right1">
                                    <div className="search1">
                                        <form className="form-inline" action="#" method="post">
                                            <input className="form-control rounded-0 mr-sm-2" type="search" placeholder="Search Here" aria-label="Search" required />
                                            <button className="btn bg-dark text-white rounded-0 mt-3" type="submit">Search</button>
                                        </form>
                                    </div>
                                    <div className="categories my-4 p-4 border">
                                        <h3 className="blog-title text-dark">Categories</h3>
                                        <ul>
                                            <li className="mt-3">
                                                <i className="fas fa-check mr-2" />
                                                <a href="single.html">At vero eos et accusamus iusto</a>
                                            </li>
                                            <li className="mt-3">
                                                <i className="fas fa-check mr-2" />
                                                <a href="single.html">Sed ut perspiciatis unde omnis</a>
                                            </li>
                                            <li className="mt-3">
                                                <i className="fas fa-check mr-2" />
                                                <a href="single.html">Accusantium doloremque lauda</a>
                                            </li>
                                            <li className="mt-3">
                                                <i className="fas fa-check mr-2" />
                                                <a href="single.html">Vel illum qui dolorem fugiat quo</a>
                                            </li>
                                            <li className="mt-3">
                                                <i className="fas fa-check mr-2" />
                                                <a href="single.html">Quis autem vel eum repreh</a>
                                            </li>
                                            <li className="mt-3">
                                                <i className="fas fa-check mr-2" />
                                                <a href="single.html">Neque porro quisquam est qui</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="posts p-4 border">
                                        <h3 className="blog-title text-dark">Our Events</h3>
                                        <div className="posts-grids">
                                            <div className="row posts-grid mt-4">
                                                <div className="col-lg-4 col-md-3 col-4 posts-grid-left pr-0">
                                                    <a href="single.html">
                                                        <img src="images/c1.jpg" alt=" " className="img-fluid" />
                                                    </a>
                                                </div>
                                                <div className="col-lg-8 col-md-7 col-8 posts-grid-right mt-lg-0 mt-md-5 mt-sm-4">
                                                    <h4>
                                                        <a href="single.html" className="text-dark">Sed ut perspiciatis unde omni</a>
                                                    </h4>
                                                    <ul className="wthree_blog_events_list mt-2">
                                                        <li className="mr-2 text-dark">
                                                            <i className="fa fa-calendar mr-2" aria-hidden="true" />15/05/18</li>
                                                        <li>
                                                            <i className="fa fa-user" aria-hidden="true" />
                                                            <a href="single.html" className="text-dark ml-2">Admin</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row posts-grid mt-4">
                                                <div className="col-lg-4 col-md-3 col-4 posts-grid-left pr-0">
                                                    <a href="single.html">
                                                        <img src="images/c2.jpg" alt=" " className="img-fluid" />
                                                    </a>
                                                </div>
                                                <div className="col-lg-8 col-md-7 col-8 posts-grid-right mt-lg-0 mt-md-5 mt-sm-4">
                                                    <h4>
                                                        <a href="single.html" className="text-dark">Sed ut perspiciatis unde omni</a>
                                                    </h4>
                                                    <ul className="wthree_blog_events_list mt-2">
                                                        <li className="mr-2 text-dark">
                                                            <i className="fa fa-calendar mr-2" aria-hidden="true" />23/05/18</li>
                                                        <li>
                                                            <i className="fa fa-user" aria-hidden="true" />
                                                            <a href="single.html" className="text-dark ml-2">Admin</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row posts-grid mt-4">
                                                <div className="col-lg-4 col-md-3 col-4 posts-grid-left pr-0">
                                                    <a href="single.html">
                                                        <img src="images/c3.jpg" alt=" " className="img-fluid" />
                                                    </a>
                                                </div>
                                                <div className="col-lg-8 col-md-7 col-8 posts-grid-right mt-lg-0 mt-md-5 mt-sm-4">
                                                    <h4>
                                                        <a href="single.html" className="text-dark">Sed ut perspiciatis unde omni</a>
                                                    </h4>
                                                    <ul className="wthree_blog_events_list mt-2">
                                                        <li className="mr-2 text-dark">
                                                            <i className="fa fa-calendar mr-2" aria-hidden="true" />13/06/18</li>
                                                        <li>
                                                            <i className="fa fa-user" aria-hidden="true" />
                                                            <a href="single.html" className="text-dark ml-2">Admin</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tags mt-4 p-4 border">
                                        <h3 className="blog-title text-dark">Recent Tags</h3>
                                        <ul className="mt-4">
                                            <li>
                                                <a href="single.html" className="text-dark border">Designs</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Growth</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Latest</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Price</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Tools</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Business</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Work Space</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">New Course</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Advantage</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Concepts</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Arts</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Photography</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Research</a>
                                            </li>
                                            <li>
                                                <a href="single.html" className="text-dark border">Software</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* //right side */}
                        </div>
                    </div>
                </div>
                {/* //blog */}
                {/* brands */}
                <div className="brands-w3ls py-md-5 py-4">
                    <div className="container py-xl-3">
                        <ul className="list-unstyled">
                            <li>
                                <i className="fab fa-supple" />
                            </li>
                            <li>
                                <i className="fab fa-angrycreative" />
                            </li>
                            <li>
                                <i className="fab fa-aviato" />
                            </li>
                            <li>
                                <i className="fab fa-aws" />
                            </li>
                            <li>
                                <i className="fab fa-cpanel" />
                            </li>
                            <li>
                                <i className="fab fa-hooli" />
                            </li>
                            <li>
                                <i className="fab fa-node" />
                            </li>
                        </ul>
                    </div>
                </div>
                {/* //brands */}
            </div>
        </>
    )
}

export default Blog