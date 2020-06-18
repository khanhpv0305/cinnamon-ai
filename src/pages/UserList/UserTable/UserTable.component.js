import React from 'react'

import UserTable from './UserTable.styled'
import { formatNumber } from '../../../helpers/number.helper'

const TableComponent = (props) => {
  const {
    userList,
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
            name,
            point,
            level,
            star,
          } = user

          const stars = []

          for (let i = 0; i < star; i++) {
            stars.push(<UserTable.Star />)
          }

          return (
            <tr>
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
            </tr>
          )
        })}
      </tbody>
    </UserTable>
  )
}

export default TableComponent
