import { Header } from 'components/Header'
import styles from 'styles/Home.module.scss'
import Table from 'react-bootstrap/Table'

const Home = (): JSX.Element => {

    return (
        <div className='home'>

            <div className={styles.homebg}>
                <Header/>
            </div>

            {/* COURSE INFO */}
            <div className={styles.section} id={styles.intro}>
                <h1> Welcome to CS 1410!</h1>
                <p>
                    We're gonna teach you how to teach computers common sense. All while trying to be
                    ethical about it.
                </p>
                <p>

                    CS1410 is an introductory course to the field of Artificial Intelligence, including knowledge representation and algorithms for search, optimization, planning, logical and probabilistic reasoning, and machine learning.
                </p>
                <p>
                    In person lectures take place Tuesdays and Thursdays from 1:00pm am to 2:20pm eastern time, which will be accessible to remote students. Prerequisites to CS1410 include (CSCI 0160, 0180 or 0190) and (CSCI 0220, 1450, 0450, APMA 1650 or 1655) or minimum score of WAIVE in 'Graduate Student PreReq'. This course is taught by Professor George Konidaris.
                </p>
            </div>

            {/* LECTURES */}
            <div className={styles.section}>
                <h1>Lectures</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                </Table>
            </div>

            {/* PROJECTS */}
            <div className={styles.section}>
                <h1>Projects</h1>
            </div>

            {/* RESOURCES */}
            <div className={styles.section}>
                <h1>Resources</h1>
            </div>

            {/* HOURS */}
            <div className={styles.section}>
                <h1>Hours</h1>
                <p>
                    In person TA Hours are held at the CIT Room 205. 
                </p>
            </div>

            {/* STAFF */}
            <div className={styles.section}>
                <h1>Staff</h1>
            </div>


        </div>
    )
}

export default Home
