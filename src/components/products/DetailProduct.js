import React, {Component} from 'react';
import store from '../../publics/Store'
import { Card,Modal, Button , Alert} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import Axios from 'axios';
import { getProductById, deleteProduct, addQty, reduceQty }  from '../../publics/actions/Products'

class DetailProduct extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      showModalDelete: false,
      showModalAdd: false,
      showModalQty: false,
      showModalReduce: false,
      modalTitle:'',
      modalMessage:'',
      deleted: false,
      loading:true,
      quantity:0
    }
  }
    componentDidMount(){
        // this.props.getProductById(this.props.match.params.id)
        const {id} = this.props.match.params;
        setTimeout(() => this.setState({loading:false}) , 500);
        setTimeout(() => this.props.getProductById(id) , 500);
        // this.props.getProductById(id)
      }

    toDelete = () =>{
      this.setState({
        showModalDelete: true,
        modalTitle: "Delete",
        modalMessage: 'You want to deleting Product ?',
      })
    }

    toAdd = () =>{
      this.setState({
        showModalAdd: true,
        modalTitle: "Add Data",
        modalMessage: 'You want to add quantity Product ?',
      })
    }

    toReduce = () =>{
      this.setState({
        showModalReduce: true,
        modalTitle: "Reduce Data",
        modalMessage: 'You want to reduce quantity Product ?',
      })
    }

    handleAdd = () => {
      const {id} = this.props.match.params
      this.props.addQty(id)
      .then(() => {
        this.setState({
          showModalQty: true,
          modalTitle: "Success",
          modalMessage: 'Succes add Product',
        })
      })
      .catch(() => {
        this.setState({
          showModalQty: true,
          modalTitle: "Success",
          modalMessage: 'Succes add Product',
          showModalAdd: false
        })
      })

        this.props.product.products.quantity += 1;
        this.setState({quantity:  this.props.product.products.quantity})
    }

    handleReduce = () => {
      const {id} = this.props.match.params
      this.props.reduceQty(id)
      .then(() => {
        this.setState({
          showModalQty: true,
          modalTitle: "Success",
          modalMessage: 'Succes add Product',
        })
      })
      .catch(() => {
        this.setState({
          showModalQty: true,
          modalTitle: "Success",
          modalMessage: 'Succes reduce Product',
          showModalReduce: false
        })
      })

        this.props.product.products.quantity -= 1;
        this.setState({quantity:  this.props.product.products.quantity})
    }

    handleDelete = () => {
      const {id} = this.props.match.params
      this.props.deleteProduct(id)
        .then(() => {
          this.setState({
            showModal: true,
            modalTitle: "Success",
            modalMessage: 'Succes deleting Product',
            deleted: true
          })
        })
        .catch(() => {
          this.setState({
            showModal: true,
            modalTitle: "Success",
            modalMessage: 'Succes deleting Product',
          })
        })
    }

    handleClose = () => {
      this.setState({showModal: false, showModalDelete: false})
      if (this.state.redirectOnCloseModal)
      this.setState({
        deleted: true
      })
        this.props.history.push('/')
    }

    handleCloseDelete = () => {
      this.setState({showModalDelete: false})
    }
    handleCloseAdd = () => {
      this.setState({showModalAdd: false})
    }
    handleCloseReduce = () => {
      this.setState({showModalReduce: false})
    }
    handleCloseQty = () => {
      const {id} = this.props.match.params
      this.setState({showModalQty: false})
     return <Redirect push to={`/home/products/`+ id}/>
     // this.props.history.push(`/home/products/`+ id)
    }

    render() {
        const {deleted, loading} =this.state
        if(deleted === true){
          return (<Redirect push to='/'/>)
        }
        const {id_product, name, description, image, category, quantity} = this.props.product.products;
        if(loading === true){
        return (<p>Loading .... </p>)}

        return(
                <React.Fragment>
                <div className='container' style={{ marginTop:'55px'}}>
                <Card style={{ width: '50%', border:'0'}}>
                    <Card.Body>
                    <div className='col-9  p-0'>
                    <Card.Img variant="top" src={image} onError={() => {this.props.product.products.image = 'https://icon-library.net/images/inventory-icon/inventory-icon-10.jpg'; this.forceUpdate()}}/>

                    </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '50%',border:'0'}}>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>Quantity : {quantity}</Card.Text>
                        <Card.Text>{category}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <Link to={`/home/products/edit/` + id_product}><Button variant="success" style={{margin: '2px'}}>Edit</Button></Link>
                    <Button variant="primary" onClick={this.toAdd} style={{margin: '2px'}}>add</Button>
                    <Button variant="warning" onClick={this.toReduce} style={{margin: '2px'}}>reduce</Button>
                    <Button variant="danger" onClick={this.toDelete} style={{margin: '2px'}}>delete</Button><br/>
                    <Link to='/'>Back Home</Link>

                    </Card.Body>
                </Card>

                <Modal show={this.state.showModal} >
                  <Modal.Header>
                    <Modal.Title>{this.state.modalTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {this.state.modalMessage}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalDelete}>
                  <Modal.Header>
                    <Modal.Title>{this.state.modalTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {this.state.modalMessage}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleDelete}>
                      Ok
                    </Button>
                    <Button variant="secondary" onClick={this.handleCloseDelete}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalAdd}>
                  <Modal.Header>
                    <Modal.Title>{this.state.modalTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {this.state.modalMessage}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleAdd}>
                      Ok
                    </Button>
                    <Button variant="secondary" onClick={this.handleCloseAdd}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalReduce}>
                  <Modal.Header>
                    <Modal.Title>{this.state.modalTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {this.state.modalMessage}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleReduce}>
                      Ok
                    </Button>
                    <Button variant="secondary" onClick={this.handleCloseReduce}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalQty} >
                  <Modal.Header>
                    <Modal.Title>{this.state.modalTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {this.state.modalMessage}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseQty}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                </div>
              </React.Fragment>
              )

    }
}
const mapStateToProps = state => {

  return{
    product: state.product,
    category: state.category
  }
}

export default connect(mapStateToProps, {getProductById, deleteProduct, addQty, reduceQty})(DetailProduct)
// export default DetailProduct
