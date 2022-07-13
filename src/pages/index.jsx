import styles from '../../styles/style.module.scss'
import CardJordan from '../components/CardJordan'
import Head from 'next/head';

export default function Home() {
  return (
    <>

      <Head>
          <title>Jordan Shoes</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.faixaPreta}>Ganhe R$ 10,00 de desconto no frete</div>
        <div className={styles.faixaBranca}>JordanShoes</div>
      </header>
    
      <main>
        <div className={styles.bannerInicio}>
          <div className={styles.elementsBanner}>
            <div className={styles.texts}>
              <h2>A melhor loja de Jordan</h2>
              <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <h2>Destaques</h2>
          <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>

          <div className={styles.cardsJordan}>
            <CardJordan img={'./images/air-jordan-1.png'}/>
            <CardJordan img={'./images/air-jordan-2.png'}/>
            <CardJordan img={'./images/air-jordan-3.png'}/>
            <CardJordan img={'./images/air-jordan-4.png'}/>
            <CardJordan img={'./images/air-jordan-5.png'}/>
            <CardJordan img={'./images/air-jordan-6.png'}/>
            <CardJordan img={'./images/air-jordan-7.png'}/>
            <CardJordan img={'./images/air-jordan-8.png'}/>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        Todos os direitos reservados
      </footer>
    
    </>
  )
}
