import Avatar from "../../assets/avatar.png"
import styles from "./styles.module.scss";
import { FaFacebookF, FaFigma, FaInstagram, FaLinkedinIn, FaRegEnvelope, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";

export function About() {
    return (
        <div className={styles.about}>
            <div className="container d-flex justify-content-between gap-5">
                <div className={styles.avatar}>
                    <img src={Avatar.src} alt="" />
                </div>
                <div className={styles.content}>
                    <h4>Sobre mim</h4>
                    <h6>Catalão - Go, Brasil</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac commodo dolor, nec bibendum velit.</p>
                    <div className={styles.icons + " d-flex gap-4 mt-5"}>
                        <FaWhatsapp />
                        <FaInstagram />
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaFigma />
                        <FaTwitter />
                    </div>
                    <div className={styles.group_buttons + " d-flex gap-3 mt-5"}>
                        <button style={{background: '#8257e5'}}>
                            <FiDownloadCloud />Currículo
                        </button>
                        <button>
                            <FaRegEnvelope />
                            E-mail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}