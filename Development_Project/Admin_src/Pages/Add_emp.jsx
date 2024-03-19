import React,{ useState,} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add_emp() {
    const [formvalue, setFormvalue] = useState({

        id: "",
        name: "",
        email: "",
        password: "",       
        mobile: "" ,      
        img: "",
        created_at: "",
        updated_at: ""       
      })
      const changehandel = (e) => {
        setFormvalue({...formvalue,id:new Date().getTime().toString(),created_at: new Date().toLocaleString(), updated_at: new Date().toLocaleString(),[e.target.name]: e.target.value })
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


        const res = await axios.post(`http://localhost:3000/employee`, formvalue);
        // console.log(res);
        if (res.status == 201) {
          toast.success('register Success !');
          setFormvalue({ ...formvalue, name: "", email: "", password: "",  mobile: "" ,   img: "" });
        }
      }
    }
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Employee</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Add Employee
                                </div>
                                
                                <div className="panel-body">
                                        <div className="form-group">
                                            <label>Enter Name</label>
                                            <input name='name' value={formvalue.name} onChange={changehandel} className="form-control" type="text" />
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
                                            <label>Upload Image</label>
                                            <input name="img" value={formvalue.img} onChange={changehandel} className="form-control" type="url" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                   
                                    
                                    <button type="submit" onClick={submithandel} className="btn btn-info">Submit</button>
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

export default Add_emp