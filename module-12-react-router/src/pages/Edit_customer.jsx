import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify';

function Edit_customer() {

    useEffect(() => {
        editdata();
    }, []);

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        gender:"",
        img:""
    })

    const {id}=useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/customer/${id}`);
        //console.log(res.data);
        setFormvalue({...formvalue,id:res.data.id,name:res.data.name,
            email:res.data.email,password:res.data.password,mobile:res.data.mobile,img:res.data.img});
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

        if(formvalue.password=="" || formvalue.password==null)
        {
            toast.error('password field is required !');
            result=false;
        }
        if(formvalue.mobile=="" || formvalue.mobile==null)
        {
            toast.error('mobile field is required !');
            result=false;
        }
        if(formvalue.gender=="" || formvalue.gender==null)
        {
            toast.error('Name field is required !');
            result=false;
        }
        if(formvalue.img=="" || formvalue.img==null)
        {
            toast.error('img field is required !');
            result=false;
        }

        return result;
    }

    const redirect=useNavigate();
    const submithandel=async(e)=>{
        
        e.preventDefault();// not refresh page on submit
        if(validation())
        {
            const res=await axios.patch(`http://localhost:3000/customer/${formvalue.id}`,formvalue);
            if(res.status==200)
            {
                toast.success('Update Success !');
                setFormvalue({...formvalue,name:"",email:"",password:"",mobile:"",gender:"",img:""});
                return redirect('/Manage_customer');      
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
                                            <label>Enter Password</label>
                                            <input name="password" value={formvalue.password} onChange={changehandel} className="form-control" type="password" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
										<div className="form-group">
                                            <label>Enter Mobile</label>
                                            <input name="mobile" value={formvalue.mobile} onChange={changehandel} className="form-control" type="number" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <input name="gender" value={formvalue.gender} onChange={changehandel} className="form-control" type="text" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
										<div className="form-group">
                                            <label>Image</label>
                                            <input type="url" value={formvalue.img} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Image URL" name="img" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                   
                                    
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

export default Edit_customer