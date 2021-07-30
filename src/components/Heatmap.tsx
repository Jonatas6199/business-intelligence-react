import h337 from 'heatmap.js'
import { ReactNode } from 'react';

interface HeatmapProperties{
    children: ReactNode;
}
export function Heatmap({children} : HeatmapProperties){

    var heatmapContainerInside = "";
    console.log(heatmapContainerInside);
    return(
        <div>
            Heatmap
        </div>
    )
}