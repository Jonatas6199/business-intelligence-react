import { Dashboard } from "../components/Dashboard";
import { Sidebar } from "../components/Sidebar";
import { SensorsBox } from "../components/SensorsBox";
import { InfoBox } from "../components/InfoBox";
import { Chart } from "../components/Chart";
import { Header } from "../components/Header";
import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import { DataProvider } from "../contexts/DataContext";
import { Filters } from "../components/Filters";
import { Content } from "../components/Content";
export default function Home() {
    return (
        <div >
            <Head>
                <title>
                    Inicio | Smart Moving
                </title>
            </Head>
            <DataProvider>
                <div>
                    <Sidebar />
                    <Header />
                    <Content />
                    <InfoBox title="Total de Visitas no Período" amount="730" />
                    <InfoBox title="Setor Mais Visitado" amount="Bebidas 450" />
                </div>
            </DataProvider>
        </div>
    )
}