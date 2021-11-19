import styles from '../styles/components/Filters.module.css';
import { useState, useEffect, useContext } from 'react';
import ReactDatePicker from 'react-datepicker';
export function Filters() {

    //const[btn24,setbtn24] = useContext(btn24hContext);

    return (

        <div className={styles.container}>
            <h2> Filtros</h2>
            <div className={styles.content}>


                <button className={styles.buttonStyle}>
                    24h
                </button>
                <button className={styles.selectedbuttonStyle}>
                    7D
                </button>
                <button className={styles.buttonStyle}>
                    15D
                </button>
                <button className={styles.buttonStyle}>
                    30D
                </button>
                
                <input className={styles.input} placeholder="Data Inicial (dd/mm/yyyy)" >

                </input>
                <input className={styles.input}  placeholder="Data Final (dd/mm/yyyy)" >
                </input>

                <button className={styles.buttonStyle}>
                    Aplicar
                </button>
            </div>
        </div>

    )
}