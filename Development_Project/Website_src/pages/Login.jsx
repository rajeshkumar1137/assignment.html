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
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            console.log(res);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    if (res.data[0].status == "") {
                        localStorage.setItem('user_id', res.data[0].id);
                        localStorage.setItem('user_name', res.data[0].name);
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
        <form method='post'>
            <div className=' col-md-6'>
                <div className="mb-3 mt-3">
                    <label htmlFor="Email">Email Address:</label>
                    <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" name='email' aria-describedby="email" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>


                <div className="mb-3 mt-3">
                    <label htmlFor="Password">Password:</label>
                    <input type="password" value={formvalue.password} name='password' onChange={changehandel} className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" onClick={submithandel} className="btn btn-primary">Submit</button>
                <Link to="/Signup" className=''>if your already register then Signup Here</Link>
            </div>
        </form>
    )
}

export default Login
