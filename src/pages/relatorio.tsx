import Head from "next/head";
import { Report } from "../components/Report";


//Criar um context provider de data e passar aqui
export default function Relatório() {
    function getDateNow(){
        const dateNow = Date.now();
        const dateToday = new Date(dateNow);
        const todayFormat = dateToday.toLocaleDateString();
        return todayFormat;
    }
    return (
        <div >
            <Head>
                <title>
                    Relatório | Smart Moving
                </title>
            </Head>
            <Report title="Semanal" startDate={getDateNow()} endDate={getDateNow()} ></Report>
        </div>
    )
}