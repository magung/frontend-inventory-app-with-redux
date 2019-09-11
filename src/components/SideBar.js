import React from 'react'
// import {Link} from 'react-router-dom'
import {Container, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import ModalCreateProduct from './ModalCreateProduct'
import {getProfile, logout} from '../publics/actions/users'

class SidebarUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          username: props.username || "dummy",
          image: props.image || "https://icon-library.net/images/user-login-icon/user-login-icon-17.jpg",
          email: props.email || "dummy@gmail.com",
          level: props.level || "regular",
          name: props.name || "dummyfullname",
          id: props.id ,
          history: props.history,
        }
        this.handleLogout = this.handleLogout.bind(this)
      }
      handleLogout = async (event) => { 
        window.localStorage.removeItem("token")
        await this.props.dispatch(logout())
        if(window.localStorage.getItem("token") === null)
          this.props.history.push('/')
      }
      componentDidMount = async() => {
        if(!this.props.user.userProfile){
          await this.props.dispatch(getProfile())
          this.setState({
            ...this.props.user.userProfile
          })
        }
      }

      render(){
        if(this.props.user.userProfile){
            return(
                <div style={{textAlign:'center'}}>
                <img className='dashboard' src={this.props.user.userProfile.image||"https://icon-library.net/images/user-login-icon/user-login-icon-17.jpg"} alt="user" />
                <h3 >Hello ..</h3>
                <h3>{this.props.user.userProfile.username}</h3>
                <h4>{this.props.user.userProfile.name}</h4>
                <h4>{this.props.user.userProfile.email}</h4>
                <Container className="sidebar-buttons ">
                  <ModalCreateProduct history={this.state.history}/>
                  <Row className="justify-content-md-center"><Button size="lg" variant="light" onClick={this.handleLogout} >Logout</Button></Row>
                </Container>
                </div>
            )
        }else{
            return(
                <h5>Loading....</h5>
            )
        }

      }
}
const mapStateToProps = (state) => {
    return{
      user: state.user
    }
  }
  
  export default connect(mapStateToProps)(SidebarUser)
  