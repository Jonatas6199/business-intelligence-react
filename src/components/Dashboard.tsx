import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import styles from "../styles/components/Dashboard.module.css";
import h337 from 'heatmap.js';

import { Heatmap } from "./Heatmap";
import { useReducer } from "react";

export function Dashboard() {
  //o que posso fazer é criar uma instância, chamando um evento só após carregar a página
  //com isso daria pra chamar só as funções de adicionar os pontos, n sei se seria intuitivo
  const { getSensors } = useContext(DataContext);
  function BuildDashboard() {
    // minimal heatmap instance configuration
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
      // now also with custom radius
      //var radius = Math.floor(Math.random() * 70);

      max = Math.max(max, val);
      var point = {
        x: Math.floor(Math.random() * width),//próximo passo vai ser usar as posições dos sensores no mapa
        y: Math.floor(Math.random() * height),
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
    //heatmapInstance.addData(points);
  
  }

  return (
    <div>
      <div id="heatmapContainer" className={styles.container}>
        <div id="heatmap" className={styles.heatmap}>
          <img id="heatmap-image" src="/images/planta.png"></img>
        </div>
       
      </div>
      <button onClick={BuildDashboard}>
        Exibir Mapa de Calor
      </button>
    </div>
  )
}