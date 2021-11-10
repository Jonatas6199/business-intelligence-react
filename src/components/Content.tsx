import React from "react";
import styles from "../styles/components/Content.module.css";
import { Chart } from "./Chart";
import { Dashboard } from "./Dashboard";
import { Filters } from "./Filters";

export function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.contentwrapper}>
                <div className={styles.tabs}>
                    <Filters />
                </div>
            </div>
            <Dashboard/>
            <Chart/>
        </div>
    )
}