import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { EmpreendimentosEmAndamento } from "../pages/EmpreendimentosEmAndamento";
import { EmpreendimentosResidenciais } from "../pages/EmpreendimentosResidenciais";
import { Home } from "../pages/Home";
import { Terrace } from "../pages/Terrace";
import AltosDoBorgo from "../pages/AltosDoBorgo/Styles/AltosDoBorgo";
import VilaDosVinhedos from "../pages/VilaDosVinhedos";
import Villagio from "../pages/Villagio";

export function Router() {
    return (
        <AnimatePresence>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/san-paulo' element={<EmpreendimentosEmAndamento/>}/>
            <Route path='/empreendimentos-entregues' element={<EmpreendimentosResidenciais/>}/>
            <Route path='/terrace' element={<Terrace/>}/>
            <Route path='/altos-do-borgo' element={<AltosDoBorgo/>}/>
            <Route path='/vale-dos-vinhedos' element={<VilaDosVinhedos/>}/>
            <Route path='/villagio-di-borgo' element={<Villagio/>}/>
        </Routes>
        </AnimatePresence>
    )
}