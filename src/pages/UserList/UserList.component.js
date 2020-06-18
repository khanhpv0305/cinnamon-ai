import React from 'react'
import { Container } from 'reactstrap'

// Components
import Layout from '../../components/Layout'
import UserList from './UserList.styled'
import Button from '../../components/Button'
import UserTable from './UserTable'
import CreateUser from './CreateUser'
import DeleteConfirmation from './DeleteConfirmation'
import EditUser from './EditUser'

// Hooks
import useHooks from './UserList.hook'

const UserListPage = () => {
  const {
    userList,
    showAddForm,
    handleToggleAddForm,
    handleCreate,
    showConfirmForm,
    handleToggleConfirmForm,
    handleDelete,
    showEditForm,
    editingUserId,
    handleToggleEditForm,
    handleEdit,
  } = useHooks()

  return (
    <Layout>
      <Container>
        <UserList>
          <UserList.ActionButtonsWrapper>
            <Button onClick={handleToggleAddForm}>Add user</Button>
          </UserList.ActionButtonsWrapper>

          <UserList.List>
            <UserTable {...{ userList, handleToggleConfirmForm, handleToggleEditForm }} />
          </UserList.List>
        </UserList>
      </Container>

      <CreateUser {...{ handleCreate, handleToggleAddForm, showAddForm }} />

      <DeleteConfirmation {...{ showConfirmForm, handleToggleConfirmForm, handleDelete }} />

      <EditUser {...{ handleEdit, handleToggleEditForm, showEditForm, editingUserId, userList }} />
    </Layout>
  )
}

export default UserListPage
