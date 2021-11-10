import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from "../styles/components/Chart.module.css";


export function Chart() {

    return (
        <div className={styles.container}>
            <h2>Visitas</h2>
            <div className={styles.content}>
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
           
        </div>
    )
                //TODO: TELA DE GERACAO DE RELATORIO, E NÃO PRECISA EXIBIR ELE, SÓ MANDAR BAIXAR
                //ENVIAR OS RELATORIOS PRA API E DEIXAR DISPONIVEL PRA BAIXAR
                //TELA DE EXPORTAR OS DADOS NO FORMATO .CSV
                //FAZER FILTROS NO WEB E NO MOBILE
                //NO MOBILE, SALVAR O RELATÓRIO EM ALGUM LUGAR E ABRIR ELE LÁ SÓ PELO PRINT MESMO
}