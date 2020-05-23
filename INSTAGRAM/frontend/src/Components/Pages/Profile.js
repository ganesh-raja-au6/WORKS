import React from 'react';

const Profile = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-space-around mt-3 p-3">
                        <img src="https://picsum.photos/800" alt="profile-pic" className="img-fluid rounded-circle ml-5" style={{width : '180px'}} />
                        <div className="ml-5 pl-5 mt-2">
                            <div className="mb-3">
                                <h3 className="d-inline mr-4">Ganesh Raja</h3>
                                <button className="btn btn-light">Edit Profile</button>
                            </div>
                            <div className="d-flex justify-content-space-between">
                                <p className="mr-2">16 Posts</p>
                                <p className="mx-2">48 Followers</p>
                                <p className="ml-2">171 Following</p>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-0">Full Name</p>
                                <p className="mb-0">Description</p>
                                <p className="mb-0 font-weight-bold">Website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row mt-5">
                        <div className="col-4 my-3">
                            <img src="https://picsum.photos/800" className="img-fluid" alt="post" />
                        </div>
                        <div className="col-4 my-3">
                            <img src="https://picsum.photos/800" className="img-fluid" alt="post" />
                        </div>
                        <div className="col-4 my-3">
                            <img src="https://picsum.photos/800" className="img-fluid" alt="post" />
                        </div>
                        <div className="col-4 my-3">
                            <img src="https://picsum.photos/800" className="img-fluid" alt="post" />
                        </div>
                        <div className="col-4 my-3">
                            <img src="https://picsum.photos/800" className="img-fluid" alt="post" />
                        </div>
                        <div className="col-4 my-3">
                            <img src="https://picsum.photos/800" className="img-fluid" alt="post" />
                        </div>
                        <div className="col-4 my-3">
                            <img src="https://picsum.photos/800" className="img-fluid" alt="post" />
                        </div>
                        <div className="col-4 my-3">
                            <img src="https://picsum.photos/800" className="img-fluid" alt="post" />
                        </div>
                        <div className="col-4 my-3">
                            <img src="https://picsum.photos/800" className="img-fluid" alt="post" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile