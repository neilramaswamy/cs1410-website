import { Header } from 'components/Header'
import styles from 'styles/Home.module.scss'

const Home = (): JSX.Element => {
    const leftColumn = (
        <div className={`${styles.textContainer} ${styles.column}`}>
            <h1>Welcome to CS 1410.</h1>

            <p>
                We're gonna teach you how to teach computers common sense. All while trying to be
                ethical about it.
            </p>
        </div>
    )

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.content}>{leftColumn}</div>
        </div>
    )
}

export default Home
