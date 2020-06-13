import React, {Component, Fragment} from 'react'
import CounterComponent from './Components/CounterComponent.jsx'

class App extends Component {
    render(){
        return (
            <Fragment>
                <CounterComponent />
            </Fragment>
        )
    }
}

export default App