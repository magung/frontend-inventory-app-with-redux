import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import {Modal, Row, Col, Form, Button} from 'react-bootstrap'
import {updateCategory, getCategories} from '../../publics/actions/Categories'
class FormEditCategory extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            categoryId: props.categoryId,
            formData:{
                category: props.categoryData.category,
            },
            showModal:false,
            modalTitle:"",
            modalMessage:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleClose = () => {
        this.setState({showModal: false})
        if (this.state.redirectOnCloseModal)
        this.props.history.push('/home/categories')
        this.props.dispatch(getCategories())
    }

    handleChange= (event) => {

        console.log('here we go',this.state.categoryId)
        let newFormData = {...this.state.formData}
        const target = event.target
        const name = target.name
        const value = target.value
        newFormData[name] = value
        this.setState({
            formData: newFormData
        })
        console.log(this.state.formData)
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.props.dispatch(updateCategory(this.state.categoryId,this.state.formData))
        .then(()=>{this.setState({
            showModal: true,
            modalTitle:"Success",
            modalMessage:"Success edit category",
            redirectOnCloseModal: true
        })})
        this.props.dispatch(getCategories())
    }



    render(){
        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formPlaintextName">
                    <Form.Label column sm="2">
                    Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control value={this.state.formData.category} onChange={this.handleChange} type="text" name="category" required/>
                    </Col>
                </Form.Group>
                <Button  style={{float:"right"}} variant="warning" type="submit" className="btn-black">
                    Save
                </Button>
                </Form>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header>
                    <Modal.Title>{this.state.modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.modalMessage}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    category: state.category
  }
}

export default connect(mapStateToProps)(FormEditCategory)
