import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Manage_Admin() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, Setdata] = useState([]);

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/admin');
        console.log(res.data);
        Setdata(res.data);
    }

    // edit and delete button start
    const redirect = useNavigate();
    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/admin/${id}`);
        toast.success(`admin delete success`);
        fetch();
    }
    // edit and delete button end
    return (
        <div>
            <div>
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="page-head-line">Manage_Admin</h1>
                                <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                            </div>
                        </div>
                        {/* /. ROW  */}
                        <div className="row">
                            <div className="col-md-12">
                                {/*   Kitchen Sink */}
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Manage_Admin
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-responsive ">
                                            <table className="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr >
                                                        <th>#id</th>
                                                        <th>name</th>
                                                        <th>email</th>
                                                        <th>password</th>
                                                        <th>mobile</th>
                                                        <th>img</th>
                                                        <th>status</th>
                                                        <th>created_at</th>
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
                                                                    <td><img src={value.img} width="30px" alt="" /></td>
                                                                    <td>{value.status}</td>
                                                                    <td>{value.created_at}</td>
                                                                    <td>{value.updated_at}</td>
                                                                    <th className='col-md-12 '>
                                                                        <button style={{ marginRight: 6 }} type="button" className="btn btn-info " onClick={() => { redirect('/edit_Admin/' + value.id) }}>Edit</button>
                                                                        <button style={{ marginRight: 6 }} type="button" className="btn btn-danger" onClick={() => { deletedata(value.id); }}>delete</button>
                                                                    </th>
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
                    </div>
                    {/* /. PAGE INNER  */}
                </div>
            </div>
        </div>
    )
}

export default Manage_Admin
