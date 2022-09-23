import { Banner } from "../components/Banner";
import { ContactBanner } from "../components/ContactBanner";
import { Empreendimentos } from "../components/Empreendimentos";
import { Footer } from "../components/Footer";
import { Habitation } from "../components/Habitation";
import { Header } from "../components/Header";
import { Lead } from "../components/Lead";
import { Navbar } from "../components/Navbar";
import { Sobre } from "../components/Sobre";

import {createContext, useRef} from 'react'

export const Context = createContext<any>({})

    export const ContextStore = (props: any) => {
        const ref = useRef()
        return <Context.Provider value={ref}> {props.children} </Context.Provider>
    }

export function Home() {

    return (
        <ContextStore>
        <Navbar />
        <Header />
        <Sobre />
        <Banner />
        <Empreendimentos />
        <Habitation />
        <Lead />
        <ContactBanner />
        <Footer />
        </ContextStore>
    )
}