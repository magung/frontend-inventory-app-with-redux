import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { Form, Button, Modal, Container } from 'react-bootstrap'
import {login} from '../publics/actions/users'

class FormLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          style: props.style,
          email: '',
          password:'',
          loggedIn:false,
          showModal:false,
          modalTitle:'',
          modalMessage:''
        } 
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleClose = () => {
      this.setState({showModal: false})
    }
    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
          email: this.state.email, 
          password: this.state.password
      }
      this.props.dispatch(login(data))
      .then (res => {
        window.localStorage.setItem("token", res.action.payload.data.token)
        console.log(window.localStorage.getItem('token'))
        this.setState({
          loggedIn:true
        })
      })
      .catch (() => {
        this.setState({
          showModal:true,
          modalTitle:"Failed",
          modalMessage:this.props.user.errMessage
        })
      })
    }
    

    render() {
        if(window.localStorage.getItem("token")) return <Redirect to="/"/>
        else return(
          <Container>
            <div className='background' style={{height : '800px'}}>
              <div className='row' style={{margin : '55px'}}>
                
                <div className='col-6' style={{backgroundColor  : 'hsla(218, 100%, 50%, 0.5)', padding:'20px' }}>
                  <div style={{textAlign : 'center'}}>
                    <h2 className='colorWhite'>
                      Account Login
                    </h2>
                  </div>

                  <Form  style={this.state.style} onSubmit={this.handleSubmit}>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Text className='colorWhite'>
                        Email : 
                      </Form.Text>
                      <Form.Control type="email" name="email" placeholder="Enter email"  onChange={this.handleChange} required/>
                      
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                      <Form.Text className='colorWhite'>
                        Password : 
                      </Form.Text>
                      <Form.Control type="password" name="password" placeholder="Enter password"  onChange={this.handleChange} required/>
                    </Form.Group>
                    <Button variant='dark' type='submit' style={{margin:'5px'}}>
                      Login
                    </Button><br/>
                    <Link to='./register' className='colorWhite' >You have account ? Signup</Link>
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
              </div>
            </div>
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return{
      user: state.user
    }
}
export default connect(mapStateToProps)(FormLogin)