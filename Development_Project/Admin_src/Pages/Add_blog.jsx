import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add_blog() {
    const [formvalue, setFormvalue] = useState({

        id: "",
        title: "",
        desc: "",
        img: "",
        cate_id: "",
        created_at: "",
        updated_at: ""
    })
    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), created_at: new Date().toLocaleString(), updated_at: new Date().toLocaleString(), cate_id: "", [e.target.name]: e.target.value })
    }

    const submithandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/blog`, formvalue);
        console.log(res);
        if (res.status == 201) {
            toast.success('register Success !');
            setFormvalue({ ...formvalue, title: "", desc: "", img: "", cate_id:"" });
        }
    }
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add_blog</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Add_blog
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="form-group">
                                            <label>title:</label>
                                            <input className="form-control" name='title' value={formvalue.title} onChange={changehandel} type="text" />
                                            <p className="help-block" >Help text here.</p>
                                        </div>
                                        <div className="form-group">
                                            <label>desc:</label>
                                            <input className="form-control" name='desc' value={formvalue.desc} onChange={changehandel} type="desc" />
                                            <p className="help-block">Help text here.</p>
                                        </div>

                                        <div className="form-group">
                                            <label>Upload img:</label>
                                            <input className="form-control" name='img' value={formvalue.img} onChange={changehandel} type="url" />
                                            <p className="help-block">Help text here.</p>
                                        </div>


                                        <button type="submit" onClick={submithandel} className="btn btn-info">Submit </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*/.ROW*/}

                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>
    )
}

export default Add_blog
