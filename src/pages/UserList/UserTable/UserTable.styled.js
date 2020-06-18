import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

import Table from '../../../components/Table'

const UserTable = styled(Table)`
  margin-bottom: 0;
`

UserTable.Level = styled.div``

UserTable.LevelPoint = styled.div`
  font-size: 0.9rem;
  margin-bottom: 3px;
`

const levelBarHeight = '5'

const getLevelBarColor = (level) => {
  if (level < 0.25) return 'red'

  if (level < 0.5) return 'yellow'

  return 'green'
}

UserTable.LevelBar = styled(
  ({ className, level }) => (
    <div {...{ className }}>
      <div
        style={{
          backgroundColor: getLevelBarColor(level),
          height: '100%',
          width: `${level * 100}%`,
        }}
      />
    </div>
  )
)`
  height: ${levelBarHeight}px;
  border-radius: ${levelBarHeight / 2}px;
  background: #ECF0F3;
  overflow: hidden;
`

UserTable.Star = styled(FaStar)`
  color: yellow;

  &:not(:last-child) {
    margin-right: 3px;
  }
`

export default UserTable
