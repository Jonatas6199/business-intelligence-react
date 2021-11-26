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
                        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],

                        datasets: [{
                            label: 'Visitas por dia',
                            data: [55, 70, 42, 60, 78, 123, 95],
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
                        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],

                        datasets: [{
                            label: 'Média de minutos por dia',
                            data: [45, 40, 35, 54, 63, 70, 45],
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
                        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
                        datasets: [
                            {
                                label: 'Frios',
                                data: [12, 24, 32, 31, 29,35,22],
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1,
                                stack: 'Stack 0'
                            },
                            {
                                label: 'Bebidas',
                                data: [19, 18, 17, 16, 31,27,40],
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1,
                                stack: 'Stack 1'
                            },
                            {
                                label: 'Hortifruti',
                                data: [28, 29, 12, 40, 33,45,32],
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
                                data: [185, 168, 219],
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