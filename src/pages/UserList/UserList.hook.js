import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { userListSelector } from '../../store/users/users.selector'
import { actions } from '../../store/users'

const mock = [
  {
    id: uuidv4(),
    name: 'Mike',
    point: 1230,
    level: 0.75,
    star: 3,
  },
  {
    id: uuidv4(),
    name: 'Alex',
    point: 45,
    level: 0.45,
    star: 2,
  },
  {
    id: uuidv4(),
    name: 'Christopher',
    point: 0,
    level: 0.2,
    star: 1,
  },
  {
    id: uuidv4(),
    name: 'John',
    point: -60,
    level: 0,
    star: 0,
  },
  {
    id: uuidv4(),
    name: 'Dave',
    point: 500,
    level: 0.6,
    star: 2,
  },
  {
    id: uuidv4(),
    name: 'Alice',
    point: 225,
    level: 0.3,
    star: 2,
  },
  {
    id: uuidv4(),
    name: 'Bob',
    point: 877,
    level: 0.65,
    star: 3,
  },
]

export default () => {
  const userList = useSelector(userListSelector)
  const dispatch = useDispatch()

  // Add user form state & handlers
  const [showAddForm, setAddFormState] = useState(false)

  const handleToggleAddForm = useCallback(() => setAddFormState((prevState) => !prevState), [])

  const handleCreate = useCallback((user) => {
    dispatch(actions.create({
      id: uuidv4(),
      ...user,
    }))

    setAddFormState(false)
  }, [dispatch])

  // Edit user form state & handlers
  const [showEditForm, setEditFormState] = useState(false)
  const [editingUserId, setEditingUserId] = useState({})

  const handleToggleEditForm = useCallback((id) => () => {
    setEditingUserId(id)

    setEditFormState((prevState) => !prevState)
  }, [])

  const handleEdit = useCallback((user) => {
    dispatch(actions.edit(user))

    setEditFormState(false)
  }, [dispatch])

  // Delete user confirmation form state & handlers
  const [showConfirmForm, setConfirmFormState] = useState(false)
  const [deletingUserId, setDeletingUserId] = useState()

  const handleToggleConfirmForm = useCallback((id) => () => {
    setDeletingUserId(id)

    setConfirmFormState((prevState) => !prevState)
  }, [])

  const handleDelete = useCallback(() => {
    dispatch(actions.delete({ id: deletingUserId }))

    setConfirmFormState(false)
  }, [deletingUserId, dispatch])

  useEffect(() => {
    if (userList.length === 0) {
      dispatch(actions.setList(mock))
    }
  }, [dispatch, userList.length])

  return {
    userList,
    showAddForm,
    handleToggleAddForm,
    handleCreate,
    showEditForm,
    editingUserId,
    handleToggleEditForm,
    handleEdit,
    showConfirmForm,
    deletingUserId,
    handleToggleConfirmForm,
    handleDelete,
  }
}
