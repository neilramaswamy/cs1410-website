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
                        taught by Professor George Konidaris. Students interested in taking CS1410
                        as a capstone course should email George at george_konidaris@brown.edu.
                    </p>
                </div>

                {/* LECTURES */}
                <div className={styles.section} id={SectionID.Lectures}>
                    <h1>Lectures</h1>
                    <p className={styles.lecture_link}>
                        In person lectures take place Tuesdays and Thursdays from 1:00pm to 2:20pm
                        eastern time. Lectures slides will be posted prior to each lecture.
                        Recordings will be available for remote students and review, which are
                        available on{' '}
                        <a
                            href="https://brown.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%22932ab3ad-c590-4c6f-b807-ad9c01423435%22"
                            target="_blank"
                        >
                            Panopto
                        </a>
                        . The supplementary textbook for this course is{' '}
                        <i>
                            Artificial Intelligence: A Modern Approach (Pearson Series in Artifical
                            Intelligence)
                        </i>
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
                                <td>9/9 Introduction; Agents and Agenthood</td>
                                <td>
                                    <a href="/slides/1410_1.pdf" target="_blank">
                                        pdf
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2487ea72-b2c1-41f1-a203-ad9c0142609a"
                                        target="_blank"
                                    >
                                        link
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>9/14 Search</td>
                                <td>
                                    <a href="/slides/1410_2.pdf" target="_blank">
                                        pdf
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d4d56fbd-cf11-4965-89f4-ad9c014260e5"
                                        target="_blank"
                                    >
                                        link
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>9/16 Game Theory</td>
                                <td>
                                    <a href="/slides/1410_3.pdf" target="_blank">
                                        pdf
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e5ff7333-a676-45ca-86bb-ad9c01426102"
                                        target="_blank"
                                    >
                                        link
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>9/21 Adversarial Search</td>
                                <td>
                                    <a href="/slides/1410_4.pdf" target="_blank">
                                        pdf
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=22cdbeca-fec3-48c4-b6eb-ad9c0142611b"
                                        target="_blank"
                                    >
                                        link
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>9/23 Knowledge Representation and Reasoning (Logic)</td>
                                <td>
                                    <a href="/slides/1410_5.pdf" target="_blank">
                                        pdf
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a5ad83a1-0299-4bb8-b08a-ad9c01426135"
                                        target="_blank"
                                    >
                                        link
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>9/30 Uncertain Knowledge and Bayes' Rule </td>
                                <td>
                                    <a href="/slides/1410_6.pdf" target="_blank">
                                        pdf
                                    </a>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>10/5 Hidden Markov Models </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>10/7 Robot Motion Planning</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>10/12 Classical Planning</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>10/14 Probabilistic Planning </td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                        opportunities to receive results from our hidden tests. For instance, if you
                        submit your code for Search to the 'Search (First Submission)' assignment on
                        Gradescope before the listed Submission 1 deadline, you will receive your
                        grade from our autograder once the deadline passes (this includes both
                        visible and hidden tests, though you will not be able to see what the hidden
                        tests are). This is the same autograder that will be used on the Final
                        Submission of the same project. The deadline for the written portion of each
                        project is always one day after the final code deadline. You are granted 3
                        late days for all (not each) projects. Read more about the grading policy in
                        the Resources section.{' '}
                    </p>
                    <table className={styles.table} id={styles.projects_table}>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Release</th>
                                <th>Submission 1 Due Date</th>
                                <th>Submission 2 Due Date</th>
                                <th>Final Code Due Date</th>
                                <th>Written Part Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="/files/install_handout.pdf" target="_blank">
                                        Install Assignment
                                    </a>
                                </td>
                                <td>Sept 9</td>
                                <td>Sept 12</td>
                                <td>N/A</td>
                                <td>Sept 14</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/files/search_handout.pdf" target="_blank">
                                        Search
                                    </a>
                                </td>
                                <td>Sept 15</td>
                                <td>Sept 20</td>
                                <td>Sept 22</td>
                                <td>Sept 24</td>
                                <td>Sept 25</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/files/adversarial_search_handout.pdf" target="_blank">
                                        Adversarial Search
                                    </a>
                                </td>
                                <td>Sept 25</td>
                                <td>Sept 29</td>
                                <td>Oct 1</td>
                                <td>Oct 4</td>
                                <td>Oct 5</td>
                            </tr>
                            <tr>
                                <td>KRR</td>
                                <td>Oct 5</td>
                                <td>Oct 7</td>
                                <td>Oct 9</td>
                                <td>Oct 12</td>
                                <td>Oct 13</td>
                            </tr>
                            <tr>
                                <td>HMM</td>
                                <td>Oct 13</td>
                                <td>Oct 19</td>
                                <td>Oct 21</td>
                                <td>Oct 27</td>
                                <td>Oct 28</td>
                            </tr>
                            <tr>
                                <td>Reinforcement Learning</td>
                                <td>Oct 28</td>
                                <td>Nov 2</td>
                                <td>Nov 4</td>
                                <td>Nov 8</td>
                                <td>Nov 9</td>
                            </tr>
                            <tr>
                                <td>Supervised Learning</td>
                                <td>Nov 10</td>
                                <td>Nov 16</td>
                                <td>Nov 18</td>
                                <td>Nov 22</td>
                                <td>Nov 23</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> Tron (4 parts) </td>
                                <td>Oct 13</td>
                                <td>TBD</td>
                                <td>TBD</td>
                                <td>Oct 18</td>
                                <td>TBD</td>
                            </tr>
                            <tr>
                                <td>Oct 13</td>
                                <td>TBD</td>
                                <td>TBD</td>
                                <td>Nov 1</td>
                                <td>TBD</td>
                            </tr>
                            <tr>
                                <td>Oct 13</td>
                                <td>TBD</td>
                                <td>TBD</td>
                                <td>Nov 22</td>
                                <td>TBD</td>
                            </tr>
                            <tr>
                                <td>Oct 13</td>
                                <td>TBD</td>
                                <td>TBD</td>
                                <td>Dec 17</td>
                                <td>TBD</td>
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
                                    <a href="/files/2021_CS1410_grading_policy.pdf" target="_blank">
                                        Grading and Late Day Policy
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="/files/Gradescope_instructions_1410_2021Fall.pdf"
                                        target="_blank"
                                    >
                                        Gradescope: Getting Started
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="https://edstem.org/us/join/4yrTee"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        EdStem
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/files/Collaboration_Policy.pdf" target="_blank">
                                        Collaboration Policy
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="https://docs.google.com/document/d/1hIOsp8SWZ5TJQpKyUgCtgKYk_ras92UiU6ljDC7qaUY/edit?usp=sharing"
                                        target="_blank"
                                    >
                                        Installation & Setup
                                    </a>
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
                            <tr>
                                <td></td>
                                <td>
                                    <a href="/files/requirements.txt" download>
                                        requirements.txt
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="https://browncs-health-and-wellness.github.io/"
                                        target="_blank"
                                    >
                                        CS Health & Wellness
                                    </a>
                                </td>
                                {/* https://cs.brown.edu/about/system/connecting/ssh/ */}
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <a
                                        href="https://cs.brown.edu/about/system/connecting/ssh/"
                                        target="_blank"
                                    >
                                        Setting Up ssh
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <a href="/files/fastX_guide.pdf" target="_blank">
                                        FastX Guide
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <a href="/files/python_numpy_guide.pdf" target="_blank">
                                        Python & Numpy Guide
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* HOURS */}
                <div className={styles.section} id={SectionID.Hours}>
                    <h1>Hours</h1>
                    <p>
                        In person TA Hours are held at the CIT Room 205. TA Hours will be available
                        for remote students, times TBD!
                    </p>
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

                    <div className={styles.staffWrapper}>
                        {StaffMembers.map((s) => (
                            <StaffCard {...s} />
                        ))}
                    </div>
                    <div className={styles.emails}>
                        <p>
                            gdk@cs.brown.edu <br /> cs1410headtas@lists.brown.edu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
