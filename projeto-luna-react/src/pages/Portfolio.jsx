import Header from "../componentes/Header";
import portfolio from '../assets/projeto.jpg'
import { useEffect, useState } from "react";
import Axios from 'axios';
import styles from '../styles/pages/portfolio.module.css'
import { TiArrowForward } from "react-icons/ti";


const Portfolio = () => {
  const [reposFromApi, setReposFromApi] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Axios.get(`https://api.github.com/users/cyberlua/repos`);
        setReposFromApi(response.data);
      } catch (err) {
        console.error("Erro capturado: " + err);
      }
    };
    getData();
}, []);

  return (
    <>
      <Header title="Alguns projetos que fiz" image={portfolio} />
      <h2 className={styles.textTitle}>Projetos GitHub</h2> 
      <div className={styles.repoContainer}>
        {reposFromApi.map((repo) => (
          <div className={styles.cardRepo} key={repo.id}>
            <h3 className={styles.cardText}>{repo.name}</h3>
            <p className={styles.cardText}>{repo.description}</p>
            <a className={styles.cardLink} href={repo.html_url} target="_blank" rel="noreferrer">
            <TiArrowForward />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;