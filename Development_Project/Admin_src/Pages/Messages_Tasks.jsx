import React from 'react'

function Messages_Tasks() {
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">Messages &amp; Tasks</h1>
              <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-6">
              <div className="panel panel-success">
                <div className="panel-heading">
                  Message Box #1
                </div>
                <div className="panel-body" style={{ padding: 0 }}>
                  <div className="chat-widget-main">
                    <div className="chat-widget-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="chat-widget-name-left">
                      <h4>Amanna Seiar</h4>
                    </div>
                    <div className="chat-widget-right">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="chat-widget-name-right">
                      <h4>Donim Cruseia </h4>
                    </div>
                    <div className="chat-widget-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="chat-widget-name-left">
                      <h4>Amanna Seiar</h4>
                    </div>
                    <div className="chat-widget-right">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="chat-widget-name-right">
                      <h4>Donim Cruseia </h4>
                    </div>
                  </div>
                </div>
                <div className="panel-footer">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter Message" />
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button">SEND</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <i className="fa fa-bell fa-fw" />Message Box #2
                </div>
                <div className="panel-body">
                  <div className="list-group">
                    <a href="#" className="list-group-item">
                      <i className="fa fa-twitter fa-fw" />3 New Followers
                      <span className="pull-right text-muted small"><em>12 minutes ago</em>
                      </span>
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="fa fa-envelope fa-fw" />Message Sent
                      <span className="pull-right text-muted small"><em>27 minutes ago</em>
                      </span>
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="fa fa-tasks fa-fw" />New Task
                      <span className="pull-right text-muted small"><em>43 minutes ago</em>
                      </span>
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="fa fa-upload fa-fw" />Server Rebooted
                      <span className="pull-right text-muted small"><em>11:32 AM</em>
                      </span>
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="fa fa-bolt fa-fw" />Server Crashed!
                      <span className="pull-right text-muted small"><em>11:13 AM</em>
                      </span>
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="fa fa-warning fa-fw" />Server Not Responding
                      <span className="pull-right text-muted small"><em>10:57 AM</em>
                      </span>
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="fa fa-bolt fa-fw" />Server Crashed!
                      <span className="pull-right text-muted small"><em>11:13 AM</em>
                      </span>
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="fa fa-warning fa-fw" />Server Not Responding
                      <span className="pull-right text-muted small"><em>10:57 AM</em>
                      </span>
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="fa fa-shopping-cart fa-fw" />New Order Placed
                      <span className="pull-right text-muted small"><em>9:49 AM</em>
                      </span>
                    </a>
                    <a href="#" className="list-group-item">
                      <i className="fa fa-upload fa-fw" />Server Rebooted
                      <span className="pull-right text-muted small"><em>11:32 AM</em>
                      </span>
                    </a>
                  </div>
                  {/* /.list-group */}
                  <a href="#" className="btn btn-info btn-block">View All Alerts</a>
                </div>
              </div>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-primary">
                {/* Default panel contents */}
                <div className="panel-heading"># TO DO LIST - TASK YOU HAVE TO DO</div>
                {/* Table */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>#</th>
                      <th>Task Name</th>
                      <th>On Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="list-group-item-success">
                      <td>1</td>
                      <td><input type="checkbox" defaultValue /></td>
                      <td>100$ Pending Payment</td>
                      <td>23rd June </td>
                      <td><a href="#" className="btn btn-primary ">Just Done</a></td>
                    </tr>
                    <tr className="list-group-item-danger">
                      <td>2</td>
                      <td><input type="checkbox" defaultValue /></td>
                      <td>200 Messages To Reply</td>
                      <td>10th November </td>
                      <td><a href="#" className="btn btn-success">Pending</a></td>
                    </tr>
                    <tr className="list-group-item-info">
                      <td>3</td>
                      <td><input type="checkbox" defaultValue /></td>
                      <td>90 Orders To Process</td>
                      <td>2nd December </td>
                      <td><a href="#" className="btn btn-primary">In Process</a></td>
                    </tr>
                    <tr className="list-group-item-warning">
                      <td>4</td>
                      <td><input type="checkbox" defaultValue /></td>
                      <td>100$ Pending Payment</td>
                      <td>23rd June </td>
                      <td><a href="#" className="btn btn-danger">Just Done </a></td>
                    </tr>
                    <tr className="list-group-item-info">
                      <td>5</td>
                      <td><input type="checkbox" defaultValue /></td>
                      <td>200 Messages To Reply</td>
                      <td>10th November </td>
                      <td><a href="#" className="btn btn-warning">Pending</a></td>
                    </tr>
                    <tr className="list-group-item-danger">
                      <td>6</td>
                      <td><input type="checkbox" defaultValue /></td>
                      <td>90 Orders To Process</td>
                      <td>2nd December </td>
                      <td><a href="#" className="btn btn-info">In Process</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /. PAGE INNER  */}
      </div>
    </div>

  )
}

export default Messages_Tasks