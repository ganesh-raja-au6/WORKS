import React, {Component, Fragment} from 'react'

class Counter extends Component {
    state={
        count : this.props.counter.value,
        imageUrl : 'https://picsum.photos/200'
    }
    formatCount(){
        const {count} = this.state
        return count === 0 ? 'Zero' : count
    }
    classhandler(){
        let classes = 'p-2 mr-3 btn btn-'
        classes += this.state.count === 0 ? 'danger' : 'success'
        return classes
    }
    clickHandler(){
        console.log('Hi am clicked!')
    }
    countIncreaseHandler = ()=> {
        this.setState({count : this.state.count + 1})
    }
    countDecreaseHandler = () => {
        this.setState({count : this.state.count - 1})
    }
    render(){
        return(
            <Fragment>
                <button className="btn btn-warning">Reset</button>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className={this.classhandler()}>{this.formatCount()}</span>
                    <button onClick={this.countIncreaseHandler} className="btn btn-primary mr-2">+</button>
                    <button onClick={this.countDecreaseHandler} className="btn btn-primary mr-2">-</button>
                    <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger">Delete</button>
                </nav>
            </Fragment>
        )
    }
}

export default Counter