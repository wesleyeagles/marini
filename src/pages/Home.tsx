import { Banner } from "../components/Banner";
import { ContactBanner } from "../components/ContactBanner";
import { Empreendimentos } from "../components/Empreendimentos";
import { Footer } from "../components/Footer";
import { Habitation } from "../components/Habitation";
import { Header } from "../components/Header";
import { Lead } from "../components/Lead";
import { Sobre } from "../components/Sobre";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion"


export function Home() {

    return (
        <>
        <Helmet>
        {/* charset */}
        <meta charSet="utf-8" />

        {/* url */}
        <meta content="http://www.mariniconstrucoes.com.br" property="og:url" />
        <link href="http://www.mariniconstrucoes.com.br" rel="canonical" />

        {/* title */}
        <title>Marini | Página Inicial</title>
        <meta content="Marini Construções - Construtora sediada em Bento Gonçalves, RS" property="og:title" />
        <meta content="Marini Construções - Construtora sediada em Bento Gonçalves, RS" property="og:site_name" />

        {/* description */}
        <meta content="Construção civil de empreendimentos, obras e prédios residenciais, de pequeno, médio e grande porte. Empresa com credibilidade e responsabilidade mais de 15 anos." name="description" />
        <meta content="Construção civil de empreendimentos, obras e prédios residenciais, de pequeno, médio e grande porte. Empresa com credibilidade e responsabilidade mais de 15 anos." property="og:description" />

        {/* keyword */}
        <meta name='keywords' content='construção civíl, empreendimentos, obras, prédios, casas, apartamentos, casas de luxo, projetos de casa, obras residenciais' />
    
        {/* og type */} 
        <meta content="website" property="og:type" />
    
        {/* og lang */} 
        <meta content="pt_BR" property="og:locale" />
        </Helmet>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.6}}} exit={{opacity: 0, transition: {duration: 0.1} }}>
        <Header />
        <Sobre />
        <Banner />
        <Empreendimentos />
        <Habitation />
        <Lead />
        <ContactBanner />
        <Footer />
        </motion.div>
        </>
    )
}