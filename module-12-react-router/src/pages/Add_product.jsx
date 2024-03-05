import axios from 'axios';
import React,{useState} from 'react'
import { toast } from 'react-toastify';
  
  function Add_product() {
    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        title:"",
        desc:"",
        main_price:"",
        disc_price:"",
        // mobile:"",
        // status:"",
        img:""
    })
    const changehandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"unblock",[e.target.name]:e.target.value})
        console.log(formvalue);
  }
  const submithandle=async(e)=>{
     e.preventDefault();
     const res=await axios.post('http://localhost:3000/product',formvalue);
  if (res.status==201) {
     toast.success('Resister Sucess !');
     setFormvalue({...formvalue,name:"",title:"",desc:"",main_price:"",disc_price:"",img:""});
  }
  }
    return (
      <div>
         <div id="wrapper">
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">ADD PRODUCT</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    ADD PRODUCT
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="form-group">
                                            <label>Enter Name</label>
                                            <input className="form-control" value={formvalue.name} onChange={changehandel} type="text" name='name'  />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input className="form-control" value={formvalue.title} onChange={changehandel} type="text" name='title'  />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Discription</label>
                                            <textarea className="form-control" rows={3} defaultValue={""} value={formvalue.desc} onChange={changehandel} type="text" name='desc' />
                                        </div>
                                        <div className="form-group">
                                            <label>Main prise</label>
                                            <input className="form-control" value={formvalue.main_price} onChange={changehandel} type="number" name='main_price'/>
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Disccount prise</label>
                                            <input className="form-control" value={formvalue.disc_price} onChange={changehandel} type="number" name='disc_price'/>
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="mb-3">
                                       <label htmlFor="Image">Image:</label>
                                       <input type="url"  height="100"  className="form-control"  value={formvalue.img} onChange={changehandel}  id="img" placeholder="Enter image url" name="img"/>
                   
                                       </div>
                                       <br />
                                        {/* <button type="submit" onClick={submithandle} className="btn btn-info">Send Message </button> */}
                                        <button type="submit" onClick={submithandle}  className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    SINGUP FORM
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="form-group">
                                            <label>Enter Email</label>
                                            <input className="form-control" type="text" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Password</label>
                                            <input className="form-control" type="password" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Re Type Password </label>
                                            <input className="form-control" type="password" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <button type="submit" className="btn btn-danger">Register Now </button>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>



                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Add_product