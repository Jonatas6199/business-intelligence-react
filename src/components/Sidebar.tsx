import styles from '../styles/components/Sidebar.module.css';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
import { MdDashboard } from "react-icons/md";//icone da dashboard
import { RiMapPin5Fill } from "react-icons/ri";//icone do mapa
import { MdSettings } from "react-icons/md"; //icone de configurações
import { RiRefreshLine } from 'react-icons/ri'; //ícone de atualizar dados
import { RiFilePaperLine } from 'react-icons/ri';
import { MdArrowForward } from 'react-icons/md';



export function Sidebar() {
    const { buildHeatmap } = useContext(DataContext);
    return (
        <div className={styles.navcontainer} >
            <div className={styles.logo}>
                <h2>SmartMoving</h2>
            </div>
            <div className={styles.wrapper}>
                <ul>
                    <li>
                        <MdDashboard className={styles.iconStyle} /> Dashboard
                    </li>

                    <li>
                        <RiFilePaperLine className={styles.iconStyle} /> Relatórios
                    </li>

                    <li>
                        <MdArrowForward className={styles.iconStyle} />Exportar Dados
                    </li>

                    <li onClick={buildHeatmap} >
                        <RiRefreshLine className={styles.iconStyle} />Atualizar
                    </li>
                </ul>
            </div>

        </div>
    )
}