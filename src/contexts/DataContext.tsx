import { createContext, useState, ReactNode, useEffect } from "react";
import h337 from 'heatmap.js';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
import styles from "../styles/components/Chart.module.css";


// todas essas informações dos sensores vem do banco
interface Sensor {
    id: number;// id do sensor
    name: string;//apelido do sensor
    quantity: number; //quantidade de leituras feitas no sensor
    posX: number;//coornenada X do sensor
    posY: number;//coordenada Y do sensor
    //datetime add dia e hora
}
interface Notification {
    sensor_id: string;
    tag_id: string;
    timestamp: string;
    length: number;
    datetime: Date;
}


interface RequestBody {
    id: number;
    sensores: Sensor[];
}
interface ChartData {
    labels: Array<String>;
    data: Array<Number>;
}
interface InfoBoxData {
    mostVisitedDay: LabelCount;
    lessVisitedDay: LabelCount;
    mostVisitedSection: LabelCount;
    lessVisitedSection: LabelCount;
}
interface LabelCount {
    length: number;
    label: string[];
    date: Number[];
}


interface DataContextData {
    dataChart1: ChartData;
    dataChart2: ChartData;
    dataChart3: ChartData;
    dataChart4: ChartData;
    dataBlocks: InfoBoxData;
    updateDateTimeString: String;
    getSensors: () => Sensor[];
    buildHeatmap: () => void;
    setDateTime: () => void;
    getAllNotifications: () => Promise<Notification>;

}

function storeJsonIntoCSV() {


}

interface DataProviderProps {
    children: ReactNode;
}

function getGroupsArray(data) {
    const groups = data.reduce((groups, notification) => {
        return "";
        const date = notification.datetime.toLocaleDateString();
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(notification);
        return groups;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
        return {
            date,
            games: groups[date]
        };
    });
    return groupArrays;
}

function generateRandomQuantitiesPerSensor() {
    var sensores = [] as Sensor[];

    //entrada, frios, bebidas, hortifruti 1, hortifruti 2, saída
    var x = [0.05, 0.35, 0.58, 0.2, 0.5, 0.95];
    //entrada, frios, bebidas, hortifruti 1, hortifruti 2, saída
    var y = [0.08, 0.18, 0.45, 0.67, 0.7, 0.24];


    sensores.push({ id: 0, name: "Sensor Entrada", quantity: 230, posX: x[0], posY: y[0] })
    sensores.push({ id: 1, name: "Sensor Frios", quantity: 185, posX: x[1], posY: y[1] })
    sensores.push({ id: 2, name: "Sensor Bebidas", quantity: 168, posX: x[2], posY: y[2] })
    sensores.push({ id: 3, name: "Sensor Hortifruti 1", quantity: 219, posX: x[3], posY: y[3] })
    sensores.push({ id: 4, name: "Sensor Hortifruti 2", quantity: 219, posX: x[4], posY: y[4] })
    sensores.push({ id: 5, name: "Sensor Saída", quantity: 230, posX: x[5], posY: y[5] })

    return sensores;
}

export const DataContext = createContext({} as DataContextData);

export function DataProvider({ children }: DataProviderProps) {

    const [updateDateTime, setUpdateDateTime] = useState(new Date());
    const [updateDateTimeString, setUpdateDateTimeString] = useState("");

    const initialValue = {} as ChartData;
    const datBlocksInitialValue = {} as InfoBoxData;
    const notificationsToExportInitialValue = {} as Notification;
    const [dataChart1, setDataChart1] = useState(initialValue);
    const [dataChart2, setDataChart2] = useState(initialValue);
    const [dataChart3, setDataChart3] = useState(initialValue);
    const [dataChart4, setDataChart4] = useState(initialValue);
    const [dataBlocks, setDataBlocks] = useState(datBlocksInitialValue);
    const [notificationsToExport, setNotificationsToExport] = useState(notificationsToExportInitialValue);

    async function getDataChart1() {

        let token = await CallApiToken();
        var array = [] as LabelCount[];
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        await axios.get(
            //https://gps-indoor.herokuapp.com/notification/visit/1633048866352-
            'https://gps-indoor.herokuapp.com/notification/visitByDay/1633125455360-',
            config
        )
            .then((response) => {
                array.push(response.data.response);
            }).catch();

        return array[0];
    }
    async function pushSensors() {

        //aplicar lógica do filtro depois do var notifications
        var notifications = await getAllNotifications();
        var xgh = await getDataChart1();
        var chartData1Object = {} as ChartData;

        chartData1Object.labels = {} as String[];
        chartData1Object.data = {} as Number[];

        chartData1Object.labels = xgh.label;
        chartData1Object.data = xgh.date;

        const dates = [""];
        const counts = [""];

        for (let i = 0; i < xgh.length; i++) {
            //chartData1Object.labels.push(xgh[i].date);
            //chartData1Object.data.push(xgh[i].count);
            let auxDate = xgh[i].date;
            let auxCount = xgh[i].count;

            dates.push(auxDate);
            counts.push(auxCount);
        }
        dates.shift();
        counts.shift();
        console.log(dates);
        console.log(counts);
        //console.log(chartData1Object);

        let sensorEntrada = 0;
        let sensorFrios = 0;
        let sensorBebidas = 0;
        let sensorHortifruti1 = 0;
        let sensorHortifruti2 = 0;
        let sensorSaída = 0;


        var data1 = {} as ChartData;
        var data2 = {} as ChartData;
        var data3 = {} as ChartData;
        var data4 = {} as ChartData;
        var datablocks = {} as InfoBoxData;
        var dateTimeArray = {} as Date[];

        for (let i = 0; i < notifications.length; i++) {
            var currentSensor = notifications[i];

            var timestamp = notifications[i].timestamp;
            var date = new Date(timestamp);
            notifications[i].datetime = date;
            //console.log(notifications[i]);
            //console.log(date.toLocaleDateString());
            //AGRUPAR POR DATA E ADICIONAR NO DATACHART
            if (currentSensor.sensor_id == "LEITOR_001") {
                sensorHortifruti1 = sensorHortifruti1 + 1;
            }
            else if (currentSensor.sensor_id == "LEITOR_002") {
                sensorHortifruti2 = sensorHortifruti2 + 1;
            }
            else if (currentSensor.sensor_id == "LEITOR_003") {
                sensorBebidas = sensorBebidas + 1;
            }
            else if (currentSensor.sensor_id == "LEITOR_004") {
                sensorFrios = sensorFrios + 1;
            }
            else if (currentSensor.sensor_id == "LEITOR_005") {
                sensorEntrada = sensorEntrada + 1;

            }
            else if (currentSensor.sensor_id == "LEITOR_006") {
                sensorSaída = sensorSaída + 1;
            }
        }

        getGroupsArray(notifications);

        var sensores = [] as Sensor[];

        //entrada, frios, bebidas, hortifruti 1, hortifruti 2, saída
        var x = [0.05, 0.35, 0.58, 0.2, 0.5, 0.95];
        //entrada, frios, bebidas, hortifruti 1, hortifruti 2, saída
        var y = [0.08, 0.18, 0.45, 0.67, 0.7, 0.24];

        var xgh = notifications[0].sensor_id;
        var data1 = {} as ChartData;
        setDataChart1(data1);

        /*
        MOCK NÃO APAGAR
        sensores.push({ id: 0, name: "Sensor Entrada", quantity: 230, posX: x[0], posY: y[0] });
        sensores.push({ id: 1, name: "Sensor Frios", quantity: 185, posX: x[1], posY: y[1] });
        sensores.push({ id: 2, name: "Sensor Bebidas", quantity: 168, posX: x[2], posY: y[2] });
        sensores.push({ id: 3, name: "Sensor Hortifruti 1", quantity: 219, posX: x[3], posY: y[3] });
        sensores.push({ id: 4, name: "Sensor Hortifruti 2", quantity: 219, posX: x[4], posY: y[4] });
        sensores.push({ id: 5, name: "Sensor Saída", quantity: 230, posX: x[5], posY: y[5] });
        */
        sensores.push({ id: 0, name: "Sensor Entrada", quantity: sensorEntrada, posX: x[0], posY: y[0] });
        sensores.push({ id: 1, name: "Sensor Frios", quantity: sensorFrios, posX: x[1], posY: y[1] });
        sensores.push({ id: 2, name: "Sensor Bebidas", quantity: sensorBebidas, posX: x[2], posY: y[2] });
        sensores.push({ id: 3, name: "Sensor Hortifruti 1", quantity: sensorHortifruti1, posX: x[3], posY: y[3] });
        sensores.push({ id: 4, name: "Sensor Hortifruti 2", quantity: sensorHortifruti2, posX: x[4], posY: y[4] });
        sensores.push({ id: 5, name: "Sensor Saída", quantity: sensorSaída, posX: x[5], posY: y[5] });

        return sensores;

    }
    async function DateAsync() {
        var d = new Date();
        async () => d.setDate(Date.now());
        return d;
    }


    function getNotifications(notifications) {

        for (let i = 0; i < notifications.length; i++) {
            console.log(notifications[i].sensor_id);
            console.log(notifications[i].tag_id);
            var date = new Date(notifications[i].timestamp);
            console.log(date.toLocaleString());
        }
    }
    async function setDateTime() {
        var data = await DateAsync();
        var dataString = data.toLocaleString();
        setUpdateDateTime(data);
        setUpdateDateTimeString(dataString);
    }

    async function getAllNotifications() {
        let token = await CallApiToken();
        var array = [] as Notification[];
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        await axios.get(
            //https://gps-indoor.herokuapp.com/notification/visit/1633048866352-
            'https://gps-indoor.herokuapp.com/notification/',
            config
        )
            .then((response) => {
                array.push(response.data.response);
            }).catch();

        return array[0];

    }
    async function CallApiToken() {
        let hash = "";
        await axios.get(
            'https://gps-indoor.herokuapp.com/oauth/', {
            auth: {
                username: process.env.APP_USERNAME,
                password: process.env.APP_PASSWORD
            }
        }
        )
            .then((response) => {
                hash = response.data.hash;
            })
            .catch()
        return hash;
    }
    async function buildChartOne() {

        function getChartOne() {
            return (
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
            )
        }
        var element = document.getElementById('chartOne');

    }

    async function buildHeatmap() {
        var element = document.getElementById('heatmap');
        var lastElement = element.lastElementChild;
        if (lastElement.id != 'heatmap-image' && lastElement.id != 'drawsensor') {
            element.removeChild(lastElement);
        }

        var heatmapInstance = h337.create({
            // only container is required, the rest will be defaults
            container: document.getElementById('heatmap')
        });

        var sensors = await pushSensors();
        var length = sensors.length;

        // now generate some random data
        var points = [];
        var max = 0;
        var width = 936;
        var height = 560;

        while (length--) {
            var val = sensors[length].quantity;
            var x = sensors[length].posX;
            var y = sensors[length].posY;
            // now also with custom radius
            //var radius = Math.floor(Math.random() * 70);

            max = Math.max(max, val);
            var point = {
                x: Math.floor(x * width),//próximo passo vai ser usar as posições dos sensores no mapa
                y: Math.floor(y * height),
                value: val
                // radius configuration on point basis
                //radius: radius
            };
            points.push(point);
        }
        // heatmap data format
        var data = {
            max: max,
            min: 0,
            data: points
        };


        // if you have a set of datapoints always use setData instead of addData
        // for data initialization
        heatmapInstance.setData(data);
        //getAllNotifications();
    }

    function getSensors() {

        //vou usar essa função aqui quando comunicar com a API
        async function getDataFromApi() {
            const response = await axios.get("https://gps-indoor.herokuapp.com/");//adicionar header depois
            var body = response.request.body as RequestBody;
            return body.sensores;
        }

        return generateRandomQuantitiesPerSensor();

    }
    return (
        <DataContext.Provider value={{
            dataChart1,
            dataChart2,
            dataChart3,
            dataChart4,
            dataBlocks,
            updateDateTimeString,
            setDateTime,
            getSensors,
            buildHeatmap,
            getAllNotifications
        }}
        >
            {children}
        </DataContext.Provider>
    )
}