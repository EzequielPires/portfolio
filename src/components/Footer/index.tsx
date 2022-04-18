import Link from "next/link";
import Logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className="container d-flex justify-content-between align-items-center py-4">
                <span>@ 2022 - Ezequiel Pires</span>
                <Link href={"/"}>
                    <a className={styles.logo}>
                        <img src={Logo.src} alt="" />
                        EzequielCode
                    </a>
                </Link>
            </div>
        </div>
    )
}