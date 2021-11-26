import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { Line, Bar } from 'react-chartjs-2';
import styles from "../styles/components/Chart.module.css";


export function Chart() {
    const { dataChart1,dataChart2,dataChart3,dataChart4 } =  useContext(DataContext)

    return (
        <div className={styles.container}>
            <div id="chartOne" className={styles.content}>
                <h2 className={styles.margin}>Visitas</h2>
                <Line className={styles.margin}
                    data={{
                        labels: ['28/09', '29/09', '22/10', '23/10', '24/10', '25/10', '26/10'],

                        datasets: [{
                            label: 'Visitas por dia',
                            data: [2, 2, 4, 1, 6, 20, 2],
                            tension: 0.1,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                        }],

                    }}

                >
                </Line>
            </div>
            <div className={styles.content}>
                <h2 className={styles.margin}>Tempo médio das visitas em minutos por dia</h2>
                <Line id="chartTwo" className={styles.margin}
                    data={{
                        labels: ['01/09', '28/09', '29/09', '22/10', '24/10', '25/10', '26/10'],

                        datasets: [{
                            label: 'Média de minutos por dia',
                            data: [0.04, 1.25, 1.14, 2.16, 4.1, 6.72, 140],
                            tension: 0.1,
                            backgroundColor: 'rgba(0, 181, 204, 0.2)',
                            borderColor: 'rgba(0, 181, 204, 1)',
                            borderWidth: 1
                        }],

                    }}
                    height={400}
                    width={600}
                >
                </Line>
            </div>
            <div className={styles.content}>
                <h2 className={styles.margin}>Visitas por setor</h2>
                <Bar id="chartThree" className={styles.margin}
                    data={{
                        labels: ['01/09', '28/09', '29/09', '22/10', '23/10', '24/10', '25/10', '26/10'],
                        datasets: [
                            {
                                label: 'Frios',
                                data: [1, 1, 1, 1, 0,2,6,0],
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1,
                                stack: 'Stack 0'
                            },
                            {
                                label: 'Bebidas',
                                data: [0, 0, 1, 1, 0,2,4,1],
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1,
                                stack: 'Stack 1'
                            },
                            {
                                label: 'Hortifruti',
                                data: [0, 1, 0, 2, 1,2,10,1],
                                backgroundColor: 'rgba(38, 166, 91, 0.2)',
                                borderColor: 'rgba(38, 166, 91, 1)',
                                borderWidth: 1,
                                stack: 'Stack 2'
                            }
                        ]
                    }}
                    height={400}
                    width={600}
                >
                </Bar>
            </div>
            <div className={styles.content}>
                <h2 className={styles.margin}>Visitas por setor no total</h2>
                <Bar id="chartFour" className={styles.margin}
                        data={{
                            labels: ['Frios', 'Bebidas', 'Hortifruti'],
                            datasets: [{
                                label: 'Setor',
                                data: [38, 35, 47],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(38, 166, 91, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(38, 166, 91, 1)'
                                ],
                                borderWidth: 1
                            }],
                    
                        }}
                      
                    >

                    </Bar>
            </div>

        </div>
    )
    //TODO: TELA DE GERACAO DE RELATORIO, E NÃO PRECISA EXIBIR ELE, SÓ MANDAR BAIXAR
    //ENVIAR OS RELATORIOS PRA API E DEIXAR DISPONIVEL PRA BAIXAR
    //TELA DE EXPORTAR OS DADOS NO FORMATO .CSV
    //FAZER FILTROS NO WEB E NO MOBILE
    //NO MOBILE, SALVAR O RELATÓRIO EM ALGUM LUGAR E ABRIR ELE LÁ SÓ PELO PRINT MESMO
}