import React from 'react'
import { Container } from 'reactstrap'

// Components
import Layout from '../../components/Layout'
import UserList from './UserList.styled'
import Button from '../../components/Button'
import UserTable from './UserTable'

// Hooks
import useHooks from './UserList.hook'

const UserListPage = () => {
  const {
    userList,
  } = useHooks()

  return (
    <Layout>
      <Container>
        <UserList>
          <UserList.ActionButtonsWrapper>
            <Button>Add user</Button>
          </UserList.ActionButtonsWrapper>

          <UserList.List>
            <UserTable {...{ userList }} />
          </UserList.List>
        </UserList>
      </Container>
    </Layout>
  )
}

export default UserListPage
