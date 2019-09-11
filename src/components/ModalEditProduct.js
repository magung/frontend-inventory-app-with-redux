// import React, {Fragment} from 'react'
// import {Modal, Button} from 'react-bootstrap'
// import FormEditProduct from './FormEditProduct';

// class ModalEditProduct extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//           showModal: false,
//         }
//       }
//       render(){
//         return(
//           <Fragment>
//             <Button 
//               variant={this.props.variant || "success"} 
//               onClick={() => {this.setState({showModal:true})}}>
//               Edit Product
//             </Button>
//             <Modal
//               show={this.state.showModal}
//               onHide={() => {this.setState({showModal:false})}}
//               size="lg"
//               aria-labelledby="contained-modal-title-vcenter"
//               centered
//             >
//               <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                   Edit Product
//                 </Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <FormEditProduct 
//                   closeModal={()=>{this.setState({showModal:false})}} 
//                   history={this.props.history}
//                   />
//               </Modal.Body>
//             </Modal>
//         </Fragment>
        
//         )
//     }
// }
// export default ModalEditProduct