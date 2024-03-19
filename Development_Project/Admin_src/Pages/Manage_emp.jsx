import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
function Manage_emp() {


    useEffect(() => {
        fetch();
    }, []);

    const [data, Setdata] = useState([]);

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/employee');
        console.log(res.data);
        Setdata(res.data);
    }
    // edit and delete button start
    const redirect = useNavigate();
    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/employee/${id}`);
        toast.success('Employee delete success');
        fetch();
    }
    // edit and delete button end

    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Manage Employee</h1>

                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12   ">
                            {/*   Kitchen Sink */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Manage Employee
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>First Name</th>
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>Mobile</th>
                                                    <th>Image</th>
                                                    <th>created_at:</th>
                                                    <th>updated_at:</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((value, index, entarr) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.id}</td>
                                                                <td>{value.name}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.password}</td>
                                                                <td>{value.mobile}</td>
                                                                <td><img src={value.img} width="100px" alt="" /></td>
                                                                <td>{value.created_at}</td>
                                                                <td>{value.updated_at}</td>
                                                                <td>
                                                                    <button style={{ marginRight: 6 }} type="button" className='btn btn-info' onClick={() => { redirect('/edit_emp/' + value.id) }}>Edit</button>
                                                                    <button style={{ marginRight: 6 }} type="button" className='btn btn-danger' onClick={() => { deletedata(value.id); }} >remove</button>
                                                                </td>

                                                            </tr>
                                                        )
                                                    })
                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* End  Kitchen Sink */}
                        </div>

                    </div>

                    {/* /. ROW  */}
                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>

    )
}

export default Manage_emp