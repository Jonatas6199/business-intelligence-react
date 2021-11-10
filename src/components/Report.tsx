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
    const genderOptions = {
        maintainAspectRatio: true,
        responsive: true,
        cutoutPercentage: 80,
        showTooltips: true,
        onAnimationComplete: function () {
            this.showTooltip(this.datasets[0].points, true);
        },
        tooltipEvents: []
    }

    const data = {
        labels: ['Frios', 'Bebidas', 'Hortifruti'],
        datasets: [{
            label: 'Setor',
            data: [128, 101, 142],
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

    }
    return (

        <div className={styles.container}>
            <span>
                <h1 className={styles.title}>
                    Relatório {props.title} - {getDateNow()}
                </h1>
                <h3>Período escolhido dos dados: {props.startDate} - {props.endDate}</h3>

                {
                    //gráficos vão ficar nessa div debaixo
                    //Visitas na semana conta entradas e saídas
                    //Quadro de tempo médio de visitas == hora de entrada menos a hora da saída

                }
                <div>
                    <h2>Visitas na semana</h2>
                    <Line
                        data={{
                            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],

                            datasets: [{
                                label: 'Visitas por dia',
                                data: [55, 70, 42, 60, 78],
                                tension: 0.1,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)'
                                ],
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
                            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],

                            datasets: [{
                                label: 'Média de minutos por dia',
                                data: [45, 40, 48, 68, 45, 46, 58, 32, 25, 55],
                                tension: 0.1,
                                backgroundColor: [
                                    'rgba(0, 181, 204, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(0, 181, 204, 1)'
                                ],
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
                            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
                            datasets: [
                                {
                                    label: 'Frios',
                                    data: [12, 24, 32, 31, 29],
                                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                    borderColor: 'rgba(255, 99, 132, 1)',
                                    borderWidth: 1,
                                    stack: 'Stack 0'
                                },
                                {
                                    label: 'Bebidas',
                                    data: [19, 18, 17, 16, 31],
                                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                    borderColor: 'rgba(54, 162, 235, 1)',
                                    borderWidth: 1,
                                    stack: 'Stack 1'
                                },
                                {
                                    label: 'Hortifruti',
                                    data: [28, 29, 12, 40, 33],
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
                    <h2>Visitas por setor durante a semana inteira</h2>
                    <Doughnut
                        options={genderOptions}
                        data={data}
                        height={400}
                        width={600}
                    >

                    </Doughnut>
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
            </span>
        </div>
    )
}