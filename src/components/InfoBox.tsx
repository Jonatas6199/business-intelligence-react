import styles from '../styles/components/InfoBox.module.css';


export function InfoBox() {

    return (
        <div className={styles.holder}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Dia mais visitado</h2>
                    <p>
                        25/11/2021
                    </p>
                    <p>
                        20
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>Dia menos visitado</h2>
                    <p>
                        23/10/2021
                    </p>
                    <p>
                        1
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>Setor com mais visitas</h2>
                    <p>
                        Hortifruti
                    </p>
                    <p>
                        47
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>Setor com menos visitas</h2>
                    <p>
                        Bebidas
                    </p>
                    <p>
                        35
                    </p>
                </div>
            </div>

        </div>


    )
}