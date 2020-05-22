import {createContext} from 'react'
import {alertReducer} from "./alertReducer";

export const AlertContext = createContext(alertReducer)