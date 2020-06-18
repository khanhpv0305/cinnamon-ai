import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

import UserTable from './UserTable.styled'
import { formatNumber } from '../../../helpers/number.helper'

const UserTableComponent = (props) => {
  const {
    userList,
    handleToggleConfirmForm,
    handleToggleEditForm,
  } = props

  return (
    <UserTable>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Point</th>
          <th>Level</th>
          <th>Star</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {userList.map((user, index) => {
          const {
            id,
            name,
            point,
            level,
            star,
          } = user

          const stars = []

          for (let i = 0; i < star; i++) {
            stars.push(<UserTable.Star key={i} />)
          }

          return (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{formatNumber(point)}</td>
              <td>
                <UserTable.Level>
                  <UserTable.LevelPoint>{level * 100}%</UserTable.LevelPoint>

                  <UserTable.LevelBar {...{ level }} />
                </UserTable.Level>
              </td>
              <td>{stars}</td>
              <td>
                <UserTable.ActionBtns>
                  <UserTable.ActionBtn onClick={handleToggleEditForm(id)}><FaEdit /></UserTable.ActionBtn>

                  <UserTable.ActionBtn onClick={handleToggleConfirmForm(id)}><FaTrash /></UserTable.ActionBtn>
                </UserTable.ActionBtns>
              </td>
            </tr>
          )
        })}
      </tbody>
    </UserTable>
  )
}

export default UserTableComponent
