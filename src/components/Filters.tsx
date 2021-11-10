import styles from '../styles/components/Filters.module.css';
import { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
export function Filters() {



    return (

        <div className={styles.container}>

            <input>
                
            </input>
            <input>
            </input>

            <button className={styles.buttonStyle}>
                Aplicar
            </button>

            <button className={styles.buttonStyle}>
                24h
            </button>
            <button className={styles.buttonStyle}>
                7D
            </button>
            <button className={styles.buttonStyle}>
                15D
            </button>
            <button className={styles.buttonStyle}>
                30D
            </button>

        </div>

    )
}