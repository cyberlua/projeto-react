import Header from "../componentes/Header";
import home from '../assets/home.jpg'
import styles from '../styles/pages/home.module.css'
import { BracketsCurly, Moon, FlyingSaucer } from 'phosphor-react'


const Home = () => {
  return (
    <>
      <Header title="Meu site pessoal" image={home} />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Moon size={150} color="#7000a2" weight="thin" />
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardText}>Conto um pouco sobre mim, porque decidi me jogar nesse universo de devs e coisas que gosto.</p>
        </div>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#7000a2" weight="thin" />
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardText}>Mostro alguns projetos. Tudo o que aprendi até o momento enquanto aluna da reprograma front end.</p>
        </div>
        <div className={styles.cardContainer}>
          <FlyingSaucer size={150} color="#7000a2" weight="thin" />
          <h2 className={styles.cardTitle}>Contato</h2>
          <p className={styles.cardText}>Fala comigo. Para entrevistas de emprego como deva ou para compartilharmos conhecimentos.</p>
        </div>
      </div>
    </>
  )
}
export default Home;