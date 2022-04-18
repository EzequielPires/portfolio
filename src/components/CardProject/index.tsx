import { FiLink } from "react-icons/fi";
import styles from "./styles.module.scss";

export function CardProject({title, description, image, link}) {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <img src={image} alt="" />
            </div>
            <div className={styles.card_body}>
                <span className={styles.title}>{title}</span>
                <p>{description}</p>
                <a href="">Tecnologias usadas no projeto</a>
                <a className={styles.btn} href={link} target="_blank"><FiLink /> Visualizar</a>
            </div>
        </div>
    )
}