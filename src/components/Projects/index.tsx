import PortalAutos from "../../assets/portalautos.png"
import PortalCatalao from "../../assets/portalcatalao.png"
import EmLar from "../../assets/emlar.png"
import { CardProject } from "../CardProject";
import styles from "./styles.module.scss";
import Link from "next/link";

export function Projects() {
    return (
        <div className={styles.projects}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-start">
                    <h4>PROJETOS</h4>
                    <Link href="/">
                        <a>Ver todos</a>
                    </Link>
                </div>
                <div className="d-flex flex-wrap gap-5">
                    <CardProject
                        title={"Portal Autos"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius."}
                        link={"https://portalautos.com.br/"}
                        image={PortalAutos.src}
                    />
                    <CardProject
                        title={"Em Lar"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius."}
                        link={"https://emlar.com.br/"}
                        image={EmLar.src}
                    />
                    <CardProject
                        title={"Portal Catalão"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius."}
                        link={"https://www.portalcatalao.com.br/"}
                        image={PortalCatalao.src}
                    />
                </div>
            </div>
        </div>
    )
}