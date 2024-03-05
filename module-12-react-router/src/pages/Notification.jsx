import React from 'react'

function Notification() {
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Notifications</h1>
                            <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Alert Styles
                                </div>
                                <div className="panel-body">
                                    <div className="alert alert-success">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                    </div>
                                    <div className="alert alert-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                    </div>
                                    <div className="alert alert-warning">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                    </div>
                                    <div className="alert alert-danger">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Dismissable Alerts
                                </div>
                                <div className="panel-body">
                                    <div className="alert alert-success alert-dismissable">
                                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                    </div>
                                    <div className="alert alert-info alert-dismissable">
                                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                    </div>
                                    <div className="alert alert-warning alert-dismissable">
                                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                    </div>
                                    <div className="alert alert-danger alert-dismissable">
                                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Modals
                                </div>
                                <div className="panel-body">
                                    <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                                        Launch Demo Modal
                                    </button>
                                    <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                                                </div>
                                                <div className="modal-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Notification