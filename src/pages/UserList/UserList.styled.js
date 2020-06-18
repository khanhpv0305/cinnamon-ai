import styled from 'styled-components'

import { btnRadius } from '../../constants/style.constant'

const UserList = styled.div``

UserList.ActionButtonsWrapper = styled.div`
  margin-bottom: 15px;
  text-align: right;
`

UserList.List = styled.div`
  padding: 15px;
  border-radius: ${btnRadius}px;
  background: white;
`

export default UserList
