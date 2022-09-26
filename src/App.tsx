import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Router } from './components/Router'

import './main.css'


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
   <Navbar />
   <Router />
   </ContextStore>
   </BrowserRouter>
  )
}

export default App
