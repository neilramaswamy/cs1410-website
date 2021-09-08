import { Header } from 'components/Header'
import { StaffCard } from 'components/StaffCard'
import { SectionID } from 'data/sectionID'
import styles from 'styles/Home.module.scss'
import { StaffMembers } from '../data/staff'

const Home = (): JSX.Element => {
    return (
        <div className="home">
            <div className={styles.homebg}>
                <Header />
            </div>

            <div className={styles.main_body}>
                {/* COURSE INFO */}
                <div className={styles.section}>
                    <h1>
                        {' '}
                        <br /> Welcome to CS 1410!
                    </h1>
                    <p>
                        CS1410 is an introductory course to the field of Artificial Intelligence,
                        including knowledge representation and algorithms for search, optimization,
                        planning, logical and probabilistic reasoning, and machine learning. We're
                        gonna teach you how to teach computers common sense! Prerequisites to CS1410
                        include (CSCI 0160, 0180 or 0190) and (CSCI 0220, 1450, 0450, APMA 1650 or
                        1655) or minimum score of WAIVE in 'Graduate Student PreReq'. This course is
                        taught by Professor George Konidaris.
                    </p>
                </div>

                {/* LECTURES */}
                <div className={styles.section} id={SectionID.Lectures}>
                    <h1>Lectures</h1>
                    <p>
                        In person lectures take place Tuesdays and Thursdays from 1:00pm am to
                        2:20pm eastern time. Recordings will be available for remote students.
                    </p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.topic}>Topic</th>
                                <th>Slides</th>
                                <th>Recordings</th>
                                <th>Readings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* PROJECTS */}
                <div className={styles.section} id={SectionID.Projects}>
                    <h1>Projects</h1>
                    <p>
                        All projects are in Python and due at 11:59pm Eastern on the listed date.
                        Before each project (besides the install assignment) you have two
                        opportunities to receive results from our hidden tests. You are granted 3
                        late days for all (not each) project. Read more about the grading policy in
                        the Resources section.{' '}
                    </p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Release</th>
                                <th>Submission 1 Due Date</th>
                                <th>Submission 2 Due Date</th>
                                <th>Final Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Install Assignment</td>
                                <td>Sept 9</td>
                                <td>Sept 12</td>
                                <td>N/A</td>
                                <td>Sept 14</td>
                            </tr>
                            <tr>
                                <td>Search</td>
                                <td>Sept 15</td>
                                <td>Sept 20</td>
                                <td>Sept 22</td>
                                <td>Sept 24</td>
                            </tr>
                            <tr>
                                <td>Adversarial Search</td>
                                <td>Sept 25</td>
                                <td>Sept 29</td>
                                <td>Oct 1</td>
                                <td>Oct 4</td>
                            </tr>
                            <tr>
                                <td>KRR</td>
                                <td>Oct 5</td>
                                <td>Oct 7</td>
                                <td>Oct 9</td>
                                <td>Oct 12</td>
                            </tr>
                            <tr>
                                <td>HMM</td>
                                <td>Oct 13</td>
                                <td>Oct 19</td>
                                <td>Oct 21</td>
                                <td>Oct 27</td>
                            </tr>
                            <tr>
                                <td>Reinforcement Learning</td>
                                <td>Oct 28</td>
                                <td>Nov 2</td>
                                <td>Nov 4</td>
                                <td>Nov 8</td>
                            </tr>
                            <tr>
                                <td>Supervised Learning</td>
                                <td>Nov 10</td>
                                <td>Nov 16</td>
                                <td>Nov 18</td>
                                <td>Nov 22</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> Tron (4 parts) </td>
                                <td>Oct 13</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>Oct 18</td>
                            </tr>
                            <tr>
                                <td>Oct 13</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>Nov 1</td>
                            </tr>
                            <tr>
                                <td>Oct 13</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>Nov 22</td>
                            </tr>
                            <tr>
                                <td>Oct 13</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>Dec 17</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* RESOURCES */}
                <div className={styles.section} id={SectionID.Resources}>
                    <h1>Resources</h1>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Policies</th>
                                <th>Guides</th>
                                <th>Important Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="/files/2021_CS1410_grading_policy.pdf" download>
                                        Grading and Late Day Policy
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="/files/Gradescope_instructions_1410_2021Fall.pdf"
                                        download
                                    >
                                        Gradescope: Getting Started
                                    </a>
                                </td>
                                <td>Edmodo</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <a>Installation & Setup</a>
                                </td>
                                <td>
                                    <a
                                        href="https://signmeup.cs.brown.edu/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        SignMeUp
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* HOURS */}
                <div className={styles.section} id={SectionID.Hours}>
                    <h1>Hours</h1>
                    <p>In person TA Hours are held at the CIT Room 205.</p>
                    <div className={styles.calendar}>
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=c_0580pi2rbochd9cq2l6gpch8b0%40group.calendar.google.com&ctz=America%2FNew_York"
                            style={{ borderWidth: 0, resize: 'both', overflowX: 'scroll' }}
                            width="100%"
                            height="650px"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                </div>

                {/* STAFF */}
                <div className={styles.section} id={SectionID.Staff}>
                    <h1>Staff</h1>
                    {/* link to hta emails/relecant contacts */}
                    {/* cs1410headtas@lists.brown.edu */}

                    <div className={styles.staffWrapper}>
                        {StaffMembers.map((s) => (
                            <StaffCard {...s} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
