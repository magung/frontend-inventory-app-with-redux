import React, {Fragment} from 'react'
import {Modal, Button} from 'react-bootstrap'
import FormCreateCategory from './FormCreateCategory'

class ModalCreateCategory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          showModal: false,
        }
      }
      render(){
        return(
          <Fragment>
            <Button
              variant="ligth"
              onClick={() => {this.setState({showModal:true})}}
              style={{width:'100%'}}>
              Add Category
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
                  Add Category
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormCreateCategory
                  closeModal={()=>{this.setState({showModal:false})}}
                  history={this.props.history}
                />
              </Modal.Body>
            </Modal>
          </Fragment>
        )
      }
}

export default ModalCreateCategory
