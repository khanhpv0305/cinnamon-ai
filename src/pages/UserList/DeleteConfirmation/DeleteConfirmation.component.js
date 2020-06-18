import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button as BsButton } from 'reactstrap'

const DeleteConfirmationComponent = (props) => {
  const {
    showConfirmForm,
    handleToggleConfirmForm,
    handleDelete,
  } = props

  return (
    <Modal isOpen={showConfirmForm} toggle={handleToggleConfirmForm()}>
      <ModalHeader>Delete user</ModalHeader>

      <ModalBody>Are you sure you want to delete this user?</ModalBody>

      <ModalFooter>
        <BsButton color='danger' onClick={handleDelete}>Delete</BsButton>
      </ModalFooter>
    </Modal>
  )
}

export default DeleteConfirmationComponent
