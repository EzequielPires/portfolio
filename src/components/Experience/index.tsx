import styles from "./styles.module.scss";

export function Experience() {
    return (
        <div className={styles.experience}>
            <div className="container">
                <h4>Experiência</h4>
                <div className="d-flex justify-content-between mt-5">
                    <div>
                        <button>Portal Catalão</button>
                    </div>
                    <div className={styles.content}>
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h2>Desenvolvedor Front End - React.js</h2>
                            <span className={styles.time}>Maio 2021 - Atual</span>
                        </div>
                        <span className={styles.company}>Portal Catalão</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}