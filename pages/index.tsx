import { Header } from 'components/Header'
import 'styles/Home.module.scss'
import bg from '../img/homebg.png'

const Home = (): JSX.Element => {

    return (
        <div className='home'>
            <Header />

            {/* <div className={styles.content}>{leftColumn}</div> */}

            <h1>Welcome to CS 1410.</h1>

            <p>
                We're gonna teach you how to teach computers common sense. All while trying to be
                ethical about it. jdiaof
            </p>

            <div className='test'/>

            <img src={bg} alt='home background image'/>

            <div className='home-bg'/>

        </div>
    )
}

export default Home
