import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import App from  './App'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import ActivateAccount from './Components/ActivateAccount'
import Private from './Components/Private'
import Admin from './Components/Admin'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'

const Routes = ()=> {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/auth/activate/:token" component={ActivateAccount} />
                <PrivateRoute exact path="/private" component={Private} />
                <AdminRoute exact path="/admin" component={Admin} />
            </Switch>
        </Router>
    )
}

export default Routes