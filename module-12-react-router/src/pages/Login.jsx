import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
 
function Login() {
  const redirect=useNavigate();
  const [formvalue,setFormvalue]=useState({
    Email:"",
      password:"",
  })
  const changehandel=(e)=>{
      setFormvalue({...formvalue,[e.target.name]:e.target.value});
      console.log(formvalue);
  }
      const submithandle=async(e)=>{
          e.preventDefault();
          const res=await axios.get(`http://localhost:3000/admin?Email=${formvalue.Email}`);
       if (res.data.length>0)
        {
         if (res.data[0].password==formvalue.password) 
         {
          // if (res.data[0].status=="unblock") {
              localStorage.setItem('admin_id',res.data[0].id);
              localStorage.setItem('admin_name',res.data[0].name);
              toast.success('Login sucess !');
              setFormvalue({...formvalue,Email:"",password:""});
              return redirect('/Home');
          }
          else
          {
              toast.error('Wrong password');
              setFormvalue({...formvalue,Email:"",password:""});
          }
      }
          else
          {
              toast.error('username not found!');
              setFormvalue({...formvalue,Email:"",password:""});
          }
      }

      const validation = ()=>{
        let result = true;
        if (formvalue.Email == "" || formvalue.Email== null) {
          toast.error('Email required');
          result = false;
        }
        if (formvalue.password == "" || formvalue.password== null) {
          toast.error('password required');
          result = false;
        }
      }
    return (
       <div>
  <div className="container">
    <div className="row text-center " style={{paddingTop: 100}}>
      <div className="col-md-12">
        <img src="assets/img/logo-invoice.png" />
      </div>
    </div>
    <div className="row ">
      <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
        <div className="panel-body">
        <form action="/action_page.php" method='post'>
                  <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={formvalue.Email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" value={formvalue.password} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                </div>
                <button onClick={submithandle} className='btn btn-primary '>Login</button>
               
                {/* <Link to="/Home" className="btn btn-primary " onClick={submithandle}>Login Now</Link> */}
                <hr />
            {/* Not register ? <Link to="/Signup">click here </Link> or go to <a href="index.html">Home</a> */}
            </form>
          {/* <Link to="/Home" className="btn btn-primary " onClick={submithandle}>Login Now</Link> */}
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Login