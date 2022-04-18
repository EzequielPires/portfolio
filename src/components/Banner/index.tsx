import { FaGithub, FaGithubAlt, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import styles from "./styles.module.scss";

export function Banner() {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className="d-flex gap-4 align-items-center">
                    <div>
                        <h4>Olá, eu sou</h4>
                        <h1 className="typing-animation">Ezequiel Pires ☕💻</h1>
                        <h4>Desenvolvedor Front-end & UI Designer.</h4>
                    </div>
                </div>
                <div className={styles.group_buttons + " d-flex gap-3"}>
                    <button style={{background: '#8257e5'}}>
                        <FaLinkedinIn />
                        LinkedIn
                    </button>
                    <button>
                        <FaGithub />
                        GitHub
                    </button>
                </div>
            </div>
        </div>
    );
}