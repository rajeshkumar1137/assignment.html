import React,{ useState, }  from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function Add_cart() {
    const [formvalue, setFormvalue] = useState({

        id: "",
        prod_id: "",
        qty: "",       
        amount: "" ,      
        cust_id: ""       
              
      })
      const changehandel = (e) => {
        setFormvalue({...formvalue,id:new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value })
      }
    
      const submithandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/cart`, formvalue);
        // console.log(res);
        if (res.status == 201) {
          toast.success('register Success !');      
        setFormvalue({ ...formvalue, prod_id: "", qty: "",  amount: "", cust_id:""  });
        }
      }
    return (
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Add_cart</h1>
                        <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                    </div>
                </div>
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                            Add_cart
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <label>prod_id:</label>
                                        <input className="form-control" type="number" name='prod_id' value={formvalue.prod_id} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>qty:</label>
                                        <input className="form-control" type="number" name='qty' value={formvalue.qty} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>amount:</label>
                                        <input className="form-control" type="number" name='amount' value={formvalue.amount} onChange={changehandel} />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>cust_id:</label>
                                        <input className="form-control" type="number" name='cust_id' value={formvalue.cust_id} onChange={changehandel} />
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

export default Add_cart