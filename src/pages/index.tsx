import { Dashboard } from "../components/Dashboard";
import { Sidebar } from "../components/Sidebar";
import { SensorsBox } from "../components/SensorsBox";
import { InfoBox } from "../components/InfoBox";
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
                        <Chart />
                    </div>
                    <div className = {styles.infobox}>
                        <InfoBox title="Total de Visitas no Período" amount ="730" />
                        <InfoBox title="Setor Mais Visitado" amount ="Bebidas  450" />
                    </div>
                  
                </section>
            </DataProvider>

        </div>
    )
}