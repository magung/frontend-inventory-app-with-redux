import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import FormLogin from '../components/users/FormLogin'
import FormRegister from '../components/users/FormRegister'

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
          loggedIn: this.isLoggedIn()
        }
        if(this.isLoggedIn())
          props.history.push('/')
      }

      isLoggedIn(){
        return window.localStorage.getItem('token')
      }
    render() {
        return(
            <div className='App'>
                <Route
                    path={'/login'}
                    render={() => {
                      return (
                        this.state.loggedIn ? this.props.history.push('/')
                          : <div>
                              <FormLogin />
                            </div>
                      )
                    }}
                />
                <Route
                    path={'/register'}
                    render={() => {
                    return (
                        <div>
                            <FormRegister />
                        </div>
                    )
                    }}
                />
            </div>
        )
    }
}
export default Auth
