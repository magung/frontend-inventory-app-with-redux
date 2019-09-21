import React from 'react';
import {connect} from 'react-redux';
import loading from '../../assets/Ellipsis-1s-100px.gif';
import notFound from "../../assets/404.svg"
import { getProducts } from '../../publics/actions/Products'

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

  componentDidMount = async () => {
  await this.props.getProducts(this.state)
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
    const { isLoading, products, isRejected} = this.props.product
    return(
      <div id="products" className="row justify-content-md-center" >
        <Pagination callBack={this.queryString} pagination={pageNum}/>
              { isRejected ?
                <div className='container'>
                <div className='row' style={{marginTop:'100px'}}>

                  <img src={notFound}/>
                </div>
              </div> :

              (!isLoading && products.length > 0) ? products.map(product => {
                return <ProductCard product={product} key={product.id} />
              }) :

              <div className='container'>
                <div className='row' style={{marginTop:'100px'}}>
  					      <div className="col-5"></div>
  					      <div className="col-2">
                    <img src={loading} />
                  </div>
                </div>
              </div>
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
