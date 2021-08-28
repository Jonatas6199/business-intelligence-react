import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
export function DrawSensor(props) {

    return (

        <canvas>
            <circle width="50" height="50" color="black"></circle>
            <circle width="50" height="50" color="green"></circle>
            <circle width="50" height="50" color="blue"></circle>
            <circle width="50" height="50" color="red"></circle>
        </canvas>

    )
}