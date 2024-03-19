import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit_blog() {
    useEffect(() => {
        editdata();
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        title: "",
        desc: "",
        img: "",
        cate_id: "",
        created_at: "",
        updated_at: ""
    })


    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        //console.log(res.data);
        setFormvalue({...formvalue, id: res.data.id, title: res.data.title,
            desc: res.data.desc,cate_id: res.data.cate_id, img: res.data.img, cate_id: res.data.cate_id
        });
    }




    const changehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), created_at: new Date().toLocaleString(), updated_at: new Date().toLocaleString(),cate_id:"", [e.target.name]: e.target.value });
        console.log(formvalue);
    }


    const validation = () => {
        let result = true;
        if (formvalue.title == "" || formvalue.title == null) {

            toast.error('title field is required !');
            result = false;
        }

        if (formvalue.desc == "" || formvalue.desc == null) {
            toast.error('desc field is required !');
            result = false;
        }
        

        if (formvalue.img == "" || formvalue.img == null) {
            toast.error('img field is required !');
            result = false;
        }

        return result;
    }

    const redirect = useNavigate();
    const submithandel = async (e) => {

        e.preventDefault();// not refresh page on submit
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/blog/${id}`, formvalue);
            if (res.status == 200) {
                toast.success('Update Success !');
                setFormvalue({ ...formvalue, title: "", desc: "", img: "" });
                return redirect('/Manage_blog');
            }
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

export default Edit_blog