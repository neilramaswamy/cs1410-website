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
                <Link href="thisnowork">{headerLinkContent('This no work')}</Link>
            </section>
        </header>
    )
}
