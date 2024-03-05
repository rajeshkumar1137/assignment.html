import axios from 'axios';
import React,{useState} from 'react'
import { toast } from 'react-toastify';
  
  function Add_cate() {
    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
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
     const res=await axios.post('http://localhost:3000/categories',formvalue);
  if (res.status==201) {
     toast.success('Resister Sucess !');
     setFormvalue({...formvalue,name:"",img:""});
  }
  }
    return (
      <div>
        <div id="wrapper">
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Categories</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Add Category
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="form-group">
                                            <label> Name</label>
                                            <input className="form-control"  value={formvalue.name} onChange={changehandel} type="text" name='name' />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                       
                                        <div className="mb-3">
                                       <label htmlFor="Image">Image:</label>
                                       <input type="url"  height="100"  className="form-control" value={formvalue.img} onChange={changehandel}  id="img" placeholder="Enter image url" name="img"/>
                   
                                       </div>
                                       <br />
                                       
                                        <button type="submit" onClick={submithandle}  className="btn btn-primary">Submit</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                      
                    </div>



                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Add_cate