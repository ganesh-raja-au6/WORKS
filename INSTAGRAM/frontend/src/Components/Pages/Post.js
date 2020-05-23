import React from 'react';

const Post = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        {/* <div className="card-header text-center">
                            <h2 className='brand'>Instagram</h2>
                        </div> */}
                        <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title" className='text-primary'>Title</label>
                                <input type="text" className="form-control" id="title" name="title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body" className='text-primary'>Body</label>
                                <textarea className="form-control" id="body" name="body" rows="7"></textarea>
                            </div>
                            <div className="custom-file">
                                <input type="file" class="custom-file-input" id="validatedCustomFile" required />
                                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-outline-primary my-3" value="Post" />
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post