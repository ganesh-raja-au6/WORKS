import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const URL = 'http://localhost:5000'

const Post = props => {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [file, setFile] = useState("")
    const [url, setUrl] = useState("")
    const post = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'instagram-clone')
        formData.append('cloud_name', 'duddghloa')
        const imageData = await fetch('https://api.cloudinary.com/v1_1/duddghloa/image/upload', {
            method: 'POST',
            body : formData
        })
        const JSONimageData = await imageData.json()
        setUrl(JSONimageData.secure_url)
    const response = await fetch(`${URL}/api/v1/users/post`, {
        method : 'POST',
        headers : {
            "Content-Type": "application/json"
        },body : JSON.stringify({title, body, file : url})
    })
    const JSONResponse = await response.json()
    console.log(JSONResponse)
    history.push('/')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        {/* <div className="card-header text-center">
                            <h2 className='brand'>Instagram</h2>
                        </div> */}
                        <div className="card-body">
                        <form onSubmit={(e) => post(e)}>
                            <div className="form-group">
                                <label htmlFor="title" className='text-primary'>Title</label>
                                <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body" className='text-primary'>Body</label>
                                <textarea className="form-control" id="body" name="body" rows="5" value={body} onChange={e=> setBody(e.target.body)} ></textarea>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="file" name="file" required onChange={e => setFile(e.target.files[0])} />
                                <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
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