import Link from "next/link"
import styles from '../../styles/Navbar.module.scss'

export default function Navbar() {
    return (
        <header id={styles.header}>
            <nav className={styles.navbar}>
                <div>
                    <Link href="/">
                        <a>Logo</a>
                    </Link>
                </div>
                <div></div>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/servicos">
                            <a>Serviços</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre">
                            <a>Sobre</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}