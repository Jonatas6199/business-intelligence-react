import { createContext, useState, ReactNode, useEffect } from "react";
import axios from 'axios';

// todas essas informações dos sensores vem do banco
interface Sensor{
    id: number;// id do sensor
    name: string;//apelido do sensor
    quantity: number; //quantidade de leituras feitas no sensor
}
interface RequestBody{
    id:number;
    sensores: Sensor[];
}

interface DataContextData{
   getSensors:() => Sensor[];
}

interface DataProviderProps{
    children: ReactNode;
}

function generateRandomQuantitiesPerSensor(){
    var sensores = [] as Sensor[];

    var len = 2;
    while(len--){
        var amount =  Math.floor(Math.random() * 50);
        sensores.push({id: len,name: "sensor" + len, quantity : amount})
    }
    return sensores;
}

export const DataContext =  createContext({} as DataContextData);

export function DataProvider({children}: DataProviderProps){

    function getSensorsPosition(){
        
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
            getSensors
        }}
        >
        {children}
        </DataContext.Provider>
    )
}