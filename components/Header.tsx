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
                <Link href="thisnowork">{headerLinkContent('TODO: make navbar!!')}</Link>
                <Link href="thisnowork">{headerLinkContent('Info')}</Link>
                <Link href="thisnowork">{headerLinkContent('Lectures')}</Link>
                <Link href="thisnowork">{headerLinkContent('Projects')}</Link>
                <Link href="thisnowork">{headerLinkContent('Resources')}</Link>
                <Link href="thisnowork">{headerLinkContent('Hours')}</Link>
                <Link href="thisnowork">{headerLinkContent('Staff')}</Link>
            </section>
        </header>
    )
}
