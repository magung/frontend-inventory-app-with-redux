import React from 'react'
import Sidebar from 'react-sidebar'
 import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {Navbar, Button, Nav} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import UserSideBar from '../components/products/SideBar'
import axios from 'axios'
import Products from '../components/products/Products'
import GetCategories from '../components/categories/GetCategories'
import DetailProduct from '../components/products/DetailProduct'
import EditProduct from '../components/products/EditProduct'
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
          <React.Fragment>
          <Sidebar
            children={''}
            sidebar={
              <UserSideBar
                history={this.props.history}
              />}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: 'white', zIndex: '20', width: '20%', position: 'fixed' } }} >

            <Navbar expand="lg" style={{backgroundColor  : 'hsla(218, 100%, 50%, 0.8)'}}>
              <Nav>
              <Button  onClick={() => this.onSetSidebarOpen(true)}>
                <FontAwesomeIcon icon={faBars}/>
              </Button>
              <Navbar.Brand style={{color:'white'}} onClick={()=>this.props.history.push("/")}>
                Inventory App
              </Navbar.Brand>
              <Nav.Link onClick={()=>this.props.history.push('/home/categories')}><b  className='colorWhite'>Categories</b></Nav.Link>
              </Nav>
            </Navbar>
            <br/>
            <React.Fragment>
            <Route path={'/home'} exact render= {(props)=>{ return <Products {...props}/>}}/>
            <Route path={'/home/categories'} exact render= {(props)=>{ return <GetCategories {...props}/>}}/>
            <Route path={'/home/products/:id'} exact render={(props) => {return <DetailProduct {...props} /> }} />
            <Route exact path={'/home/products/edit/:id'} render= {(props)=>{ return <EditProduct {...props}/>}} />
            </React.Fragment>
            </Sidebar>

          </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return{
      user: state.user,
    }
  }
export default connect(mapStateToProps)(Home)
