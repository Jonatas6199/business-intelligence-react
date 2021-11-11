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
                    <p>
                        123
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>Dia menos visitado</h2>
                    <p>
                        Quarta-feira 03/11/2021
                    </p>
                    <p>
                        42
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>Setor com mais visitas</h2>
                    <p>
                        Hortifruti
                    </p>
                    <p>
                        219
                    </p>
                </div>
                <div className={styles.content}>
                    <h2>Setor com menos visitas</h2>
                    <p>
                        Bebidas
                    </p>
                    <p>
                        168
                    </p>
                </div>
            </div>

        </div>


    )
}