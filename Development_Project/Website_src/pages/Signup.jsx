import React,{ useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { NavLink,Link } from 'react-router-dom'


function Signup() {

  const [formvalue, setFormvalue] = useState({

    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    status: "",
    img: ""
  })
  const changehandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value })
  }

  const submithandel = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:3000/User`, formvalue);
    // console.log(res);
    if (res.status == 201) {
      toast.success('register Success !');
      setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "", img: "" });
    }
  }


  return (
    <>
      <form method='post'>
        <div className=' col-md-6'>
          <div className="mb-3 mt-3">
            <label htmlFor="name">Name:</label>
            <input type="text" value={formvalue.name} onChange={changehandel} className="form-control" id="name" name='name' placeholder="Enter name" />
          </div>

          <div className="mb-3 mt-3">
            <label htmlFor="Email">Email Address:</label>
            <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" name='email' aria-describedby="email" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>


          <div className="mb-3 mt-3">
            <label htmlFor="Password">Password:</label>
            <input type="password" value={formvalue.password} name='password' onChange={changehandel} className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="Mobile">Mobile:</label>
            <input type="number" value={formvalue.mobile} name='mobile' onChange={changehandel} className="form-control" id="Mobile" placeholder="mobile number" />
          </div>
          {/* <div className="mb-3 mt-3">
            <label htmlFor="status">status:</label>
            <input type="status" value={formvalue.status} name='status' onChange={changehandel} className="form-control" id="status" placeholder="status" />
          </div> */}

          <div className="mb-3 mt-3">
            <label htmlFor="img">Upload img:</label>
            <input type="url" value={formvalue.img} name='img' onChange={changehandel} className="form-control" id="img" placeholder="Upload img" />
          </div>

          {/* <div className="mb-3 mt-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div> */}
          <button type="submit" onClick={submithandel} className="btn btn-primary">Submit</button>
          {/* <Link to="/Signup" className=''>if your already register then Signup Here</Link> */}
        </div>
      </form>

    </>
  )
}

export default Signup

