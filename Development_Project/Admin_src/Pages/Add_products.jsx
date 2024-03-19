import React,{ useState,} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function Add_products() {
    const [formvalue, setFormvalue] = useState({

        categories_id: "",
        title: "",
        desc: "",    
        img: "",
        main_price:"",
        disc_price:"",
        created_at:"",
        updated_at:""
      })
      const changehandel = (e) => {
        setFormvalue({...formvalue,categories_id:new Date().getTime().toString(), status: "Unblock",created_at: new Date().toLocaleString(),updated_at: new Date().toLocaleString(), [e.target.name]: e.target.value })
      }
    
      const submithandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/product`, formvalue);
        // console.log(res);
        if (res.status == 201) {
          toast.success('register Success !');
          setFormvalue({ ...formvalue, title: "", desc: "",  img: "", main_price:"",disc_price:""  });
        }
      }
    return (
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Add_products</h1>
                        <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                    </div>
                </div>
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                            Add_products
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
export default Add_products
