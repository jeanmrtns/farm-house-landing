import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
      <>
      <Head>
        <title>Farm House</title>
      </Head>

        <main className={styles.HomeContainer}>
          <Header />
          
          <div className={styles.HomeContent}>
            <h1><span>Organic</span> <span>Food for your</span> <span className={styles.greenText}>Table</span></h1>

            <div className={styles.descriptions}>
              <p>Food is a weapon - a very effective weapon.</p>
              <p>People don't cultivate, don't farm, you cut the road off,</p>
              <p>Then you subjugate them very easily.</p>
            </div>

            <div className={styles.groupButtons}>
              <button className={styles.learnMore}><a href="#">Learn more</a></button>
              <button className={styles.shopNow}><a href="#">Shop now</a></button>
            </div>

          </div>

        </main>
      </>
  )
}

export default Home
