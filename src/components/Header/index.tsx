import Logo from "../../assets/logo.svg";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className="container d-flex justify-content-between align-items-center h-100">
                    <Link href={"/"}>
                        <a className={styles.logo}>
                            <img src={Logo.src} alt="" />
                            EzequielCode
                        </a>
                    </Link>
                    <ul className="d-flex gap-5 m-0">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/">
                            <a>Sobre mim</a>
                        </Link>
                        <Link href="/">
                            <a>Experiência</a>
                        </Link>
                        <Link href="/">
                            <a>Projetos</a>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
}