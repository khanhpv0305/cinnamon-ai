import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

import Table from '../../../components/Table'
import { btnRadius } from '../../../constants/style.constant'

const UserTable = styled(Table)`
  margin-bottom: 0;
`

UserTable.Level = styled.div``

UserTable.LevelPoint = styled.div`
  font-size: 0.9rem;
  margin-bottom: 3px;
`

const levelBarHeight = 5

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

UserTable.ActionBtns = styled.div`
  display: inline-block;
`

UserTable.ActionBtn = styled.button`
  border: none;
  border-radius: ${btnRadius}px;
  color: #6992FF;
  background: #F3F6F9;
  transition: all 0.2s;
  height: 32px;
  width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 7px;
  }

  &:hover, &:focus {
    background: #6992FF;
    color: white;
  }
`

export default UserTable
