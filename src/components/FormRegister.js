import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Button, Modal } from 'react-bootstrap'

import {register} from '../publics/actions/users'

class FormRegister extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
          style: props.style,
          formData: {
            name: '',
            username: '',
            email: '',
            password: ''
          }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClose = () => {
        this.setState({showModal: false})
    }

    handleChange = (event) => {
        let newFormData = {...this.state.formData}
        const target = event.target
        const name = target.name
        const value = target.value
        newFormData[name] = value
        this.setState({
          formData: newFormData
        },()=>{console.log(this.state.formData)})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(register(this.state.formData))
          .then(res => {
            this.setState({
              showModal: true,
              modalTitle:"Success Register",
              modalMessage: res.action.payload.data.message
            })
          })
          .catch(()=>{
            this.setState({
              showModal:true,
              modalTitle:"Failed Register",
              modalMessage: this.props.user.errMessage
            })
          })
    }
    render() {
        return(
            <div className='container background' style={{height : '800px'}}>
            <div className='row' style={{margin : '50px'}}>
              
              <div className='col-6' style={{backgroundColor  : 'hsla(218, 100%, 50%, 0.5)', padding: '20px'}}>
                <div style={{textAlign : 'center'}}>                  
                  <h2 className='colorWhite'>
                    Signup
                  </h2>
                </div>
                <Form style={this.state.style} onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Text className='colorWhite'>
                      Name : 
                    </Form.Text>
                    <Form.Control type="text" name="name" placeholder="Enter name" onChange={this.handleChange} required/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Text className='colorWhite'>
                      Username : 
                    </Form.Text>
                    <Form.Control type="text" name="username" placeholder="Enter username" onChange={this.handleChange} required/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Text className='colorWhite'>
                      Email : 
                    </Form.Text>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} required/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Text className='colorWhite'>
                      Password : 
                    </Form.Text>
                    <Form.Control type="password" name="password" placeholder="Enter password" onChange={this.handleChange} required/>
                  </Form.Group>

                  <Button type='submit' style={{padding : '5px'}} className='btn btn-dark'>
                    Signup
                  </Button><br/>
                  <Link to='./login' className='colorWhite' >You have account ? Login</Link>
                </Form>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header>
                    <Modal.Title>{this.state.modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.modalMessage}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="warning" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
              </div>
              <div className='col-6'></div>
            </div>
          </div>
        )
    }

}
const mapStateToProps = state => {
    return{
      user: state.user
    }
  }
  
  export default connect(mapStateToProps)(FormRegister)