import { FC, useState } from "react";
import { Addtaskform } from "./Addtaskform";

interface Props{
    
}

export const Bottombar:FC<Props> = (props) => {

    const [addtask, setAddtask] = useState(false)

    return(
        <div className="Bottombar">
            <button className="button" onClick={() => {setAddtask(true)}}><i className="fa fa-plus"></i></button>
            <Addtaskform show={addtask} close={() => setAddtask(false)}/>
        </div>
    )
}