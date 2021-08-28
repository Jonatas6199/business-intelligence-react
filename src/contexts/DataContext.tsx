import { createContext, useState, ReactNode, useEffect } from "react";
import h337 from 'heatmap.js';
import axios from 'axios';

// todas essas informações dos sensores vem do banco
interface Sensor{
    id: number;// id do sensor
    name: string;//apelido do sensor
    quantity: number; //quantidade de leituras feitas no sensor
    posX: number;//coornenada X do sensor
    posY: number;//coordenada Y do sensor
}

//array
interface Notifiy{
    timeStamp: number;//data
    idSensor: number;
    idTag: number;
}
interface RequestBody{
    id:number;
    sensores: Sensor[];
}

interface DataContextData{
   getSensors:() => Sensor[];
   buildHeatmap:() => void;
}

interface DataProviderProps{
    children: ReactNode;
}

function generateRandomQuantitiesPerSensor(){
    var sensores = [] as Sensor[];

    var x = 0.1;
    var y = 0.3;
    var len = 2;
    while(len--){
        x = x + 0.3;
        y = y + 0.2;
        var amount =  Math.floor(Math.random() * 50);
        sensores.push({id: len,name: "sensor" + len, quantity : amount, posX : x, posY :y})
    }
    return sensores;
}

export const DataContext =  createContext({} as DataContextData);

export function DataProvider({children}: DataProviderProps){

    function getSensorsPosition(){
        
    }
    function UpdateData(){
        
    }
    function buildHeatmap(){
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
    }
    function getSensors(){

        //vou usar essa função aqui quando comunicar com a API
        async function getDataFromApi(){
            const response = await axios.get("https://gps-indoor.herokuapp.com/");//adicionar header depois
            var body =  response.request.body as RequestBody;
            return body.sensores;
        }

        return generateRandomQuantitiesPerSensor();
       
    }
    return(
        <DataContext.Provider value={{
            getSensors,
            buildHeatmap
        }}
        >
        {children}
        </DataContext.Provider>
    )
}