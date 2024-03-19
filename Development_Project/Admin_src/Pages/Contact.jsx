import React,{ useState,} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function Contact() {
    const [formvalue, setFormvalue] = useState({

        id: "",
        name: "",
        email: "",      
        mobile: "" ,
        comment:""    
               
      })
      const changehandel = (e) => {
        setFormvalue({...formvalue,id:new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value })
      }
    
      const submithandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/contact`, formvalue);
        // console.log(res);
        if (res.status == 201) {
          toast.success('register Success !');
          setFormvalue({ ...formvalue, name: "", email: "", mobile: "" , comment: "" });
        }
      }
    return (
        <div>
            <div className="contact">
                <div className="container">
                    <h1>Contact</h1>
                    <div className="contact-grids">
                        <div className="contact-form ">
                            <form method='post' >
                                <div className="contact-bottom">
                                    <div className="col-md-12 ">
                                        <label>Enter Name:</label>
                                        <input  type="text" className="form-control"  name='name' value={formvalue.name} onChange={changehandel} placeholder="Your name" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="col-md-12 ">
                                        <label>Email:</label>
                                        <input type="email" className="form-control" name='email' value={formvalue.email} onChange={changehandel} placeholder="Your Email" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="col-md-12 ">
                                        <label>Phonenumber:</label>
                                        <input type="number" className="form-control" name='mobile' value={formvalue.mobile} onChange={changehandel} placeholder="Your Phonenumber" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="col-md-12 in-contact">
                                        <label>comment:</label>
                                        <input type="text" className="form-control" name='comment' value={formvalue.comment} onChange={changehandel} placeholder="Your comment" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                
                                <button type="submit" onClick={submithandel} className="btn btn-info">Submit </button>
                            </form>
                        </div>
                        {/* <div className="address">
                            <div className=" address-more">
                                <h2>Address</h2>
                                <div className="col-md-4 address-grid">
                                    <i className="glyphicon glyphicon-map-marker" />
                                    <div className="address1">
                                        <p>Lorem ipsum dolor</p>
                                        <p>TL 19034-88974</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="col-md-4 address-grid ">
                                    <i className="glyphicon glyphicon-phone" />
                                    <div className="address1">
                                        <p>+885699655</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="col-md-4 address-grid ">
                                    <i className="glyphicon glyphicon-envelope" />
                                    <div className="address1">
                                        <p><a href="mailto:@example.com"> @example.com</a></p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact

