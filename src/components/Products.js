import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import loadingg from '../assets/Ellipsis-1s-100px.gif';
import axios from 'axios'
import { getProducts } from '../publics/actions/products'

import ProductCard from "./ProductCard"  
import Pagination from './Pagination';

class Products extends React.Component{
  state = {
    search: '%%',
    sortBy: 'date_updated',
    sort: 'asc',
    page: 1,
    limit: 6,
  }
  
  componentDidMount = () => {
    this.props.getProducts(this.state)
  }
  queryString = async (query) => {
    await this.setState(query)
    this.componentDidMount()
	}

	pageNumber = () => {
		var data = [];
		const counter =  Math.ceil(this.props.product.total.total / this.state.limit);
		for (let i = 1; i <= counter; i++) {
			data.push(i);
		}
		return data
	}

  render() {
    const pageNum = this.pageNumber();
    const { isLoading, products} = this.props.product
    return(
      <div>
        <Pagination callBack={this.queryString} pagination={pageNum}/>
        {
          (!isLoading && products.length > 0) ? products.map(product => {
            return <ProductCard product={product} key={product.id} />
          }) :
          <div style={{textAlign:'center', marginTop:'100px'}}><img src={loadingg} /><p>Loading brooo....</p></div>
        }
      </div>
    )
  }
}
const mapStateToProps = state => {

    return{
      product: state.product
    }
  }
  
  export default connect(mapStateToProps, {getProducts})(Products)