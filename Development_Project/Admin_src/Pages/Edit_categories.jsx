import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_categories() {

    useEffect(() => {
        editdata();
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_name: "",
        cate_img: "",
        created_at: "",
        updated_at: ""
    })




    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), created_at: new Date().toLocaleString(), updated_at: new Date().toLocaleString(),[e.target.name]: e.target.value });
        console.log(formvalue);
    }


    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        //console.log(res.data);
        setFormvalue({ ...formvalue, cate_name: res.data.cate_name, cate_img: res.data.cate_img });
    }
    const validation = () => {
        let result = true;
        if (formvalue.cate_name == "" || formvalue.cate_name == null) {

            toast.error('Name field is required !');
            result = false;
        }

        if (formvalue.cate_img == "" || formvalue.cate_img == null) {
            toast.error('img field is required !');
            result = false;
        }

        return result;
    }

    const redirect = useNavigate();
    const submithandel = async (e) => {
        e.preventDefault();// not refresh page on submit
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/categories/${id}`, formvalue);
            // console.log(res);
            if (res.status == 200) {
                toast.success('Update Success !');
                setFormvalue({ ...formvalue, cate_name: "", cate_img: "" });
                return redirect('/Manage_Categories');
            }
        }
    }

    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Edit categories</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Edit categories
                                </div>

                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Enter Name</label>
                                        <input name="cate_name" value={formvalue.cate_name} onChange={changehandel} className="form-control" type="text" />
                                        <p className="help-block">Help text here.</p>
                                    </div>

                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="url" value={formvalue.cate_img} onChange={changehandel} className="form-control" id="pwd" placeholder="Enter Image URL" name="cate_img" />
                                        <p className="help-block">Help text here.</p>
                                    </div>


                                    <button type="submit" onClick={submithandel} className="btn btn-info">Save</button>
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

export default Edit_categories