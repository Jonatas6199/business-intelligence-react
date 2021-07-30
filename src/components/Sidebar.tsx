import styles from '../styles/components/Sidebar.module.css';
import { MdDashboard } from "react-icons/md";//icone da dashboard
import { RiMapPin5Fill } from "react-icons/ri";//icone do mapa
import { MdSettings } from "react-icons/md"; //icone de configurações
import { AiFillTag } from "react-icons/ai"; //icone da tag


export function Sidebar() {
    return (
        <div className={styles.container} >
            <ul>
                <li><img src="logo.svg" ></img>Smart Moving</li>
                <div></div>
                <li><MdDashboard className={styles.iconStyle}  />Dashboard</li>
                <li><RiMapPin5Fill className={styles.iconStyle} />Mapa de Calor</li>
                <li><MdSettings className={styles.iconStyle}/>Configurações</li>
                <li><AiFillTag className={styles.iconStyle}/>Tag</li>
            </ul>
        </div>
    )
}