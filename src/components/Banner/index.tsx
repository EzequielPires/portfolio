import { FaGithub, FaGithubAlt, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import styles from "./styles.module.scss";

export function Banner() {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className="d-flex gap-4 align-items-center">
                    <div>
                        <h4>Olá, eu sou</h4>
                        <h1 className="typing-animation">Ezequiel Pires <span>☕💻</span></h1>
                        <h4>Desenvolvedor Front-end & UI Designer.</h4>
                    </div>
                </div>
                <div className={styles.group_buttons + " d-flex gap-3"}>
                    <a href={"https://www.linkedin.com/in/ezequiel-pires-e-silva-1aab75190/"} target="_blank" rel="noreferrer" className={styles.btn} style={{background: '#8257e5'}}>
                        <FaLinkedinIn />
                        LinkedIn
                    </a>
                    <a href={"https://github.com/EzequielPires"} target="_blank" rel="noreferrer" className={styles.btn}>
                        <FaGithub />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}