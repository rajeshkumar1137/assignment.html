import axios from 'axios';
import React,{useState} from 'react'
import { toast } from 'react-toastify';
// import { toast} from 'react-toastify/dist/components';
function Add_admin() {
    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        // mobile:"",
        // status:"",
        Image:""
    })
    const changehandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"unblock",[e.target.name]:e.target.value})
        console.log(formvalue);  
  }      
  const submithandle=async(e)=>{
     e.preventDefault();
     const res=await axios.post('http://localhost:3000/admin',formvalue);
  if (res.status==201) {
     toast.success('Resister Sucess !');
     setFormvalue({...formvalue,name:"",email:"",password:"",Image:""});
  }
  }

    return (
        <div id="wrapper">
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Admin</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Add Admin 
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="form-group">
                                            <label> Name</label>
                                            <input className="form-control" value={formvalue.name} onChange={changehandel} type="text" name='name' />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" value={formvalue.email} onChange={changehandel} type="text" name='email' />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" name='password' value={formvalue.password} onChange={changehandel} type="password" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="mb-3">
                                       <label htmlFor="">Image:</label>
                                       <input type="url"  height="100"  className="form-control" value={formvalue.Image} onChange={changehandel}  id="img" placeholder="Enter image url" name="Image" />
                    {/* <img src={formvalue.Image} alt="" /> */}
                                       </div>
                                       <br />
                                       
                                        <button type="submit" onClick={submithandle}  className="btn btn-primary">Submit</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-12 col-sm- col-xs-12">
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

    )
}

export default Add_admin