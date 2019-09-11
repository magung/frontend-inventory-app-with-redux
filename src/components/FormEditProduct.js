// import React, {Fragment} from 'react'
// import {connect} from 'react-redux'

// import {Modal, Row, Col, Form, Button} from 'react-bootstrap'
// import {getProductById} from '../publics/actions/products'
// import {editProduct} from '../publics/actions/products'
// import {getCategories} from '../publics/actions/categories'

// class FormEditProduct extends React.Component{
//     constructor(props){
//         super(props)
        
//         this.state = {
//             categories:[],
//             productId: props.productId,
//             formData:{
//                 name: '',
//                 description: '',
//                 image: '',
//                 category: 0,
//                 quantity: 0
//             },
//             showModal:false,
//             modalTitle:"",
//             modalMessage:""
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleClose = () => {
//         this.setState({showModal: false})
//         if (this.state.redirectOnCloseModal)
//         this.props.history.push('/')
//     }

//     handleSubmit = async (event) => {
//         event.preventDefault();
//         await this.props.dispatch(editProduct(this.props.match.params.id,this.state.formData))
        
//         this.setState({
//             showModal:true,
//             modalTitle:"Success",
//             modalMessage:"Success edit product",
//             redirectOnCloseModal: true
//         })
//     }

//     handleChange = (event) => {
//         event.preventDefault()
//         let newFormData = {...this.state.formData}
//         const target = event.target
//         const name = target.name
//         const value = target.value
//         newFormData[name] = value
//         this.setState({
//             formData: newFormData
//         })
//         console.log(this.state.formData)
//     }

   

//     async componentDidMount() {
//        await this.props.dispatch(getCategories())
//         this.setState ({categories: this.props.category.categories})
        
//         await this.props.dispatch(getProductById(this.state.productId))
        
//     }
//     render(){
//         const {categories} = this.state
//         const {name, image, description, category, quantity} = this.props.product.products
//         return(
//             <Fragment>
//                 <Form onSubmit={this.handleSubmit}>
//                     <Form.Group as={Row} controlId="formPlaintextName">
//                         <Form.Label column sm="2">
//                         Name
//                         </Form.Label>
//                         <Col sm="10">
//                         <Form.Control value={name} onChange={this.handleChange} type="text" name="name" />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} controlId="formPlaintextDescription">
//                         <Form.Label column sm="2">
//                         Description
//                         </Form.Label>
//                         <Col sm="10">
//                         <Form.Control value={description} onChange={this.handleChange} type="text" name="description" />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} controlId="formPlaintextImageURL">
//                         <Form.Label column sm="2">
//                         Image URL
//                         </Form.Label>
//                         <Col sm="10">
//                         <Form.Control value={image} onChange={this.handleChange} type="text" name="image"  />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} controlId="formPlaintextCategory">
//                         <Form.Label column sm="2">Category</Form.Label>
//                         <Col sm="10">
//                         <Form.Control onChange={this.handleChange} as="select" name="id_category">
//                             <option>--Select Category--</option>
//                             {categories.length !== 0 ? categories.map((category) => {
//                                 const selected = this.state.id_category === category.id
//                                 return <option selected={selected} value={category.id} key={category.id}> {category.category} </option>
//                                 })
//                                 :<option>Loading...</option>
//                             }
//                         </Form.Control>
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} controlId="formPlaintextDateStocks">
//                         <Form.Label column sm="2">
//                         Quantity
//                         </Form.Label>
//                         <Col sm="10">
//                         <Form.Control value={quantity} onChange={this.handleChange} name="quantity" type="number" min="0" />
//                         </Col>
//                     </Form.Group>

//                     <Button  style={{float:"right"}} variant="warning" type="submit" className="btn-black">
//                         Save
//                     </Button>
//                 </Form>
//                 <Modal show={this.state.showModal} onHide={this.handleClose}>
//                     <Modal.Header>
//                     <Modal.Title>{this.state.modalTitle}</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>{this.state.modalMessage}</Modal.Body>
//                     <Modal.Footer>
//                     <Button variant="secondary" onClick={this.handleClose}>
//                         Close
//                     </Button>
//                     </Modal.Footer>
//                 </Modal>
//             </Fragment>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return{
//       product: state.product,
//       category: state.category
//     }
//   }
  
//   export default connect(mapStateToProps)(FormEditProduct)