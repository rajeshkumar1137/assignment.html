import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify';

function Edit_contact() {

    useEffect(() => {
        editdata();
    }, []);

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        // password:"",
        mobile:"",
        // Image:""
        comment:""
    })

    const {id}=useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/contact/${id}`);
        //console.log(res.data);
        setFormvalue({...formvalue,id:res.data.id,name:res.data.name,
            email:res.data.email,mobile:res.data.mobile,comment:res.data.comment});
    }  


  

    const changehandel=(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        console.log(formvalue);
    }


    const validation=()=>{
        let result=true;
        if(formvalue.name=="" || formvalue.name==null)
        {
            toast.error('Name field is required !');
            result=false;
        }
        
        if(formvalue.email=="" || formvalue.email==null)
        {
            toast.error('email field is required !');
            result=false;
        }
        else if(!formvalue.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
        {
            toast.error('Enter valid email field !');
            result=false;
        }

        if(formvalue.mobile=="" || formvalue.mobile==null)
        {
            toast.error('Number field is required !');
            result=false;
        }
        // if(formvalue.mobile=="" || formvalue.mobile==null)
        // {
        //     toast.error('mobile field is required !');
        //     result=false;
        // }
        if(formvalue.comment=="" || formvalue.comment==null)
        {
            toast.error('comment field is required !');
            result=false;
        }

        return result;
    }

    const redirect=useNavigate();
    const submithandel=async(e)=>{
        
        e.preventDefault();// not refresh page on submit
        if(validation())
        {
            const res=await axios.patch(`http://localhost:3000/contact/${formvalue.id}`,formvalue);
            if(res.status==200)
            {
                toast.success('Update Success !');
                setFormvalue({...formvalue,name:"",email:"",mobile:"",comment:""});
                return redirect('/Mnage_cont');     
            }   
        }
    }

    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Edit Employee</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Edit Admin 
                                </div>
                                
                                <div className="panel-body">
                                        <div className="form-group">
                                            <label>Enter Name</label>
                                            <input name="name" value={formvalue.name} onChange={changehandel} className="form-control" type="text" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
										 <div className="form-group">
                                            <label>Enter Email</label>
                                            <input name="email" value={formvalue.email} onChange={changehandel} className="form-control" type="email" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
										<div className="form-group">
                                            <label>Enter Mobile</label>
                                            <input name="password" value={formvalue.mobile} onChange={changehandel} className="form-control" type="number" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
										<div className="form-group">
                                            <label>Enter comment</label>
                                            <input name="comment" value={formvalue.comment} onChange={changehandel} className="form-control" type="text" />
                                            <p className="help-block">Help text here.</p>
                                        </div>

										{/* <div className="form-group">
                                            <label>Image</label>
                                            <input type="url" value={formvalue.Image} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Image URL" name="Image" />
                                            <p className="help-block">Help text here.</p>
                                        </div> */}
                                   
                                    
                                    <button type="submit" onClick={submithandel} className="btn btn-info">Save</button>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>

    )
}

export default Edit_contact