import Avatar from "../../assets/avatar.png"
import styles from "./styles.module.scss";
import { FaFacebookF, FaFigma, FaGithub, FaGithubAlt, FaInstagram, FaLinkedinIn, FaRegEnvelope, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
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
                        <a href="https://api.whatsapp.com/send?phone=5564999698100" target="_blank" rel="noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/ezequiellpires/" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/ezequiel.pires.37" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.linkedin.com/in/ezequiel-pires-e-silva-1aab75190/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="">
                            <FaFigma />
                        </a>
                        <a href="https://github.com/EzequielPires" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                    <div className={styles.group_buttons + " d-flex gap-3 mt-5"}>
                        <a href="/Profile.pdf" download className={styles.btn} style={{ background: '#8257e5' }}>
                            <FiDownloadCloud />Currículo
                        </a>
                        <button className={styles.btn}>
                            <FaRegEnvelope />
                            E-mail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}