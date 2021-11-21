import { createContext, useState, ReactNode, useEffect } from "react";
import h337 from 'heatmap.js';
import axios from 'axios';


// todas essas informações dos sensores vem do banco
interface Sensor {
    id: number;// id do sensor
    name: string;//apelido do sensor
    quantity: number; //quantidade de leituras feitas no sensor
    posX: number;//coornenada X do sensor
    posY: number;//coordenada Y do sensor
}

//array
interface Notifiy {
    timeStamp: number;//data
    idSensor: number;
    idTag: number;
}
interface RequestBody {
    id: number;
    sensores: Sensor[];
}

interface DataContextData {
    updateDateTimeString: String;
    getSensors: () => Sensor[];
    buildHeatmap: () => void;
    setDateTime: () => void;

}

interface DataProviderProps {
    children: ReactNode;
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
    function getConfigData() {

    }
    async function DateAsync(){
        var d = new Date();
        async ()=> d.setDate(Date.now());
        return d;
    }
    function getSensorsPosition() {

    }
    function UpdateData() {

    }
     async function setDateTime(){
        var data = await DateAsync();
        var dataString = data.toLocaleString();
        setUpdateDateTime(data);
        setUpdateDateTimeString(dataString);
    }   

    async function getAllNotifications() {
        let token = await CallApiToken();
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        await axios.get(
            'https://gps-indoor.herokuapp.com/notification/',
            config
        )
            .then((response) => {
                console.log(response)
            })
            .catch()
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
    function buildHeatmap() {
        var element = document.getElementById('heatmap');
        var lastElement = element.lastElementChild;
        if (lastElement.id != 'heatmap-image' && lastElement.id != 'drawsensor') {
            element.removeChild(lastElement);
        }

        var heatmapInstance = h337.create({
            // only container is required, the rest will be defaults
            container: document.getElementById('heatmap')
        });

        var sensors = getSensors();
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
            updateDateTimeString,
            setDateTime,
            getSensors,
            buildHeatmap
        }}
        >
            {children}
        </DataContext.Provider>
    )
}