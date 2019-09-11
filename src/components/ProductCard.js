import React from 'react'
import { Card } from "react-bootstrap"
import { Redirect } from 'react-router-dom'
class ProductCard extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      quantity : 0,
      redirectToDetails:false
    }
    this.redirectToDetails = this.redirectToDetails.bind(this)
  } 
  redirectToDetails = () => {
    this.setState({redirectToDetails:true})
  }
  render(){
    if (this.state.redirectToDetails)
    return <Redirect to={`/home/products/${this.props.product.id}`}/>
      const {name, image, category, quantity} = this.props.product
      return(
        <div className='border col-3 border col-3 mx-4 mt-5 mb-3 p-0' onClick={() => this.redirectToDetails()}>
          <div className="text-center">
            <img src={image} onError={() => {this.props.product.image = 'https://icon-library.net/images/inventory-icon/inventory-icon-10.jpg'; this.forceUpdate()}}  className="img-fluid d-inline-block img-h" />  
          </div>
          <div className="p-3">
            <h5>{name}</h5>
            <p>Category: {category}<br/>
              Quantity: {quantity}</p>
          </div>
        </div>
        )
  }
}
export default ProductCard