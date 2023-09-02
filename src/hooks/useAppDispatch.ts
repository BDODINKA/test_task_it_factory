import { useDispatch } from 'react-redux'

import { AppDispatch } from '../types/HookTypes'

export const useAppDispatch = () => useDispatch<AppDispatch>()
