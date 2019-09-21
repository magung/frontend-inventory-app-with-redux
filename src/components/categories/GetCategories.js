import React from  'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import loading from '../../assets/Ellipsis-1s-100px.gif';
import { getCategories, deleteCategory } from '../../publics/actions/Categories';
import { Table, Button } from 'react-bootstrap'
import ModalEditCategory from './ModalEditCategory'

const RowCategory = props => (
  <tr>
    <td>{props.item.id}</td>
    <td>{props.item.category}</td>
    <td><div><ModalEditCategory history={props.history} categoryId = {props.item.id} categoryData={props.item}  /><Button variant="danger" onClick={(e)=>props.delete(e, props.item.id)}>Delete</Button></div></td>
  </tr>
)

class GetCategories extends React.Component {

  componentDidMount = async () =>{
    await this.props.dispatch(getCategories())
  }

  handleDelete = async (e, id) => {
    e.preventDefault();
    await this.props.dispatch(deleteCategory(id))
      .then(() => {
        this.setState({
          showModal: true,
          modalTitle: "Success",
          modalMessage: 'Succes deleting Category',
          deleted: true
        })
      })
      .catch(() => {
        this.setState({
          showModal: true,
          modalTitle: "Success",
          modalMessage: 'Succes deleting Category',
        })
      })
      this.props.dispatch(getCategories())
  }

  render(){
    const { isLoading, categories} = this.props.category
    return(
      <div className='container'>
        <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            (!isLoading && categories.length > 0) ? categories.map(category => {
              return (<RowCategory item={category} key={category.id} delete={this.handleDelete}/>)
            }) :  <tr>
                    <td>Loading ...</td>
                    <td>Loading ...</td>
                    <td><button>Edit</button><button>Delete</button></td>
                  </tr>
          }
        </tbody>
        </Table>
      </div>
    )
  }
}
const mapStateToProps = state => {
    return{
      category: state.category
    }
}
export default connect(mapStateToProps)(GetCategories)
