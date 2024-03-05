import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
function Manage_cate() {
    const redirect=useNavigate(); 
    useEffect(() => {
        fetch();
      }, []);
    
      const [data,setdata] = useState([]);
       const fetch = async ()=> {
      const res = await axios.get('http://localhost:3000/categories');
      setdata(res.data);
       }
       //    delete data 
      const deletdata=async(id)=>{
        const delt=await axios.delete(`http://localhost:3000/categories/${id}`);
        toast.success('Delete sucessfully');
        fetch();
      }


    return (
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Manage Categories</h1>
                        <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Context Classes
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Categories Name</th>
                                            <th>Categories image</th>
                                            {/* <th>Username</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.name}</td>
                                                        <td><img src={value.img} height={100} width={100} alt="" /></td>
                                                        <td>
                                                            <button className='btn btn-info' onClick={ ()=>{ redirect('/edit_cate/'+ value.id) }}>Edit</button>
                                                            <button onClick={()=>{deletdata(value.id);}} style={{ marginRight: 6 }} type='button' className='btn btn-danger'>Delete</button>
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
                </div>
            </div>
        </div>

    );

}

export default Manage_cate