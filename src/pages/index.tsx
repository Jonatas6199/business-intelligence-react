import { Dashboard } from "../components/Dashboard";
import { Sidebar } from "../components/Sidebar";
import { SensorsBox } from "../components/SensorsBox";
import { Chart } from "../components/Chart";
import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import { DataProvider } from "../contexts/DataContext";
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Inicio | Smart Moving
                </title>
            </Head>
            <DataProvider>
                <section>
                    <div>
                        <Sidebar />
                        <Dashboard />
                        <Chart/>
                    </div>
                   
                </section>
            </DataProvider>

        </div>
    )
}