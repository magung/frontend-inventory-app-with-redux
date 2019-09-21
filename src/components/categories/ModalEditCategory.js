import React, {Fragment} from 'react'
import {Modal, Button} from 'react-bootstrap'
import FormEditCategory from './FormEditCategory'

class ModalCreateCategory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          showModal: false,
        }
      }
      render(){
        return(
          <>
            <Button
              variant="primary"
              onClick={() => {this.setState({showModal:true})}}
              >
              Edit
            </Button>
            <Modal
              show={this.state.showModal}
              onHide={() => {this.setState({showModal:false})}}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Edit Category
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormEditCategory
                  closeModal={()=>{this.setState({showModal:false})}}
                  history={this.props.history}
                  categoryId={this.props.categoryId}
                  categoryData={this.props.categoryData}
                />
              </Modal.Body>
            </Modal>
          </>
        )
      }
}

export default ModalCreateCategory
