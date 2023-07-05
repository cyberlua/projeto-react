import Header from "../componentes/Header";
import styles from '../styles/pages/sobre.module.css'
import luaImg from '../assets/lua.jpeg'

import sobre from '../assets/sobre.jpg'

const Sobre = () => {
    return ( 
        <>
        <Header title="Um pouco sobre mim" image={sobre} />
                <div className={styles.aboutContainer}>
                    <img className={styles.aboutImage} src={luaImg} />
                <div className={styles.bioContainer}>
                    <h2 className={styles.bioTitle}>Brilha la Luna</h2>
                    <p className={styles.bioText}>
                        Me chamo Luna Trevisan!
                        Sou uma entusiasta do universo dos jogos eletrônicos e acredito que eles têm o poder de nos transportar para mundos incríveis, despertando nossa imaginação e nos conectando a pessoas de diferentes partes do mundo. Amo maratonar seriados, filmes, desenhos e animes. Mas não são só os jogos e o entretenimento que me fascinam.
                    </p>
                    <p className={styles.bioText}>
                        Decidi investir na programação para unir minha paixão por computadores, aprendizado constante e resolução de problemas. Passo horas em frente ao computador, seja para criar projetos, explorar tecnologias ou me aprofundar em novos desafios. Além disso, sou cat lover assumida. Esses seres fofinhos têm um lugar especial no meu coração. 
                        </p>
                    <p className={styles.bioText}>
                        Estou quase me formando como desenvolvedora front-end pela Reprograma e mal posso esperar para criar experiências digitais incríveis. Vamos nessa explorar novas possibilidades e criar algo surpreendente!
                    </p>
                </div>
                </div>
            </>
        );
    };
 
export default Sobre;