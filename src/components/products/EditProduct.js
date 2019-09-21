import React, { Component} from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

import {getProductById, updateProduct} from '../../publics/actions/Products'
import {getCategories} from '../../publics/actions/Categories'
import { connect } from 'react-redux';
class EditProduct extends Component {
    state = {
        name: '',
        image: '',
        category: 0,
        quantity: 0,
        description: ''
    }


    async componentDidMount(){
        const {id} = this.props.match.params;
        await this.props.getCategories();
        await this.props.getProductById(id);
        this.setState(this.props.product.products);

    }

    editData = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // editSelect = e => {
    //     this.setState({category : e.target.value})
    // }

    editSubmit = e => {
        e.preventDefault()
        const {id} = this.props.match.params;
        const newData = this.state;
        this.props.updateProduct(id,newData)

    }


    render() {
        const {categories} = this.props.category
        const {name, image, quantity, description, edited} = this.state;
        const path = '/home/products/' + this.props.match.params.id;
        if(this.props.product.isRedirected === true){
            return (<Redirect to={path}/>)
        }
        return(
          <div style={{height : '800px', marginTop: '50px'} } className='background2'>
          <Container>
              <Row>
              <Col ></Col>
              <Col style={{backgroundColor  : 'hsla(218, 100%, 50%, 0.5)'}}>
                  <br/><h1 className='colorWhite'>Edit Product</h1>
             <Form>
                <Form.Group >
                    <Form.Label className='colorWhite'>Name Product</Form.Label>
                    <Form.Control name="name" placeholder="Enter name product" onChange={this.editData} value={name} />
                </Form.Group>
                <Form.Group >
                    <Form.Label className='colorWhite'>Description</Form.Label>
                    <Form.Control name="description" placeholder="Enter description product" onChange={this.editData} value={description}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label className='colorWhite'>Image (Url)</Form.Label>
                    <Form.Control name="image" placeholder="Enter image product" onChange={this.editData} value={image} />
                </Form.Group>
                <Form.Group >
                    <Form.Label className='colorWhite'>Category</Form.Label>
                    <Form.Control as="select" name='category' onChange={this.editData} >
                        <option>-- Select Category --</option>
                    {   categories.map(category =>{
                        if(category.id === this.state.id_category){
                            return <option value={category.id}   key={category.id} selected>{category.category}</option>
                        }else{
                            return <option value={category.id}   key={category.id}>{category.category}</option>
                        }
                        })
                    }
                    </Form.Control>

                </Form.Group>
                <Form.Group >
                    <Form.Label className='colorWhite'>Quantity</Form.Label>
                    <Form.Control name="quantity" placeholder="Enter quantity product" onChange={this.editData} value={quantity} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.editSubmit}>
                    Submit
                </Button>
            </Form>
            <br/>
                <Link to='/' className='colorWhite'>Back to home</Link>
            </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    product: state.product,
    category: state.category
})
export default connect(mapStateToProps, {getProductById, updateProduct, getCategories})(EditProduct);
