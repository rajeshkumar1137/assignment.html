import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {

    const redirect = useNavigate();

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
    })

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value })
        console.log(formvalue);
    }

    const validation = () => {
        let result = true;

        if (formvalue.email == "" || formvalue.email == null) {
            toast.error('email field is required !');
            result = false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            toast.error('password field is required !');
            result = false;
        }
        return result;
    }

    const submithandel = async (e) => {
        e.preventDefault();   // not refresh page on submit
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
            console.log(res);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    if (res.data[0].status == "") {
                        localStorage.setItem('admin_id', res.data[0].id);
                        localStorage.setItem('admin_name', res.data[0].name);
                        toast.success('Login Success !');
                        setFormvalue({ ...formvalue, email: "", password: "" });
                        return redirect('/Home');
                    }
                    else {
                        toast.error('Your Account Blocked So Contact Customer Care !');
                        setFormvalue({ ...formvalue, email: "", password: "" });
                    }
                }
            }

            else {
                toast.error('Wrong password !');
                setFormvalue({ ...formvalue, email: "", password: "" });
            }
        }
        else {
            toast.error('Username not found !');
            setFormvalue({ ...formvalue, email: "", password: "" });
        }
    }




    return (
        <div>
            <div className="container">
                <div className="row text-center " style={{ paddingTop: 100 }}>
                    <div className="col-md-12">
                        <img src="assets/img/logo-invoice.png" />

                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form role='from' action='' method='post' >
                                <hr />
                                <h5>Enter Details to Login</h5>
                                <br />
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="text" value={formvalue.email} onChange={changehandel} name='email' className="form-control" placeholder="Your email " />
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input type="password" value={formvalue.password} name='password' onChange={changehandel} className="form-control" placeholder="Your Password" />
                                </div>
                                <div className="form-group">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" /> Remember me
                                    </label>
                                    <span className="pull-right">
                                        <a href="/">Forget password ? </a>
                                    </span>
                                </div>
                                <button type="submit" className="btn btn-primary " onClick={submithandel}>Login Now</button>
                                <hr />
                                Not register ? <Link to="/home">click here </Link> or go to <Link to="/home">Home</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login