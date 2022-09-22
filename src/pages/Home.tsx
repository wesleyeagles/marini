import { Banner } from "../components/Banner";
import { ContactBanner } from "../components/ContactBanner";
import { Empreendimentos } from "../components/Empreendimentos";
import { Footer } from "../components/Footer";
import { Habitation } from "../components/Habitation";
import { Header } from "../components/Header";
import { Lead } from "../components/Lead";
import { Navbar } from "../components/Navbar";
import { Sobre } from "../components/Sobre";

export function Home() {
    return (
        <>
        <Navbar />
        <Header />
        <Sobre />
        <Banner />
        <Empreendimentos />
        <Habitation />
        <Lead />
        <ContactBanner />
        <Footer />
        </>
    )
}