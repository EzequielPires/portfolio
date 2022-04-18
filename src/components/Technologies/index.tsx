import styles from "./styles.module.scss";
import Next from "../../assets/next.svg";
import Nest from "../../assets/nest.svg";
import ReactSvg from "../../assets/react.svg"
import FirebaseSvg from "../../assets/firebase.svg"
import SymfonySvg from "../../assets/symfony.svg"
import Flutter from "../../assets/flutter.svg"

export function Technologies() {
    return (
        <div className={styles.technologies}>
            <div className="container">
                <h4>Principais tecnologias</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="d-flex gap-4 mt-5">
                    <div className={styles.card}>
                        <img src={Next.src} alt="" />
                    </div>
                    <div className={styles.card}>
                        <img src={Nest.src} alt="" />
                    </div>
                    <div className={styles.card}>
                        <img src={ReactSvg.src} alt="" />
                    </div>
                    <div className={styles.card}>
                        <img src={Flutter.src} alt="" />
                    </div>
                    <div className={styles.card}>
                        <img src={FirebaseSvg.src} alt="" />
                    </div>
                    <div className={styles.card}>
                        <img src={SymfonySvg.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}