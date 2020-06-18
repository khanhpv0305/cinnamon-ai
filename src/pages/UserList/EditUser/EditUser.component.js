import React from 'react'
import { Form as BsForm, FormGroup, Label, Input, FormFeedback, Modal, ModalHeader, ModalBody, ModalFooter, Button as BsButton } from 'reactstrap'

import useHooks from './EditUser.hook'

const EditUserComponent = (props) => {
  const {
    handleEdit,
    showEditForm,
    handleToggleEditForm,
    editingUserId,
    userList,
  } = props

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useHooks({
    handleEdit,
    editingUser: userList.find((user) => user.id === editingUserId) || {},
  })

  return (
    <Modal
      isOpen={showEditForm}
      toggle={handleToggleEditForm()}
      onClosed={handleReset}
      autoFocus={false}
    >
      <BsForm onSubmit={handleSubmit}>
        <ModalHeader>Edit user</ModalHeader>

        <ModalBody>
          <FormGroup>
            <Label for='name'>Name *</Label>

            <Input
              type='text'
              autoFocus
              name='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={!!errors.name}
            />

            {!!errors.name && <FormFeedback valid={false}>{errors.name}</FormFeedback>}
          </FormGroup>

          <FormGroup>
            <Label for='point'>Point *</Label>

            <Input
              type='text'
              name='point'
              value={values.point}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={!!errors.point}
            />

            {!!errors.point && <FormFeedback valid={false}>{errors.point}</FormFeedback>}
          </FormGroup>

          <FormGroup>
            <Label for='level'>Level *</Label>

            <Input
              type='text'
              name='level'
              value={values.level}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={!!errors.level}
            />

            {!!errors.level && <FormFeedback valid={false}>{errors.level}</FormFeedback>}
          </FormGroup>

          <FormGroup>
            <Label for='star'>Star *</Label>

            <Input
              type='text'
              name='star'
              value={values.star}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={!!errors.star}
            />

            {!!errors.star && <FormFeedback valid={false}>{errors.star}</FormFeedback>}
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <BsButton
            color='primary'
            type='submit'
          >Submit</BsButton>
        </ModalFooter>
      </BsForm>
    </Modal>
  )
}

export default EditUserComponent
