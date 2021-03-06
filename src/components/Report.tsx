import { Header } from "./Header";
import styles from "../styles/components/Report.module.css"
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

interface ReportProps {
    title: string;
    startDate: string;
    endDate: string;
}

export function Report(props: ReportProps) {

    function getDateNow() {
        const dateNow = Date.now();
        const dateToday = new Date(dateNow);
        const todayFormat = dateToday.toLocaleDateString();
        return todayFormat;
    }
 
    return (

        <div className={styles.container}>
            <span>
                <h1 className={styles.title}>
                    Relatório {props.title} - {getDateNow()}
                </h1>
                <h3>Período escolhido dos dados: 01/11/2021 - 07/11/2021</h3>

                {
                    //gráficos vão ficar nessa div debaixo
                    //Visitas na semana conta entradas e saídas
                    //Quadro de tempo médio de visitas == hora de entrada menos a hora da saída

                }
                <div>
                    <h2>Visitas na semana</h2>
                    <Line
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
                        height={400}
                        width={600}
                    >
                    </Line>
                    <h2>Tempo médio das visitas em minutos por dia</h2>
                    <Line
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
                    <h2>Visitas por setor por dia</h2>
                    <Bar
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
                    {
                        // nesse caso aqui, só preciso somar tudo dos outros dias
                    }
                    <h2>Visitas por setor no total</h2>
                    <Bar className={styles.margin}
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
            </span>
        </div>
    )
}