import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { toast } from 'react-toastify'



function Profile() {


    // profile =====================================================================================
    useEffect(() => {
        fetch();
    }, []);

    const [data, Setdata] = useState({});

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('user_id')}`);
        //console.log(res.data);
        Setdata(res.data);
    }


    
    // Edit =================================================================================
    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        mobile:"",
        img:""
    })

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        setFormvalue({...formvalue,id:res.data.id,name:res.data.name,email:res.data.email,mobile:res.data.mobile,img:res.data.img});
    }


    //update ==============================================================================
    
    const changehandel=(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        //console.log(formvalue);
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
            toast.error('mobile field is required !');
            result=false;
        }
        if(formvalue.img=="" || formvalue.img==null)
        {
            toast.error('img field is required !');
            result=false;
        }

        return result;
    }

    const submithandel=async(e)=>{
        e.preventDefault();// not refresh page on submit
        if(validation())
        {
            const res=await axios.patch(`http://localhost:3000/user/${formvalue.id}`,formvalue);
            //console.log(res);
            if(res.status==200)
            {
                toast.success('Update Success !');
                setFormvalue({...formvalue,name:"",email:"",mobile:"",img:""});
                fetch();     
            }   
        }
    }


    return (
        <div>
            {/* breadcrumb */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
            {/* breadcrumb */}
            {/* //banner */}
            {/* history */}
            <div className="about py-5">
                <div className="container py-xl-5 py-lg-3">
                    <h3 className="title text-capitalize font-weight-light text-dark text-center mb-5">Manage
                        <span className="font-weight-bold">Profile</span>
                    </h3>
                    <div className="row pt-md-4">
                        <div className="col-lg-6 about_right">
                            <h3 className="text-capitalize text-left font-weight-light font-italic">ID : {data.id} <br />
                                <span className="font-weight-bold"> Name :{data.name}</span> <br />
                                <span className="font-weight-bold"> Email :{data.email}</span> <br />
                                <span className="font-weight-bold"> Contact :{data.mobile}</span> <br />
                                <button className='mt-5 btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editdata(data.id)}>EDIT PROFILE</button>

                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            {/* Modal Header */}
                                            <div className="modal-header">
                                                <h4 className="modal-title">Edit Profile</h4>
                                                <button type="button" className="close" data-bs-dismiss="modal">×</button>
                                            </div>
                                            {/* Modal body */}
                                            <div className="modal-body">
                                                <form action="">
                                                    <div className="mb-3 mt-3">
                                                        <label htmlFor="Name">Name:</label>
                                                        <input type="text" value={formvalue.name} onChange={changehandel} className="form-control" id="Name" placeholder="Enter Name" name="name" />
                                                    </div>
                                                    <div className="mb-3 mt-3">
                                                        <label htmlFor="email">Email:</label>
                                                        <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                                                    </div>
                                                    
                                                    <div className="mb-3">
                                                        <label htmlFor="mobile">Mobile:</label>
                                                        <input type="number" value={formvalue.mobile} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Mobile" name="mobile" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="mobile">Upload Img:</label>
                                                        <input type="url" value={formvalue.img} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Image URL" name="img" />
                                                    </div>
                                                    <button type="submit" onClick={submithandel} data-bs-dismiss="modal"  className="btn btn-primary">Save</button>
                                                   
                                                </form>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>


                            </h3>

                        </div>
                        <div className="col-lg-6 left-img-agikes mt-lg-0 mt-sm-4 mt-3 text-right">
                            <img src={data.img} alt width="100%" />

                        </div>
                    </div>
                </div>
            </div>

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

    )
}

export default Profile