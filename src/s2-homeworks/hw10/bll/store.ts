import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers, legacy_createStore } from 'redux'
import { themeReducer } from '../../hw12/bll/themeReducer'
import { loadingReducer } from './loadingReducer'

const reducers = combineReducers({
	loading: loadingReducer, // hw10
	theme: themeReducer, // hw12
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
export const useTypedSelector: TypedUseSelectorHook<AppStoreType> = useSelector

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
