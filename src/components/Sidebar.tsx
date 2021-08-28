import styles from '../styles/components/Sidebar.module.css';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { MdDashboard } from "react-icons/md";//icone da dashboard
import { RiMapPin5Fill } from "react-icons/ri";//icone do mapa
import { MdSettings } from "react-icons/md"; //icone de configurações
import { RiRefreshLine } from 'react-icons/ri'; //ícone de atualizar dados



export function Sidebar() {
    const { buildHeatmap } = useContext(DataContext);
    return (
        <div className={styles.container} >
            <ul>
                <li><img src="logo.png" ></img>Smart Moving</li>
                <div></div>
                <li><RiMapPin5Fill className={styles.iconStyle} />Mapa de Calor</li>
                <li><MdDashboard className={styles.iconStyle}  />Gráficos</li>
                <li><MdSettings className={styles.iconStyle}/>Configurações</li>
                <li onClick={buildHeatmap} ><RiRefreshLine className={styles.iconStyle} />Atualizar Dados</li>
            </ul>
        </div>
    )
}