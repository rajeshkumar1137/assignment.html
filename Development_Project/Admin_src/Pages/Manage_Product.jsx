import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Manage_Product() {

  useEffect(() => {
    fetch();
  }, []);

  const [data, Setdata] = useState([]);

  const fetch = async () => {
    const res = await axios.get('http://localhost:3000/product');
    // console.log(res.data);
    Setdata(res.data);
  }
  // edit and delete button start
  const redirect = useNavigate();
  const deletedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/product/${id}`);
    toast.success(`admin delete success`);
    fetch();
  }
  // edit and delete button end



  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">Products</h1>
              <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12">
              {/*   Kitchen Sink */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  product
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>#categories_id</th>
                          <th>title</th>
                          <th>desc</th>
                          <th>img</th>
                          <th>main_price</th>
                          <th>disc_price</th>
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
                                <td>{value.categories_id}</td>
                                <td>{value.title}</td>
                                <td>{value.desc}</td>
                                <td><img src={value.img} width="100px" alt="" /></td>
                                <td>{value.main_price}</td>
                                <td>{value.disc_price}</td>
                                <td>{value.created_at}</td>
                                <td>{value.updated_at}</td>
                                <td className='col-md-12 '>
                                  <button style={{ marginRight: 6 }} type="button" className="btn btn-info " onClick={() => { redirect('/Edit_products/' + value.id) }}>Edit</button>
                                  <button style={{ marginRight: 6 }} type="button" className="btn btn-danger" onClick={() => { deletedata(value.id); }}>Remove</button>
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
        </div>
        {/* /. PAGE INNER  */}
      </div>
    </div>

  )
}

export default Manage_Product