import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Reducers
import users from './users'

const usersPersistConfig = {
  key: 'cinnamon-ai-user-list',
  storage,
  whitelist: 'list',
}

const rootReducer = combineReducers({
  users: persistReducer(usersPersistConfig, users),
})


export default rootReducer
