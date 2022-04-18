import Avatar from "../../assets/avatar.png"
import styles from "./styles.module.scss";
import { FaFacebookF, FaFigma, FaInstagram, FaLinkedinIn, FaRegEnvelope, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";

export function About() {
    return (
        <div className={styles.about}>
            <div className="container d-flex flex-wrap align-items-center justify-content-between gap-5">
                <div className={styles.avatar}>
                    <img src={Avatar.src} alt="" />
                </div>
                <div className={styles.content}>
                    <h4>Sobre mim</h4>
                    <h6>Catalão - Go, Brasil</h6>
                    <p>Meu nome é Ezequiel Pires e Silva. Sou desenvolvedor Front-end e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.</p>
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