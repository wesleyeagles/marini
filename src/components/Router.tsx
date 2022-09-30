import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { EmpreendimentosEmAndamento } from "../pages/EmpreendimentosEmAndamento";
import { EmpreendimentosResidenciais } from "../pages/EmpreendimentosResidenciais";
import { Home } from "../pages/Home";
import { Terrace } from "../pages/Terrace";

export function Router() {
    return (
        <AnimatePresence>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/empreendimentos-em-andamento' element={<EmpreendimentosEmAndamento/>}/>
            <Route path='/empreendimentos-residenciais' element={<EmpreendimentosResidenciais/>}/>
            <Route path='/terrace' element={<Terrace/>}/>
        </Routes>
        </AnimatePresence>
    )
}