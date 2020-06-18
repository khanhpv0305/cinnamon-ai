import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Components
import UserListPage from '../../pages/UserList'
import GlobalStyle from '../GlobalStyle'

import { store, persistor } from '../../store'

import 'bootstrap/dist/css/bootstrap.min.css'

const RootComponent = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />

      <UserListPage />
    </PersistGate>
  </Provider>
)

export default RootComponent
