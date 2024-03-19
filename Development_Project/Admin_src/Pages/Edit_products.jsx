import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';


function Edit_products() {

    useEffect(() => {
        editdata();
    }, []);

    const [formvalue, setFormvalue] = useState({
        categories_id: "",
        title: "",
        desc: "",
        img: "",
        main_price: "",
        disc_price: "",
        created_at: "",
        updated_at: ""
    })




    const changehandel = (e) => {
        setFormvalue({ ...formvalue,categories_id: new Date().getTime().toString(), created_at: new Date().toLocaleString(),updated_at: new Date().toLocaleString(),[e.target.name]: e.target.value });
        console.log(formvalue);
    }


    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/product/${id}`);
        //console.log(res.data);
        setFormvalue({ ...formvalue, title: res.data.title, desc: res.data.desc, img: res.data.img, main_price: res.data.main_price, disc_price: res.data.disc_price, });
    }
    const validation = () => {
        let result = true;
        if (formvalue.title == "" || formvalue.title == null) {

            toast.error('title Name field is required !');
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

        if (formvalue.main_price == "" || formvalue.main_price == null) {
            toast.error('main_price field is required !');
            result = false;
        }
        if (formvalue.disc_price == "" || formvalue.disc_price == null) {
            toast.error('disc_price field is required !');
            result = false;
        }
        return result;
    }

    const redirect = useNavigate();
    const submithandel = async (e) => {
        e.preventDefault();// not refresh page on submit
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/product/${id}`, formvalue);
            // console.log(res);
            if (res.status == 200) {
                toast.success('Update Success !');
                setFormvalue({ ...formvalue, title: "", desc: "", img: "", main_price: "", disc_price: "" });
                return redirect('/Manage_Product');
            }
        }
    }

    return (
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Edit_products</h1>
                        <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                    </div>
                </div>
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                Edit_products
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <label>title:</label>
                                        <input className="form-control" type="text" name='title' value={formvalue.title} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>desc:</label>
                                        <input className="form-control" type="desc" name='desc' value={formvalue.desc} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>

                                    <div className="form-group">
                                        <label>Upload img:</label>
                                        <input className="form-control" type="url" name='img' value={formvalue.img} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>main_price:</label>
                                        <input className="form-control" type="number" name='main_price' value={formvalue.main_price} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>disc_price:</label>
                                        <input className="form-control" type="number" name='disc_price' value={formvalue.disc_price} onChange={changehandel} />
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
    )
}

export default Edit_products