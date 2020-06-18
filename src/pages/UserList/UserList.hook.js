import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { userListSelector } from '../../store/users/users.selector'
import { actions } from '../../store/users'

const mock = [
  {
    name: 'Mike',
    point: 1230,
    level: 0.75,
    star: 3,
  },
  {
    name: 'Alex',
    point: 45,
    level: 0.45,
    star: 2,
  },
  {
    name: 'Christopher',
    point: 0,
    level: 0.2,
    star: 1,
  },
  {
    name: 'John',
    point: -60,
    level: 0,
    star: 0,
  },
  {
    name: 'Dave',
    point: 500,
    level: 0.6,
    star: 2,
  },
  {
    name: 'Alice',
    point: 225,
    level: 0.3,
    star: 2,
  },
  {
    name: 'Bob',
    point: 877,
    level: 0.65,
    star: 3,
  },
]

export default () => {
  const userList = useSelector(userListSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userList.length === 0) {
      dispatch(actions.setList(mock))
    }
  }, [dispatch, userList.length])

  return {
    userList,
  }
}
