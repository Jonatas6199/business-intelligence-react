import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import styles from "../styles/components/Dashboard.module.css";
import h337 from 'heatmap.js';
import {MdRefresh} from 'react-icons/md';
import { useReducer } from "react";

export function Dashboard() {
  //o que posso fazer é criar uma instância, chamando um evento só após carregar a página
  //com isso daria pra chamar só as funções de adicionar os pontos, n sei se seria intuitivo
  const { buildHeatmap } = useContext(DataContext);

  
  useEffect(()=>{
    buildHeatmap();
  },[])

  
  return (
    <div>
      <div id="heatmapContainer" className={styles.container}>
        <h2> Mapa de Calor</h2>
        <div id="heatmap" className={styles.heatmap}>
          <img id="heatmap-image" src="/images/planta_baixa.png"></img>
         
        </div>

      </div>
     
    </div>
  )
}