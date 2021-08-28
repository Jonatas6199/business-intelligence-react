import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from "../styles/components/Chart.module.css";


export function Chart() {

    return (
        <div className={styles.container}>
            <Bar
                data={{
                    labels: ['Sala de Estar', 'Suíte Master'],
                    datasets: [{
                        label: 'Número de leituras nas últimas 24 horas',
                        data: [12, 19],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={400}
                width={600}
            >

            </Bar>
        </div>
    )

}