import React, {Fragment, Component } from 'react'
// import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text : ''
    }
    onChange = (e) => {
        this.setState({ text: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.text === ''){
            this.props.setAlert('Enter something to find a user.', 'warning')
        }else{
            this.props.searchItem(this.state.text)
            this.setState({ text: '' })
        }
    }
    render(){
        return(
            <Fragment>
                <div className='mt-4 card mb-4'>
                    <div className='card-header'>
                        <h3>Search</h3>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <input type='search' className='form-control' placeholder='Search' name='search' value={this.state.text} onChange={this.onChange}/>
                            </div>
                            <div className='form-group'>
                                <input type='submit' className='form-control btn btn-danger' />
                            </div>
                        </form>
                        {this.props.showClear && (<div className='form-group'>
                            <button className='btn btn-secondary btn-block' onClick={this.props.clearUsers}>Clear</button>
                        </div>)}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Search