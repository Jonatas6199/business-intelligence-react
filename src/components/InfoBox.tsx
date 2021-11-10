import styles from '../styles/components/InfoBox.module.css';


export function InfoBox() {

    return (
        <div className={styles.holder}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Dia mais visitado</h2>
                    <p>
                        Sábado 06/11/2021
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>Dia menos visitado</h2>
                    <p>
                        Quarta-feira 03/11/2021
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>Setor com mais visitas</h2>
                    <p>
                        Hortaliças
                    </p>
                    <p>
                        720
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>Setor com menos visitas</h2>
                    <p>
                        Bebidas
                    </p>
                    <p>
                        200
                    </p>
                </div>
            </div>

        </div>


    )
}