import styles from "./styles.module.scss";

export function Experience() {
    return (
        <div className={styles.experience}>
            <div className="container">
                <h4>Experiência</h4>
                <div className="d-flex flex-wrap gap-5 justify-content-between mt-5">
                    <div>
                        <button>Portal Catalão</button>
                    </div>
                    <div className={styles.content}>
                        <div className="d-flex flex-column flex-md-row align-items-start justify-content-between align-items-md-center w-100">
                            <h2>Desenvolvedor Front End - React.js</h2>
                            <span className={styles.time}>Maio 2021 - Atual</span>
                        </div>
                        <span className={styles.company}>Portal Catalão</span>
                        <p>No Portal Catalão atuo como Desenvolvedor Front End, participando desde o processo de prototipação de telas até o produto final. Através dos projetos tenho adiquirido o máximo de conhecimento sobre React js, suas aplicações e conceitos, arquitetura de software, boas práticas e trabalhar em equipe.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}