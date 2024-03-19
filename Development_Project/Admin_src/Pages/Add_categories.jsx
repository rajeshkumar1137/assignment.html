import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
function Add_categories () {

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_name: "",
        cate_img: "",
        created_at: "",
        updated_at: ""
    });

    const changehandel = (e) => {

        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), created_at: new Date().toLocaleString(), updated_at: new Date().toLocaleString(), [e.target.name]: e.target.value });
        console.log(formvalue);
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

    const submithandel = async (e) => {
        e.preventDefault();

        if (validation()) {

            const res = await axios.post(`http://localhost:3000/categories`, formvalue);
            console.log(res);
            if (res.status == 201) {
                toast.success('Add Categories  success !');
                setFormvalue({ ...formvalue, cate_name: "", cate_img: "" });
            }
        }
    }

    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Categories</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Add Categories
                                </div>

                                <div className="panel-body">
                                    <form action="" method="post">
                                        <div className="form-group">
                                            <label>Category Name</label>
                                            <input value={formvalue.cate_name} onChange={changehandel} className="form-control" name="cate_name" type="text" />
                                            <p className="help-block">Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Upload Image</label>
                                            <input value={formvalue.cate_img} onChange={changehandel} className="form-control" name="cate_img" type="url" />
                                            <p className="help-block">Help text here.</p>
                                        </div>

                                        <button type="submit" onClick={submithandel} className="btn btn-info">Submit</button>
                                    </form>
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

export default Add_categories