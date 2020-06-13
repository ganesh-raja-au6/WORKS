import React, {Component, Fragment} from 'react'
import Counter from './Counter.jsx'

class CounterComponent extends Component {
    render(){
        return (
            <Fragment>
                <Counter />
                <Counter />
                <Counter />
            </Fragment>
        )
    }
}

export default CounterComponent