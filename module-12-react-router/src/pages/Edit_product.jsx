import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify';

function Edit_product() {

    useEffect(() => {
        editdata();
    }, []);

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        title:"",
        desc:"",
        img:"",
        main_price:"",
        disc_price:""
    })

    const {id}=useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/product/${id}`);
        //console.log(res.data);
        setFormvalue({...formvalue,id:res.data.id,name:res.data.name,title:res.data.title,desc:res.data.desc,
            main_price:res.data.main_price,disc_price:res.data.disc_price,img:res.data.img});
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
        
        if(formvalue. title=="" || formvalue. title==null)
        {
            toast.error('title field is required !');
            result=false;
        }
        // else if(!formvalue.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
        // {
        //     toast.error('Enter valid email field !');
        //     result=false;
        // }

        if(formvalue.desc=="" || formvalue.desc==null)
        {
            toast.error('discription field is required !');
            result=false;
        }

        if(formvalue.main_price=="" || formvalue.main_price==null)
        {
            toast.error('main prise  is required !');
            result=false;
        }

        if(formvalue. disc_price=="" || formvalue. disc_price==null)
        {
            toast.error('disscount prise is required !');
            result=false;
        }
        // if(formvalue.mobile=="" || formvalue.mobile==null)
        // {
        //     toast.error('mobile field is required !');
        //     result=false;
        // }
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
            const res=await axios.patch(`http://localhost:3000/product/${formvalue.id}`,formvalue);
            if(res.status==200)
            {
                toast.success('Update Success !');
                setFormvalue({...formvalue,name:"",title:"",desc:"",img:"",main_price:"",disc_price:""});
                return redirect('/Manage_prod');     
            }   
        }
    }

    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Edit product</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Edit product
                                </div>
                                
                                <div className="panel-body">
                                        <div className="form-group">
                                            <label>Enter Name</label>
                                            <input name="name" value={formvalue.name} onChange={changehandel} className="form-control" type="text" />
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
										{/* <div className="form-group">
                                            <label>Enter Mobile</label>
                                            <input name="mobile" value={formvalue.mobile} onChange={changehandel} className="form-control" type="number" />
                                            <p className="help-block">Help text here.</p>
                                        </div> */}

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

export default Edit_product