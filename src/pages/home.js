import React from 'react'
import Sidebar from 'react-sidebar'
 import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {Navbar, Button, Nav} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import UserSideBar from '../components/SideBar'
import axios from 'axios'
// import {SearchProduct} from '../components/SearchProduct'
// import {getProfile} from '../publics/actions/users'
import Products from '../components/Products'
// axios.defaults.baseURL = 'http://localhost:8080';
import DetailProduct from '../components/DetailProduct'
import EditProduct from '../components/EditProduct'
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sidebarOpen : false,
      search:"",
      userData:undefined
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    
  }
  onSetSidebarOpen = (open) => {
    this.setState({
      sidebarOpen : open
    })
  }
  componentDidMount= () => {
    if(window.localStorage.getItem("token") === null)
     return this.props.history.push('/')
  }

    render(){
        return(
          <div>
          <Sidebar
            children={''}
            sidebar={
              <UserSideBar
                history={this.props.history}
              />}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen} 
            styles={{ sidebar: { background: 'white', zIndex: '20', width: '20%', position: 'fixed' } }} >
            <div>
            <Navbar expand="lg" style={{backgroundColor  : 'hsla(218, 100%, 50%, 0.8)'}}>
              <Nav>
              <Button  onClick={() => this.onSetSidebarOpen(true)}>
                <FontAwesomeIcon icon={faBars}/>
              </Button>
              <Navbar.Brand style={{color:'white'}} onClick={()=>this.props.history.push("/")}>
                Inventory App
              </Navbar.Brand>
              </Nav>
            </Navbar>
            </div>
            </Sidebar>
            <br/>
            <div>
            <Route path={'/home'} exact render= {(props)=>{ return <Products {...props}/>}}/>
            <Route path={'/home/products/:id'} exact render={(props) => {return <DetailProduct {...props} /> }} />
            <Route exact path={'/home/products/edit/:id'} render= {(props)=>{ return <EditProduct {...props}/>}} />
            </div>
          </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
      user: state.user,
    }
  }
export default connect(mapStateToProps)(Home)