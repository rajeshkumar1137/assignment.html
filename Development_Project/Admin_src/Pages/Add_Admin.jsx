import React, { useState, } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function Add_Admin() {
    const [formvalue, setFormvalue] = useState({

        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: "",
        img: "",
        created_at: "",
        updated_at: ""
    })
    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(),created_at: new Date().toLocaleString(), updated_at: new Date().toLocaleString(), status: "Unblock", [e.target.name]: e.target.value })
    }

    const validation = () => {
        let result = true;
        if (formvalue.name == "" || formvalue.name == null) {

            toast.error('Name field is required !');
            result = false;
        }

        if (formvalue.email == "" || formvalue.email == null) {
            toast.error('email field is required !');
            result = false;
        }
        else if (!formvalue.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            toast.error('Enter valid email field !');
            result = false;
        }

        if (formvalue.password == "" || formvalue.password == null) {
            toast.error('password field is required !');
            result = false;
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
            toast.error('mobile field is required !');
            result = false;
        }
        if (formvalue.img == "" || formvalue.img == null) {
            toast.error('img field is required !');
            result = false;
        }

        return result;
    }




    const submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/admin`, formvalue);
            // console.log(res);
            if (res.status == 201) {
                toast.success('register Success !');
                setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "", img: "" });
            }
        }
    }
    return (
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Add_Admin</h1>
                        <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                    </div>
                </div>
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                Add_Admin
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <label>Enter Name:</label>
                                        <input className="form-control" type="text" name='name' value={formvalue.name} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Email Address:</label>
                                        <input className="form-control" type="Email" name='email' value={formvalue.email} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input className="form-control" type="password" name='password' value={formvalue.password} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>mobile:</label>
                                        <input className="form-control" type="number" name='mobile' value={formvalue.mobile} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Upload img:</label>
                                        <input className="form-control" type="url" name='img' value={formvalue.img} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>


                                    <button type="submit" onClick={submithandel} className="btn btn-info">Submit </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                {/*/.ROW*/}

            </div>
            {/* /. PAGE INNER  */}
        </div>


    )
}

export default Add_Admin
