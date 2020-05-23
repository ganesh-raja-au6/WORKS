import React from 'react';

const Home = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card my-5">
                        <div className="card-header">
                            <img src='https://picsum.photos/200' alt="profile" className="rounded-circle" style={{width:"30px"}}/>
                            <p className="ml-2 d-inline">Username</p>
                        </div>
                        <div className="card-body p-0">
                            <img src='https://picsum.photos/800' alt="profile-img" className="img-fluid" />
                        </div>
                        <div className="card-footer">
                            <div className="mb-3">
                            <i className="mr-2 fa fa-heart" aria-hidden="true"></i>
                            <i className="mx-2 fa fa-comment-o" aria-hidden="true"></i>
                            <i className="ml-2 fa fa-paper-plane-o" aria-hidden="true"></i>
                            <i className="float-right fa fa-bookmark" aria-hidden="true"></i>
                            </div>
                            <p className="font-weight-bold mb-0">Title</p>
                            <p className="">Description</p>
                            <input type="text" name="comment" id="comment" className="form-control" placeholder="Add a comment"/>
                        </div>
                    </div>
                    <div className="card my-5">
                        <div className="card-header">
                            <img src='https://picsum.photos/200' alt="profile" className="rounded-circle" style={{width:"30px"}}/>
                            <p className="ml-2 d-inline">Username</p>
                        </div>
                        <div className="card-body p-0">
                            <img src='https://picsum.photos/800' alt="profile-img" className="img-fluid" />
                        </div>
                        <div className="card-footer">
                            <div className="mb-3">
                            <i className="mr-2 fa fa-heart" aria-hidden="true"></i>
                            <i className="mx-2 fa fa-comment-o" aria-hidden="true"></i>
                            <i className="ml-2 fa fa-paper-plane-o" aria-hidden="true"></i>
                            <i className="float-right fa fa-bookmark" aria-hidden="true"></i>
                            </div>
                            <p className="font-weight-bold mb-0">Title</p>
                            <p className="">Description</p>
                            <input type="text" name="comment" id="comment" className="form-control" placeholder="Add a comment"/>
                        </div>
                    </div>
                    <div className="card my-5">
                        <div className="card-header">
                            <img src='https://picsum.photos/200' alt="profile" className="rounded-circle" style={{width:"30px"}}/>
                            <p className="ml-2 d-inline">Username</p>
                        </div>
                        <div className="card-body p-0">
                            <img src='https://picsum.photos/800' alt="profile-img" className="img-fluid" />
                        </div>
                        <div className="card-footer">
                            <div className="mb-3">
                            <i className="mr-2 fa fa-heart" aria-hidden="true"></i>
                            <i className="mx-2 fa fa-comment-o" aria-hidden="true"></i>
                            <i className="ml-2 fa fa-paper-plane-o" aria-hidden="true"></i>
                            <i className="float-right fa fa-bookmark" aria-hidden="true"></i>
                            </div>
                            <p className="font-weight-bold mb-0">Title</p>
                            <p className="">Description</p>
                            <input type="text" name="comment" id="comment" className="form-control" placeholder="Add a comment"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home