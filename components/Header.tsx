import { SectionID } from 'data/sectionID'
import Link from 'next/link'
import styles from './Header.module.scss'

export const Header = (): JSX.Element => {
    const headerLinkContent = (text: string): JSX.Element => (
        <a>
            <h5 className={styles.headerLinkText}>{text}</h5>
        </a>
    )

    return (
        <header className={styles.container}>
            <div>{/* Logo goes here! */}</div>
            <section className={styles.linkContainer}>
                <Link href={`#${SectionID.Lectures}`}>{headerLinkContent('Lectures')}</Link>
                <Link href={`#${SectionID.Projects}`}>{headerLinkContent('Projects')}</Link>
                <Link href={`#${SectionID.Resources}`}>{headerLinkContent('Resources')}</Link>
                <Link href={`#${SectionID.Hours}`}>{headerLinkContent('Hours')}</Link>
                <Link href={`#${SectionID.Staff}`}>{headerLinkContent('Staff')}</Link>
            </section>
        </header>
    )
}
