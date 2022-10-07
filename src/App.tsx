import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'

import './main.scss'


import {createContext, useRef} from 'react'

export const Context = createContext<any>({})

    export const ContextStore = (props: any) => {
        const ref = useRef()
        return <Context.Provider value={ref}> {props.children} </Context.Provider>
    }

function App() {

  return (
   <BrowserRouter>
   <ContextStore>
   <Router />
   </ContextStore>
   </BrowserRouter>
  )
}

export default App
