import React, {Fragment, Component } from 'react'


class Output extends Component {
    render(){
        return (
            <Fragment>
                <p>{this.props.name}</p>
                <p>Hi</p>
            </Fragment>
        )
    }
}

export default Output