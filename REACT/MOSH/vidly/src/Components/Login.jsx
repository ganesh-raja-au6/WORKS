import React, { Component } from "react";
import Input from './Common/input'

class Login extends Component{
  state = {
    account : {
      username : '', password : ''
    },errors: {}
  }
  username = React.createRef()
  // componentDidMount(){
  //   this.username.current.focus()
  // }

  handleChange = ({currentTarget : input}) => {
    const errors = {...this.state.errors}
    const errorMessage = this.validateProperty(input)
    if(errorMessage) return errors[input.name] = errorMessage
    else delete errors[input.name]
    const account = {...this.state.account}
    account[input.name] = input.value
    this.setState({account, errors})
  }
  validateProperty = ({name, value}) => {
    if(name === 'username'){
      if(value.trim() === "") return "Username is required."
    }
    if(name === 'password'){
      if(value.trim() === "") return "Password is required."
    }
  }
  validate = () => {
    const [errors, {account}] = [{}, this.state]
    if(account.username.trim() === ''){
      errors.username = 'Username cannot be blank.'
    }
    if(account.password.trim() === ''){
      errors.password = 'Password cannot be blank.'
    }
    return Object.keys(errors).length === 0 ? null : errors
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({errors : errors || {}})
    if(errors) return;
  }
  render(){
    const {account, errors} = this.state
    return (
      <div className="container">
        <div className="card mt-5">
          <div className="card-header">
            <h3>Login</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <Input name="username" label="User Name" value={account.username} onChange={this.handleChange} error={errors.username} />
              <Input name="password" label="Password" value={account.password} onChange={this.handleChange} error={errors.password} />
              <input type="submit" value="Login" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
