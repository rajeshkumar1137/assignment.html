import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Manage_Categories() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, Setdata] = useState([]);

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/categories');
        // console.log(res.data);
        Setdata(res.data);
    }


    // edit and delete button start
    const redirect = useNavigate();
    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
        toast.success(`Categorie delete success`);
        fetch();

    }
    // edit and delete button end

    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">categories</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/*   Kitchen Sink */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    categories
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>

                                                    <th>#id</th>
                                                    <th>cate_name</th>
                                                    <th>cate_img</th>
                                                    <th>created_at</th>
                                                    <th>updated_at</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((value, index, entarr) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.id}</td>
                                                                <td>{value.cate_name}</td>
                                                                <td><img src={value.cate_img} width="100px" alt="" /></td>
                                                                <td>{value.created_at}</td>
                                                                <td>{value.updated_at}</td>
                                                                <th className='col-md-12 '>
                                                                    <button style={{ marginRight: 6 }} type="button" className="btn btn-info " onClick={() => { redirect('/Edit_categories/' + value.id) }}>Edit</button>
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

    )
}

export default Manage_Categories
